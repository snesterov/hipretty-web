import urllib.request
import re
import json
import os
import ssl
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

def fetch_channel_html(channel_name):
    url = f'https://t.me/s/{channel_name}'
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=25) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def download_img(url, dest_path):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            data = resp.read()
            with open(dest_path, 'wb') as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return False

def parse_channel_posts(channel_name, prefix, existing_ids, cuts_dir, default_cat='silk', default_price='от 45 000 ₽'):
    try:
        html = fetch_channel_html(channel_name)
        print(f"[{channel_name}] HTML received, length: {len(html)} bytes.")
    except Exception as e:
        print(f"[{channel_name}] Failed to fetch Telegram channel: {e}")
        return []

    raw_splits = re.split(rf'data-post="{channel_name}/(\d+)"', html)
    post_blocks = []
    if len(raw_splits) > 1:
        for i in range(1, len(raw_splits), 2):
            p_id = raw_splits[i]
            p_content = raw_splits[i+1] if i+1 < len(raw_splits) else ""
            post_blocks.append((p_id, p_content))

    print(f"[{channel_name}] Parsed {len(post_blocks)} messages from channel HTML.")
    new_cuts = []

    for post_id, block in reversed(post_blocks):
        full_id = f"{prefix}_{post_id}" if prefix != "cut" else str(post_id)
        if full_id in existing_ids or str(post_id) in existing_ids:
            continue

        # Look for hashtag or cut number
        cut_match = re.search(r'#(\d{2,4})', block)
        cut_num = f"#{cut_match.group(1)}" if cut_match else f"#{post_id}"

        # Look for photo / thumbnail URL
        img_match = re.search(r'background-image:url\([\'"]?(https://[^\'")]+)[\'"]?\)', block)
        if not img_match:
            img_match = re.search(r'<img[^>]+src=[\'"]?(https://[^\'")]+)[\'"]?', block)
        if not img_match:
            continue
        remote_img = img_match.group(1)

        # Extract text / description
        text_match = re.search(r'<div class="tgme_widget_message_text[^>]*>(.*?)</div>', block, re.DOTALL)
        raw_text = ""
        if text_match:
            raw_text = re.sub(r'<br\s*/?>', ' ', text_match.group(1))
            raw_text = re.sub(r'<[^>]+>', '', raw_text).strip()

        len_match = re.search(r'(\d{2,3})\s*см', raw_text, re.I)
        length = int(len_match.group(1)) if len_match else 60

        weight_match = re.search(r'(\d{2,3})\s*(?:гр|г)\b', raw_text, re.I)
        weight = f"{weight_match.group(1)} гр" if weight_match else "110 гр"

        price_match = re.search(r'(\d{2,3}[.\s]\d{3})\s*(?:₽|руб|\b)', raw_text)
        price_val = price_match.group(1).replace('.', ' ') + " ₽" if price_match else default_price

        # Category determination
        cat = default_cat
        badge = "Премиум шелк"
        lower_txt = raw_text.lower()
        if 'волна' in lower_txt or 'волн' in lower_txt:
            cat = 'wave'
            badge = 'Природная волна'
        elif 'прям' in lower_txt or 'гладк' in lower_txt:
            cat = 'straight'
            badge = 'Прямой шелк'
        elif 'блонд' in lower_txt or 'светл' in lower_txt or '10 тон' in lower_txt or '9 тон' in lower_txt:
            cat = 'blond'
            badge = 'Окрашенный блонд'
        elif 'рус' in lower_txt or 'пепельн' in lower_txt or '8 тон' in lower_txt or '7 тон' in lower_txt:
            cat = 'wave'
            badge = 'Окрашенный русый'
        elif 'шоколад' in lower_txt or 'темн' in lower_txt or 'брюнет' in lower_txt or '4 тон' in lower_txt:
            cat = 'straight'
            badge = 'Горький шоколад'

        title = f"Срез {cut_num} ({length} см / {weight})"
        local_img_name = f"{prefix}_{post_id}.jpg"
        local_img_path = os.path.join(cuts_dir, local_img_name)

        print(f"[{channel_name}] -> Found NEW CUT: {title} (Post ID {post_id})")
        if download_img(remote_img, local_img_path):
            img_cdn_url = f"https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/{local_img_name}"
            cut_entry = {
                "id": str(post_id),
                "cutNum": cut_num,
                "title": title,
                "cat": cat,
                "badge": badge,
                "length": length,
                "weight": weight,
                "price": price_val,
                "img": img_cdn_url,
                "tgUrl": f"https://t.me/{channel_name}/{post_id}",
                "desc": raw_text[:280] if raw_text else f"Срез {cut_num} из канала @{channel_name}"
            }
            new_cuts.append(cut_entry)
            existing_ids.add(str(post_id))
            existing_ids.add(full_id)

    return new_cuts

def sync():
    print("=== DUAL TELEGRAM SYNC START (@hi_pretty & @volosy_hi_pretty) ===")
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    cuts_dir = os.path.join(root_dir, 'cuts')
    feed_file = os.path.join(root_dir, 'feed.json')
    js_v2_file = os.path.join(root_dir, 'hipretty_v2.js')
    js_file = os.path.join(root_dir, 'hipretty.js')
    os.makedirs(cuts_dir, exist_ok=True)

    # 1. Existing IDs
    existing_ids = set()
    if os.path.exists(js_v2_file):
        with open(js_v2_file, 'r', encoding='utf-8') as f:
            js_content = f.read()
        js_ids = re.findall(r'"id":\s*"([^"]+)"', js_content)
        existing_ids.update(js_ids)

    print(f"Known cut IDs currently in database: {len(existing_ids)}")

    # 2. Parse Channel 1: @hi_pretty (Natural virgin hair)
    new_natural_cuts = parse_channel_posts('hi_pretty', 'cut', existing_ids, cuts_dir, default_cat='silk', default_price='от 45 000 ₽')

    # 3. Parse Channel 2: @volosy_hi_pretty (Dyed cuts)
    new_dyed_cuts = parse_channel_posts('volosy_hi_pretty', 'cut_dyed', existing_ids, cuts_dir, default_cat='blond', default_price='от 17 500 ₽')

    if not new_natural_cuts and not new_dyed_cuts:
        print("No new cuts in either channel. Repository is up to date!")
        return True

    print(f"Processed: {len(new_natural_cuts)} new natural cuts, {len(new_dyed_cuts)} new dyed cuts.")

    # 4. Update hipretty_v2.js
    for js_path in [js_file, js_v2_file]:
        if os.path.exists(js_path):
            with open(js_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Update cutsDatabase if new natural cuts
            if new_natural_cuts:
                idx = content.find('var cutsDatabase = [')
                end_idx = content.find('];', idx) + 1
                if idx != -1 and end_idx != -1:
                    try:
                        cur_cuts = json.loads(content[idx + len('var cutsDatabase = '):end_idx])
                        all_cuts = new_natural_cuts + cur_cuts
                        if len(all_cuts) % 3 != 0:
                            all_cuts = all_cuts[:-(len(all_cuts) % 3)]
                        new_js_data = json.dumps(all_cuts, ensure_ascii=False, indent=2)
                        content = content[:idx] + 'var cutsDatabase = ' + new_js_data + content[end_idx:]
                        print(f"Updated cutsDatabase in {os.path.basename(js_path)}")
                    except Exception as e:
                        print("Error updating cutsDatabase:", e)

            # Update dyedCutsDatabase if new dyed cuts
            if new_dyed_cuts:
                idx_dyed = content.find('var dyedCutsDatabase = [')
                end_idx_dyed = content.find('];', idx_dyed) + 1
                if idx_dyed != -1 and end_idx_dyed != -1:
                    try:
                        cur_dyed = json.loads(content[idx_dyed + len('var dyedCutsDatabase = '):end_idx_dyed])
                        all_dyed = new_dyed_cuts + cur_dyed
                        new_dyed_js_data = json.dumps(all_dyed, ensure_ascii=False, indent=2)
                        content = content[:idx_dyed] + 'var dyedCutsDatabase = ' + new_dyed_js_data + content[end_idx_dyed:]
                        print(f"Updated dyedCutsDatabase in {os.path.basename(js_path)}")
                    except Exception as e:
                        print("Error updating dyedCutsDatabase:", e)

            with open(js_path, 'w', encoding='utf-8') as f:
                f.write(content)

    print("=== DUAL SYNC COMPLETED SUCCESSFULLY ===")
    return True

if __name__ == '__main__':
    sync()
