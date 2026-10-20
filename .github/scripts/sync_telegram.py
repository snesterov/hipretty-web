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

def fetch_channel_html():
    url = 'https://t.me/s/hi_pretty'
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

def purge_jsdelivr(tag):
    urls = [
        "https://purge.jsdelivr.net/gh/snesterov/hipretty-web@main/hipretty_v2.js",
        f"https://purge.jsdelivr.net/gh/snesterov/hipretty-web@{tag}/hipretty_v2.js",
        "https://purge.jsdelivr.net/gh/snesterov/hipretty-web@main/feed.json"
    ]
    for u in urls:
        try:
            req = urllib.request.Request(u, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                print(f"Purged: {u}")
        except Exception:
            pass

def sync():
    print("=== TELEGRAM SYNC START ===")
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    cuts_dir = os.path.join(root_dir, 'cuts')
    feed_file = os.path.join(root_dir, 'feed.json')
    js_v2_file = os.path.join(root_dir, 'hipretty_v2.js')
    js_file = os.path.join(root_dir, 'hipretty.js')
    os.makedirs(cuts_dir, exist_ok=True)

    # 1. Fetch channel
    try:
        html = fetch_channel_html()
        print(f"HTML received, length: {len(html)} bytes.")
    except Exception as e:
        print("Failed to fetch Telegram channel:", e)
        return False

    # Split by data-post="hi_pretty/(\d+)"
    raw_splits = re.split(r'data-post="hi_pretty/(\d+)"', html)
    post_blocks = []
    if len(raw_splits) > 1:
        for i in range(1, len(raw_splits), 2):
            p_id = raw_splits[i]
            p_content = raw_splits[i+1] if i+1 < len(raw_splits) else ""
            post_blocks.append((p_id, p_content))

    print(f"Parsed {len(post_blocks)} messages from channel HTML.")

    # 2. Load existing cuts from hipretty_v2.js or feed.json
    existing_ids = set()
    if os.path.exists(js_v2_file):
        with open(js_v2_file, 'r', encoding='utf-8') as f:
            js_content = f.read()
        js_ids = re.findall(r'"id":\s*"(\d+)"', js_content)
        existing_ids.update(js_ids)

    print(f"Known cut IDs currently in database: {len(existing_ids)}")

    new_cuts = []
    # Iterate newest messages first (at the bottom of HTML)
    for post_id, block in reversed(post_blocks):
        if post_id in existing_ids:
            continue

        # Look for hashtag or cut number
        cut_match = re.search(r'#(\d{3,4})', block)
        if not cut_match:
            continue
        cut_num = f"#{cut_match.group(1)}"

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
        weight = f"{weight_match.group(1)} гр" if weight_match else "100 гр"

        price_match = re.search(r'(\d{2,3}[.\s]\d{3})\s*(?:₽|руб|\b)', raw_text)
        price_val = price_match.group(1).replace('.', ' ') + " ₽" if price_match else "от 45 000 ₽"

        title = f"Срез {cut_num} ({length} см / {weight})"
        local_img_name = f"cut_{post_id}.jpg"
        local_img_path = os.path.join(cuts_dir, local_img_name)

        print(f"-> Found NEW CUT in Telegram: {title} (Post ID {post_id})")
        if download_img(remote_img, local_img_path):
            img_cdn_url = f"https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/{local_img_name}"
            cut_entry = {
                "id": str(post_id),
                "cutNum": cut_num,
                "title": title,
                "cat": "silk",
                "length": length,
                "weight": weight,
                "price": price_val,
                "img": img_cdn_url,
                "tgUrl": f"https://t.me/hi_pretty/{post_id}",
                "desc": raw_text[:280] if raw_text else f"Натуральный срез {cut_num}"
            }
            new_cuts.append(cut_entry)
            existing_ids.add(str(post_id))

    if not new_cuts:
        print("No new cuts to add. Catalog is already up to date!")
        return True

    print(f"Successfully processed {len(new_cuts)} new cuts! Inserting into catalog...")

    # Insert into hipretty.js and hipretty_v2.js at the top of cutsDatabase
    new_cuts_js_str = ",\n  ".join([json.dumps(c, ensure_ascii=False, indent=2) for c in new_cuts])
    for js_path in [js_file, js_v2_file]:
        if os.path.exists(js_path):
            with open(js_path, 'r', encoding='utf-8') as f:
                content = f.read()
            idx = content.find('var cutsDatabase = [')
            if idx != -1:
                insert_pos = idx + len('var cutsDatabase = [\n  ')
                updated_content = content[:insert_pos] + new_cuts_js_str + ",\n  " + content[insert_pos:]
                with open(js_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"Updated cutsDatabase in {os.path.basename(js_path)}")

    # Update feed.json as well
    if os.path.exists(feed_file):
        try:
            with open(feed_file, 'r', encoding='utf-8') as f:
                old_f = json.load(f)
            updated_feed = new_cuts + old_f
            with open(feed_file, 'w', encoding='utf-8') as f:
                json.dump(updated_feed, f, ensure_ascii=False, indent=2)
        except Exception:
            pass

    print("=== SYNC COMPLETED SUCCESSFULLY ===")
    return True

if __name__ == '__main__':
    sync()
