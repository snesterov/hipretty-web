(function() {

  
  // ===================== АВТОНОМНЫЙ АНТИФРОД & ЗАЩИТА ОТ СКЛИКИВАНИЯ =====================
  window.hpHumanInteracted = false;
  window.hpPageInitTime = Date.now();
  ['mousemove', 'touchstart', 'scroll', 'keydown', 'click'].forEach(function(ev) {
    window.addEventListener(ev, function() {
      window.hpHumanInteracted = true;
    }, { once: true, passive: true });
  });

  // 1. Шрифт Cormorant Garamond и Montserrat

  if (!document.getElementById('hp-fonts')) {

    var f = document.createElement('link');

    f.id = 'hp-fonts';

    f.rel = 'stylesheet';

    f.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap';

    document.head.appendChild(f);

  }



  // 2. Стили сайта

  if (!document.getElementById('hp-styles')) {

    var s = document.createElement('style');

    s.id = 'hp-styles';

    s.textContent = `

      #allrecords > .r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061),

      #allrecords > div.r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061),

      .t-records > .r:not(#rec4673156001):not(#rec4673146901):not(#rec4673150901):not(#rec1935129061) {

        display: none !important;

        visibility: hidden !important;

        opacity: 0 !important;

        pointer-events: none !important;

        height: 0 !important;

        min-height: 0 !important;

        margin: 0 !important;

        padding: 0 !important;

      }



      :root {

        --hp-bg: #0e0915;

        --hp-bg-card: rgba(25, 17, 38, 0.85);

        --hp-bg-card-hover: rgba(38, 26, 56, 0.96);

        --hp-rose: #f472b6;

        --hp-rose-light: #fce7f3;

        --hp-champagne: #edd8be;

        --hp-grad-text: linear-gradient(135deg, #ffffff 0%, #fce7f3 50%, #f472b6 100%);

        --hp-grad-btn: linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%);

        --hp-text: #fdfafd;

        --hp-text-muted: #b8acc7;

        --hp-border: rgba(244, 114, 182, 0.25);

        --hp-border-active: rgba(244, 114, 182, 0.6);

      }



      * { box-sizing: border-box !important; }



      html { scroll-behavior: smooth !important; }



      body {

        margin: 0 !important; padding: 0 !important;

        background-color: var(--hp-bg) !important;

        color: var(--hp-text) !important;

        font-family: 'Montserrat', sans-serif !important;

        overflow-x: hidden !important;

        width: 100% !important;

        max-width: 100vw !important;

        -webkit-font-smoothing: antialiased;

      }



      #hp-app {

        width: 100%;

        max-width: 100vw;

        overflow-x: hidden;

        background: radial-gradient(circle at 50% -5%, #2a1238 0%, #120a1d 45%, #08050e 100%);

        position: relative;

        z-index: 10;

      }



      .hp-container {

        width: 100%;

        max-width: 1240px;

        margin: 0 auto;

        padding-left: 20px;

        padding-right: 20px;

      }



      /* ХЕДЕР */

      .hp-header {

        display: flex;

        align-items: center;

        justify-content: space-between;

        padding: 16px 20px;

        border-bottom: 1px solid var(--hp-border);

        position: sticky;

        top: 0;

        background: rgba(14, 9, 21, 0.95);

        backdrop-filter: blur(18px);

        -webkit-backdrop-filter: blur(18px);

        z-index: 1000;

      }

      .hp-logo-wrap { text-decoration: none; display: flex; flex-direction: column; }

      .hp-logo {

        font-family: 'Cormorant Garamond', serif;

        font-size: 32px;

        font-weight: 700;

        letter-spacing: 1.5px;

        line-height: 1;

        background: var(--hp-grad-text);

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

      }

      .hp-logo-sub {

        font-size: 11px;

        color: var(--hp-rose);

        letter-spacing: 2px;

        text-transform: uppercase;

        margin-top: 5px;

        font-weight: 600;

      }

      .hp-nav-links { display: flex; align-items: center; gap: 22px; }

      .hp-nav-link {

        color: #dcd0ea;

        text-decoration: none;

        font-size: 13.5px;

        font-weight: 500;

        transition: color 0.2s ease;

        cursor: pointer;

      }

      .hp-nav-link:hover { color: var(--hp-rose); }

      .hp-header-actions { display: flex; align-items: center; gap: 10px; }
      .hp-hdr-msg-btn {
        display: none !important; /* Убрано из шапки, чтобы не сливать платный трафик мимо формы */
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: all 0.2s ease;
        flex-shrink: 0;
        text-decoration: none;
      }
      .hp-hdr-msg-btn:hover {
        transform: translateY(-2px) scale(1.06);
      }
      .hp-hdr-msg-tg {
        background: rgba(0, 136, 204, 0.12);
        border-color: rgba(0, 136, 204, 0.35);
      }
      .hp-hdr-msg-tg:hover {
        background: rgba(0, 136, 204, 0.25);
        border-color: #0088cc;
        box-shadow: 0 0 10px rgba(0, 136, 204, 0.4);
      }
      .hp-hdr-msg-max {
        background: rgba(168, 85, 247, 0.12);
        border-color: rgba(168, 85, 247, 0.35);
      }
      .hp-hdr-msg-max:hover {
        background: rgba(168, 85, 247, 0.25);
        border-color: #A855F7;
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.4);
      }


      .hp-header-phone {

        color: #fff;

        text-decoration: none;

        font-size: 14px;

        font-weight: 600;

        transition: color 0.2s ease;

      }

      .hp-header-phone:hover { color: var(--hp-rose); }

      .hp-btn-header-cta {

        background: var(--hp-grad-btn);

        color: #1a0818 !important;

        font-weight: 700;

        font-size: 13px;

        padding: 11px 22px;

        border-radius: 25px;

        text-decoration: none;

        box-shadow: 0 4px 18px rgba(244, 114, 182, 0.4);

        transition: transform 0.2s ease, box-shadow 0.2s ease;

        display: inline-flex;

        align-items: center;

        gap: 6px;

        cursor: pointer;

        border: none;

      }

      .hp-btn-header-cta:hover {

        transform: translateY(-2px);

        box-shadow: 0 6px 26px rgba(244, 114, 182, 0.6);

      }

      /* ХЕДЕР ВНУТРЕННИЙ */

      .hp-header-inner {

        display: flex;

        align-items: center;

        justify-content: space-between;

        width: 100%;

        gap: 12px;

      }

      .hp-header-phone {

        display: inline-flex;

        align-items: center;

        gap: 6px;

        white-space: nowrap;

      }

      .hp-phone-icon {

        font-size: 13px;

        display: none;

      }



      /* МОБИЛЬНАЯ АДАПТАЦИЯ ШАПКИ */

      @media (max-width: 992px) {

        .hp-header { padding: 12px 16px; }

        .hp-logo { font-size: 26px; }

        .hp-logo-sub { font-size: 10px; letter-spacing: 1.5px; }

        .hp-btn-header-cta { padding: 9px 16px; font-size: 12px; }

      }

      @media (max-width: 768px) {

        .hp-header { padding: 10px 14px; }

        .hp-logo { font-size: 22px; }

        .hp-logo-sub { font-size: 9px; letter-spacing: 1px; }

        .hp-header-actions { gap: 6px; }
        .hp-hdr-msg-btn { width: 32px; height: 32px; }
        .hp-hdr-msg-btn svg { width: 15px; height: 15px; }


        .hp-header-phone {

          padding: 7px 10px;

          background: rgba(255, 255, 255, 0.05);

          border: 1px solid var(--hp-border);

          border-radius: 18px;

          font-size: 12px;

        }

        .hp-phone-icon { display: inline-block; font-size: 12px; }

        .hp-phone-text { display: none; }

        .hp-btn-header-cta { padding: 8px 14px; font-size: 12px; border-radius: 20px; white-space: nowrap; }

      }

      @media (max-width: 420px) {

        .hp-header { padding: 8px 10px; }

        .hp-logo { font-size: 19px; }

        .hp-logo-sub { font-size: 8px; letter-spacing: 0.5px; margin-top: 2px; }

        .hp-btn-header-cta { padding: 7px 11px; font-size: 11px; }

      }





      /* ГЛАВНЫЙ ЭКРАН */

      .hp-hero { padding: 44px 20px 65px; position: relative; }

      .hp-hero-grid {

        display: grid;

        grid-template-columns: 1.05fr 1fr;

        gap: 40px;

        align-items: center;

      }

      .hp-badge-geo {
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px 12px;
        background: rgba(244, 114, 182, 0.12);
        border: 1px solid var(--hp-border-active);
        color: #fce7f3;
        padding: 6px 16px;
        border-radius: 9999px;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 22px;
        max-width: 100%;
        line-height: 1.4;
      }
      .hp-badge-geo-loc {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }
      .hp-badge-geo span.hp-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #10B981;
        display: inline-block;
        box-shadow: 0 0 10px #10B981;
        flex-shrink: 0;
      }
      .hp-badge-delivery-tag {
        background: rgba(244, 114, 182, 0.35);
        color: #ffffff !important;
        font-weight: 800;
        padding: 4px 12px;
        border-radius: 9999px;
        border: 1px solid rgba(244, 114, 182, 0.6);
        box-shadow: 0 0 12px rgba(244, 114, 182, 0.3);
        white-space: nowrap !important;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
      }

      .hp-hero-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: clamp(34px, 4.3vw, 56px);

        font-weight: 700;

        line-height: 1.12;

        margin: 0 0 20px;

        color: #ffffff;

      }

      .hp-hero-title span {

        background: var(--hp-grad-text);

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

      }

      .hp-hero-desc {

        font-size: 16px;

        line-height: 1.65;

        color: var(--hp-text-muted);

        margin: 0 0 32px;

      }

            .hp-hero-cta-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        margin-bottom: 36px;
      }
      .hp-btn-main {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        font-size: 15px;
        font-weight: 700;
        padding: 16px 32px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 8px 30px rgba(244, 114, 182, 0.45);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border: none;
      }
      .hp-btn-main:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 36px rgba(244, 114, 182, 0.65);
      }
      .hp-hero-messengers-split {
        display: inline-flex;
        gap: 10px;
        align-items: stretch;
      }
      .hp-hero-link-max {
        background: rgba(168, 85, 247, 0.12);
        border: 1px solid rgba(168, 85, 247, 0.4);
        color: #C084FC !important;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 18px;
        border-radius: 18px;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .hp-hero-link-max:hover {
        background: rgba(168, 85, 247, 0.25);
        border-color: #A855F7;
        transform: translateY(-1px);
      }
      .hp-hero-btn-texts {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }
      .hp-hero-vpn-group {
        background: rgba(22, 13, 34, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 18px;
        padding: 5px 12px 7px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .hp-hero-vpn-group .hp-vpn-sub {
        font-size: 10px;
        color: var(--hp-muted);
        text-align: center;
        line-height: 1;
        margin-bottom: 4px;
        opacity: 0.85;
      }
      .hp-hero-vpn-btns {
        display: flex;
        gap: 8px;
      }
      .hp-hero-vpn-btns .hp-vpn-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 10px;
        font-size: 12.5px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .hp-hero-vpn-btns .hp-vpn-tg {
        background: rgba(42, 171, 238, 0.18);
        border: 1px solid rgba(42, 171, 238, 0.4);
        color: #81D4FA !important;
      }
      .hp-hero-vpn-btns .hp-vpn-tg:hover {
        background: rgba(42, 171, 238, 0.32);
        border-color: #2AABEE;
        transform: translateY(-1px);
      }
      .hp-hero-vpn-btns .hp-vpn-wa {
        background: rgba(37, 211, 102, 0.18);
        border: 1px solid rgba(37, 211, 102, 0.4);
        color: #80E8A8 !important;
      }
      .hp-hero-vpn-btns .hp-vpn-wa:hover {
        background: rgba(37, 211, 102, 0.32);
        border-color: #25D366;
        transform: translateY(-1px);
      }
      @media (max-width: 600px) {
        .hp-hero-cta-box {
          width: 100%;
        }
        .hp-btn-main {
          width: 100%;
          justify-content: center;
        }
        .hp-hero-messengers-split {
          display: grid;
          grid-template-columns: 1fr;
          width: 100%;
          gap: 10px;
        }
        .hp-hero-link-max {
          justify-content: center;
          padding: 10px;
        }
        .hp-hero-vpn-btns {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .hp-hero-vpn-btns .hp-vpn-btn {
          justify-content: center;
        }
      }
.hp-hero-stats {

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 16px;

      }

      .hp-stat-card {

        background: rgba(24, 15, 36, 0.7);

        border: 1px solid var(--hp-border);

        padding: 16px;

        border-radius: 16px;

      }

      .hp-stat-val {

        font-family: 'Cormorant Garamond', serif;

        font-size: 30px;

        font-weight: 700;

        color: var(--hp-rose-light);

        line-height: 1;

        margin-bottom: 6px;

      }

      .hp-stat-lbl {

        font-size: 12px;

        color: var(--hp-text-muted);

        line-height: 1.4;

      }



      /* ГЛАВНОЕ ФОТО ТРЕХ ДЕВОЧЕК */

      .hp-hero-girls-showcase {

        position: relative;

        border-radius: 28px;

        overflow: hidden;

        border: 1px solid var(--hp-border-active);

        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 40px rgba(244, 114, 182, 0.22);

        background: #190e24;

      }

      .hp-girls-img {

        width: 100%;

        height: auto;

        display: block;

        transition: transform 0.6s ease;

      }

      .hp-hero-girls-showcase:hover .hp-girls-img {

        transform: scale(1.02);

      }

      .hp-hero-float-badge {

        position: absolute;

        backdrop-filter: blur(12px);

        -webkit-backdrop-filter: blur(12px);

        background: rgba(20, 10, 30, 0.85);

        border: 1px solid var(--hp-border-active);

        padding: 8px 16px;

        border-radius: 20px;

        font-size: 12.5px;

        font-weight: 600;

        color: #fff;

        z-index: 2;

        box-shadow: 0 10px 25px rgba(0,0,0,0.4);

      }

      .hp-hero-float-badge.top-left { top: 18px; left: 18px; }

      .hp-hero-float-badge.bottom-right { bottom: 18px; right: 18px; }



      /* БЛОК СЕКЦИЙ */

      .hp-sec-head {

        text-align: center;

        max-width: 820px;

        margin: 0 auto 38px;

      }

      .hp-sec-badge {

        font-size: 12px;

        text-transform: uppercase;

        letter-spacing: 2px;

        color: var(--hp-rose);

        font-weight: 700;

        margin-bottom: 12px;

        display: inline-block;

      }

      .hp-sec-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: clamp(28px, 3.6vw, 44px);

        font-weight: 700;

        line-height: 1.2;

        margin: 0 0 14px;

        color: #fff;

      }

      .hp-sec-title span {

        background: var(--hp-grad-text);

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

      }

      .hp-sec-desc {

        font-size: 15px;

        color: var(--hp-text-muted);

        line-height: 1.6;

        margin: 0;

      }



      /* ПРЕИМУЩЕСТВА */

      .hp-features-grid {

        display: grid;

        grid-template-columns: repeat(4, 1fr);

        gap: 20px;

        margin-bottom: 60px;

      }

      .hp-feature-card {

        background: var(--hp-bg-card);

        border: 1px solid var(--hp-border);

        border-radius: 20px;

        padding: 26px 20px;

        transition: transform 0.25s ease, border-color 0.25s ease;

      }

      .hp-feature-card:hover {

        transform: translateY(-4px);

        border-color: var(--hp-border-active);

        background: var(--hp-bg-card-hover);

      }

      .hp-feat-icon { font-size: 32px; margin-bottom: 16px; }

      .hp-feat-title {

        font-size: 17px;

        font-weight: 700;

        color: #fff;

        margin: 0 0 10px;

      }

      .hp-feat-desc {

        font-size: 13.5px;

        color: var(--hp-text-muted);

        line-height: 1.55;

        margin: 0;

      }



      /* КАТАЛОГ СРЕЗОВ И ФИЛЬТРЫ */

      .hp-catalog-section { padding: 40px 20px 60px; }

      

      .hp-catalog-filter-bar {

        background: rgba(22, 13, 34, 0.85);

        border: 1px solid var(--hp-border);

        border-radius: 24px;

        padding: 20px 24px;

        margin-bottom: 34px;

        backdrop-filter: blur(14px);

      }

      .hp-filter-row {

        display: flex;

        align-items: center;

        flex-wrap: wrap;

        gap: 12px;

        margin-bottom: 14px;

      }

      .hp-filter-row:last-child { margin-bottom: 0; }

      .hp-filter-label {

        font-size: 13px;

        font-weight: 700;

        color: var(--hp-rose-light);

        min-width: 130px;

      }

      .hp-filter-group {

        display: flex;

        flex-wrap: wrap;

        gap: 8px;

        flex: 1;

      }

      .hp-filter-pill {

        background: rgba(255, 255, 255, 0.05);

        border: 1px solid rgba(244, 114, 182, 0.25);

        color: #ddd;

        padding: 7px 16px;

        border-radius: 20px;

        font-size: 13px;

        font-weight: 600;

        cursor: pointer;

        transition: all 0.2s ease;

      }

      .hp-filter-pill:hover {

        border-color: var(--hp-rose);

        color: #fff;

        background: rgba(244, 114, 182, 0.15);

      }

      .hp-filter-pill.active {

        background: var(--hp-grad-btn);

        color: #1a0818;

        border-color: transparent;

        font-weight: 700;

        box-shadow: 0 4px 14px rgba(244, 114, 182, 0.4);

      }



      .hp-catalog-counter {

        text-align: right;

        font-size: 13px;

        color: var(--hp-text-muted);

        margin-bottom: 18px;

      }

      .hp-catalog-counter strong { color: var(--hp-rose-light); }

      .hp-catalog-footer {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
      }

      .hp-catalog-more-btn {
        background: rgba(244, 114, 182, 0.12);
        color: var(--hp-rose-light);
        border: 1px solid var(--hp-border-active);
        padding: 13px 32px;
        border-radius: 9999px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.25s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
      }

      .hp-catalog-more-btn:hover {
        background: var(--hp-grad-btn);
        color: #1a0818;
        border-color: transparent;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(244, 114, 182, 0.4);
      }

      .hp-catalog-bridge-banner {
        width: 100%;
        background: linear-gradient(135deg, rgba(38, 26, 56, 0.95) 0%, rgba(25, 17, 38, 0.95) 100%);
        border: 1px solid var(--hp-border);
        border-radius: 20px;
        padding: 24px 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .hp-catalog-bridge-text {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .hp-catalog-bridge-text strong {
        font-family: 'Cormorant Garamond', serif;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
      }

      .hp-catalog-bridge-text span {
        font-size: 13px;
        color: var(--hp-text-muted);
        line-height: 1.45;
      }

      @media (max-width: 768px) {
        .hp-catalog-bridge-banner {
          flex-direction: column;
          text-align: center;
          padding: 20px 16px;
        }
        .hp-catalog-bridge-text strong {
          font-size: 18px;
        }
        .hp-catalog-bridge-banner .hp-btn-main {
          width: 100%;
        }
      }



      .hp-catalog-grid {

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 24px;

      }

      .hp-cut-card {

        background: var(--hp-bg-card);

        border: 1px solid var(--hp-border);

        border-radius: 22px;

        overflow: hidden;

        display: flex;

        flex-direction: column;

        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

      }

      .hp-cut-card:hover {

        transform: translateY(-5px);

        border-color: var(--hp-border-active);

        box-shadow: 0 14px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(244, 114, 182, 0.15);

      }

      

      .hp-cut-img-wrap {

        position: relative;

        width: 100%;

        height: 310px;

        background: linear-gradient(135deg, #180e22 0%, #241133 100%);

        overflow: hidden;

      }

      .hp-cut-img {

        width: 100%;

        height: 100%;

        object-fit: cover;

        transition: transform 0.5s ease;

      }

      .hp-cut-card:hover .hp-cut-img { transform: scale(1.04); }

      .hp-cut-placeholder { display: none !important; }

      .hp-cut-badge {

        position: absolute;

        top: 14px;

        left: 14px;

        background: rgba(14, 9, 21, 0.88);

        border: 1px solid var(--hp-border-active);

        padding: 5px 12px;

        border-radius: 14px;

        font-size: 11.5px;

        font-weight: 700;

        color: var(--hp-rose-light);

        backdrop-filter: blur(8px);

      }

      .hp-cut-price-tag {
        position: absolute;
        top: 14px;
        right: 14px;
        background: var(--hp-grad-btn);
        color: #1a0818;
        padding: 5px 12px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 700;
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      }
      .hp-cut-video-badge {
        position: absolute;
        bottom: 12px;
        left: 12px;
        right: 12px;
        background: rgba(14, 9, 21, 0.88);
        border: 1px solid rgba(42, 171, 238, 0.6);
        color: #fff !important;
        padding: 8px 12px;
        border-radius: 14px;
        font-size: 11.5px;
        font-weight: 600;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        z-index: 2;
      }
      .hp-cut-video-badge:hover {
        background: rgba(42, 171, 238, 0.9);
        border-color: #2AABEE;
        transform: translateY(-2px);
      }
      .hp-cut-video-badge i {
        font-style: normal;
        font-size: 10px;
        color: #81D4FA;
      }
      .hp-cut-video-badge:hover i {
        color: #fff;
      }
      .hp-cut-video-badge svg {
        width: 14px;
        height: 14px;
        fill: currentColor;
        flex-shrink: 0;
      }

      .hp-cut-body {

        padding: 22px;

        display: flex;

        flex-direction: column;

        flex: 1;

      }

      .hp-cut-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: 22px;

        font-weight: 700;

        margin: 0 0 8px;

        color: #fff;

      }

      .hp-cut-meta {

        display: flex;

        flex-wrap: wrap;

        gap: 8px;

        font-size: 12.5px;

        color: var(--hp-rose-light);

        margin-bottom: 12px;

        font-weight: 600;

      }

      .hp-cut-meta span {

        background: rgba(244, 114, 182, 0.12);

        padding: 4px 10px;

        border-radius: 10px;

        border: 1px solid rgba(244, 114, 182, 0.25);

      }

      .hp-cut-desc {

        font-size: 13.5px;

        line-height: 1.55;

        color: var(--hp-text-muted);

        margin: 0 0 20px;

        flex: 1;

      }

      .hp-cut-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: auto;
      }
      .hp-cut-btn {
        width: 100%;
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        text-align: center;
        padding: 12px 14px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 13px;
        text-decoration: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        cursor: pointer;
        border: none;
        box-shadow: 0 4px 14px rgba(244, 114, 182, 0.35);
      }
      .hp-cut-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(244, 114, 182, 0.55);
      }
      .hp-cut-messengers-label {
        font-size: 11px;
        color: var(--hp-muted);
        margin-top: 4px;
        padding: 0 2px;
      }
      .hp-cut-messengers-split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        align-items: stretch;
      }
      .hp-cut-link-max {
        background: rgba(168, 85, 247, 0.12);
        border: 1px solid rgba(168, 85, 247, 0.4);
        color: #C084FC !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px 8px;
        border-radius: 14px;
        text-decoration: none;
        transition: all 0.2s ease;
        line-height: 1.2;
      }
      .hp-cut-link-max:hover {
        background: rgba(168, 85, 247, 0.25);
        border-color: #A855F7;
        transform: translateY(-1px);
      }
      .hp-cut-vpn-group {
        background: rgba(22, 13, 34, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        padding: 4px 6px 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .hp-vpn-sub {
        font-size: 9px;
        color: var(--hp-muted);
        text-align: center;
        line-height: 1;
        margin-bottom: 4px;
        opacity: 0.85;
      }
      .hp-vpn-btns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
      }
      .hp-vpn-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 2px;
        border-radius: 8px;
        font-size: 10.5px;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .hp-vpn-tg {
        background: rgba(42, 171, 238, 0.18);
        border: 1px solid rgba(42, 171, 238, 0.4);
        color: #81D4FA !important;
      }
      .hp-vpn-tg:hover {
        background: rgba(42, 171, 238, 0.32);
        border-color: #2AABEE;
      }
      .hp-vpn-wa {
        background: rgba(37, 211, 102, 0.18);
        border: 1px solid rgba(37, 211, 102, 0.4);
        color: #6ee7b7 !important;
      }
      .hp-vpn-wa:hover {
        background: rgba(37, 211, 102, 0.32);
        border-color: #25D366;
      }
      .hp-link-title {
        font-size: 11.5px;
        font-weight: 700;
      }
      .hp-link-sub {
        font-size: 9.5px;
        opacity: 0.85;
      }
      .hp-max-badge {
        color: #4ade80 !important;
        font-weight: 600;
      }

      /* КВИЗ ПОДБОРА */

      .hp-quiz-section { padding: 30px 20px 60px; }

      .hp-quiz-card {

        background: var(--hp-bg-card);

        border: 1px solid var(--hp-border-active);

        border-radius: 26px;

        padding: 38px;

        max-width: 900px;

        margin: 0 auto;

        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);

      }

      .hp-quiz-step-title {

        font-size: 15px;

        font-weight: 700;

        color: var(--hp-rose-light);

        margin-bottom: 14px;

      }

      .hp-quiz-options {

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 14px;

        margin-bottom: 24px;

      }

      .hp-quiz-opt {

        background: rgba(255, 255, 255, 0.03);

        border: 1px solid var(--hp-border);

        border-radius: 16px;

        padding: 16px;

        text-align: center;

        cursor: pointer;

        transition: all 0.2s ease;

      }

      .hp-quiz-opt:hover {

        border-color: var(--hp-rose);

        background: rgba(244, 114, 182, 0.08);

      }

      .hp-quiz-opt.selected {

        border-color: var(--hp-rose);

        background: rgba(244, 114, 182, 0.16);

        box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);

      }

      .hp-quiz-opt-val {

        font-size: 15px;

        font-weight: 700;

        color: #fff;

        margin-bottom: 4px;

      }

      .hp-quiz-opt-desc {

        font-size: 12px;

        color: var(--hp-text-muted);

      }



      /* ФОРМА ЗАХВАТА ЗАЯВКИ */

      .hp-lead-section { padding: 40px 20px 70px; }

      
      /* БЛОК ДОВЕРИЯ: ЖИВЫЕ ФОТО СРЕЗКИ И ПОДГОТОВКИ */
      .hp-lead-trust-gallery {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        max-width: 480px;
        margin: 0 auto 20px auto;
      }
      .hp-trust-card {
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(244, 114, 182, 0.25);
        background: rgba(22, 13, 34, 0.7);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
        aspect-ratio: 3 / 4;
        max-height: 200px;
      }
      .hp-trust-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
      }
      .hp-trust-card:hover .hp-trust-img {
        transform: scale(1.04);
      }
      .hp-trust-badge {
        position: absolute;
        bottom: 8px;
        left: 8px;
        right: 8px;
        padding: 5px 8px;
        background: rgba(18, 9, 28, 0.88);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgba(244, 114, 182, 0.3);
        border-radius: 8px;
        font-size: 11.5px;
        font-weight: 600;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 6px;
        justify-content: center;
      }
      .hp-trust-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #10B981;
        box-shadow: 0 0 6px #10B981;
        flex-shrink: 0;
      }

      
      .hp-form-params-picker {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(244, 114, 182, 0.22);
        border-radius: 16px;
        padding: 16px 20px;
        margin: 18px 0 22px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .hp-fp-head {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-bottom: 2px;
      }
      .hp-fp-head-title {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
      }
      .hp-fp-head-hint {
        font-size: 11.5px;
        color: var(--hp-text-muted);
      }
      .hp-fp-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }
      .hp-fp-label {
        font-size: 13px;
        font-weight: 600;
        color: #fce7f3;
        min-width: 125px;
      }
      .hp-fp-chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .hp-fp-chip {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.16);
        color: #fff;
        padding: 7px 15px;
        border-radius: 20px;
        font-size: 12.5px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .hp-fp-chip:hover {
        background: rgba(244, 114, 182, 0.15);
        border-color: rgba(244, 114, 182, 0.4);
      }
      .hp-fp-chip.active {
        background: var(--hp-grad-btn, linear-gradient(135deg, #f472b6 0%, #ec4899 100%));
        color: #1a0818 !important;
        font-weight: 700;
        border-color: transparent;
        box-shadow: 0 0 12px rgba(244, 114, 182, 0.35);
      }
      @media (max-width: 600px) {
        .hp-form-params-picker { padding: 14px 12px; margin: 14px 0 18px; }
        .hp-fp-label { width: 100%; min-width: auto; margin-bottom: 2px; }
        .hp-fp-chip { font-size: 11.5px; padding: 6px 11px; }
      }
      
      .hp-lead-box {

        background: linear-gradient(135deg, rgba(38, 22, 54, 0.95) 0%, rgba(22, 12, 34, 0.98) 100%);

        border: 1px solid var(--hp-border-active);

        border-radius: 28px;

        padding: 50px 40px;

        max-width: 820px;

        margin: 0 auto;

        text-align: center;

        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65), 0 0 45px rgba(244, 114, 182, 0.22);

      }

      .hp-lead-badge {

        font-size: 12px;

        text-transform: uppercase;

        letter-spacing: 2px;

        color: var(--hp-rose);

        font-weight: 700;

        margin-bottom: 12px;

        display: inline-block;

      }

      .hp-lead-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: clamp(28px, 3.6vw, 42px);

        font-weight: 700;

        line-height: 1.2;

        margin: 0 0 14px;

        color: #fff;

      }

      .hp-lead-title span {

        background: var(--hp-grad-text);

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

      }

      .hp-lead-subtitle {

        font-size: 15px;

        color: var(--hp-text-muted);

        max-width: 600px;

        margin: 0 auto 30px;

        line-height: 1.55;

      }

      .hp-selected-cut-box {

        display: none;

        align-items: center;

        justify-content: space-between;

        background: rgba(244, 114, 182, 0.12);

        border: 1px solid var(--hp-border-active);

        border-radius: 16px;

        padding: 12px 18px;

        margin-bottom: 16px;

        text-align: left;

      }

      .hp-selected-cut-info {

        display: flex;

        align-items: center;

        gap: 10px;

        font-size: 13.5px;

        color: #fff;

      }

      .hp-selected-cut-tag {

        font-size: 11px;

        font-weight: 700;

        text-transform: uppercase;

        letter-spacing: 1px;

        color: var(--hp-rose);

        background: rgba(244, 114, 182, 0.2);

        padding: 3px 8px;

        border-radius: 8px;

        white-space: nowrap;

      }

      .hp-selected-cut-title {

        font-weight: 600;

        color: #fce7f3;

      }

      .hp-selected-cut-reset {

        background: transparent;

        border: none;

        color: #aaa;

        font-size: 18px;

        cursor: pointer;

        padding: 0 4px;

        line-height: 1;

        transition: color 0.2s;

      }

      .hp-selected-cut-reset:hover {

        color: #fff;

      }

      .hp-input-group {

        margin-bottom: 16px;

        text-align: left;

      }

      .hp-input {

        width: 100%;

        background: rgba(14, 9, 21, 0.85);

        border: 1px solid var(--hp-border);

        border-radius: 16px;

        padding: 15px 20px;

        color: #fff;

        font-size: 15px;

        font-family: 'Montserrat', sans-serif;

        outline: none;

        transition: border-color 0.2s ease, box-shadow 0.2s ease;

      }

      .hp-input:focus {

        border-color: var(--hp-rose);

        box-shadow: 0 0 15px rgba(244, 114, 182, 0.3);

      }

      .hp-input-hint {

        font-size: 12.5px;

        color: var(--hp-rose-light);

        margin-top: 8px;

        line-height: 1.45;

      }

      .hp-method-label {

        font-size: 13.5px;

        color: var(--hp-rose-light);

        margin-bottom: 12px;

        font-weight: 600;

        text-align: left;

      }

      .hp-method-selector {

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        gap: 12px;

        margin-bottom: 20px;

      }

      .hp-method-btn {

        background: rgba(255, 255, 255, 0.04);

        border: 1px solid var(--hp-border);

        border-radius: 14px;

        padding: 12px;

        color: #ddd;

        font-size: 13.5px;

        font-weight: 600;

        cursor: pointer;

        display: flex;

        align-items: center;

        justify-content: center;

        gap: 6px;

        transition: all 0.2s ease;

      }

      .hp-method-btn:hover {

        border-color: var(--hp-rose);

        color: #fff;

      }

      .hp-method-btn.active.tg {

        background: rgba(0, 136, 204, 0.25);

        border-color: #0088cc;

        color: #81D4FA;

      }

      .hp-method-btn.active.wa {

        background: rgba(37, 211, 102, 0.25);

        border-color: #25D366;

        color: #69F0AE;

      }

      .hp-method-btn.active.phone {

        background: rgba(244, 114, 182, 0.25);

        border-color: var(--hp-rose);

        color: #fff;

      }

      .hp-method-btn.active.max {

        background: rgba(168, 85, 247, 0.22);

        border-color: #A855F7;

        color: #C084FC;

      }

      .hp-form-submit {

        width: 100%;

        background: var(--hp-grad-btn);

        color: #1a0818;

        border: none;

        border-radius: 20px;

        padding: 16px;

        font-size: 16px;

        font-weight: 700;

        font-family: 'Montserrat', sans-serif;

        cursor: pointer;

        box-shadow: 0 8px 25px rgba(244, 114, 182, 0.4);

        transition: transform 0.2s ease, box-shadow 0.2s ease;

      }

      .hp-form-submit:hover {

        transform: translateY(-2px);

        box-shadow: 0 10px 32px rgba(244, 114, 182, 0.6);

      }

      .hp-form-policy {

        font-size: 12px;

        color: var(--hp-text-muted);

        margin-top: 14px;

      }

      .hp-form-policy a {

        color: var(--hp-rose-light);

        text-decoration: underline;

        cursor: pointer;

      }



      /* КОНТАКТЫ */

      /* СТИЛИЗАЦИЯ НАСТОЯЩЕЙ TILDA-ФОРМЫ ВНУТРИ LEAD-BOX */
      #hp-selected-cut-box {
        position: relative !important;
        z-index: 10 !important;
        margin: 0 auto 24px auto !important;
        max-width: 680px !important;
        display: none;
        align-items: center;
        justify-content: space-between;
        background: rgba(244, 114, 182, 0.15) !important;
        border: 1px solid var(--hp-border-active, rgba(244, 114, 182, 0.6)) !important;
        border-radius: 16px !important;
        padding: 14px 20px !important;
        text-align: left;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
      }
      #hp-tilda-form-slot {
        width: 100% !important;
        max-width: 680px !important;
        margin: 0 auto !important;
        position: relative !important;
        z-index: 5 !important;
      }
      
      /* Unblock all page clicks: neutralize Tilda popup overlay & scroll locks */
      body, html {
        position: static !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        height: auto !important;
        min-height: 100% !important;
      }
      body.t-body_popupshowed, body.t-body_scroll-locked,
      html.t-body_popupshowed, html.t-body_scroll-locked {
        position: static !important;
        overflow-y: auto !important;
        height: auto !important;
      }
      body > #rec4673146901,
      #allrecords > #rec4673146901,
      .t-popup {
        display: none !important;
        pointer-events: none !important;
        visibility: hidden !important;
        z-index: -1 !important;
      }

      /* Mobile layout adjustments */
      @media (max-width: 768px) {
        .hp-footer-top {
          grid-template-columns: 1fr !important;
          gap: 32px !important;
        }
        .hp-contacts-card {
          padding: 24px 16px !important;
          border-radius: 20px !important;
        }
        .hp-contacts-messengers {
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 10px !important;
          width: 100% !important;
        }
        .hp-m-link {
          white-space: normal !important;
          word-break: break-word !important;
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 12px 14px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(244, 114, 182, 0.2) !important;
          border-radius: 14px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
        }
        .hp-footer {
          padding: 40px 16px 120px !important;
        }
        .hp-footer-links {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
        }
        .hp-footer-links a {
          white-space: normal !important;
          word-break: break-word !important;
        }
        #hp-btn-top {
          bottom: 20px !important;
          left: 14px !important;
        }
        #hp-widget-lead {
          bottom: 20px !important;
          right: 14px !important;
        }
      }
/* rec4673146901 внутри слота: статичный блок в потоке страницы */
      #hp-tilda-form-slot #rec4673146901,
      #hp-tilda-form-slot .t702,
      #hp-tilda-form-slot .t-popup,
      #hp-tilda-form-slot .t-popup__container,
      #hp-tilda-form-slot .t702__wrapper {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        height: auto !important;
        min-height: 0 !important;
        z-index: 1 !important;
      }
      #hp-tilda-form-slot .t-popup__close,
      #hp-tilda-form-slot .t702__text-wrapper,
      #hp-tilda-form-slot .t702__title,
      #hp-tilda-form-slot .t702__descr {
        display: none !important;
      }
      body > #rec4673146901,
      #allrecords > #rec4673146901 {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      #hp-tilda-form-slot form.t-form,
      #hp-tilda-form-slot #form4673146901 {
        display: block !important;
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        padding: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        border: none !important;
        transform: none !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
      }
      #hp-tilda-form-slot .t-form__inputsbox {
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-input-group {
        margin: 0 !important;
        padding: 0 !important;
        text-align: left !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-input-title {
        color: var(--hp-rose-light, #fce7f3) !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        margin-bottom: 10px !important;
        text-align: left !important;
        display: block !important;
      }
      #hp-tilda-form-slot .t-contact-method__types-container {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
        margin: 0 0 16px 0 !important;
        padding: 0 !important;
        mask: none !important;
        -webkit-mask: none !important;
        overflow: visible !important;
        max-width: 100% !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      @media (max-width: 640px) {
        #hp-tilda-form-slot .t-contact-method__types-container {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 8px !important;
        }
      }
      #hp-tilda-form-slot .t-contact-method__type {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid var(--hp-border, rgba(244, 114, 182, 0.25)) !important;
        border-radius: 14px !important;
        padding: 0 !important;
        margin: 0 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        height: 48px !important;
        box-sizing: border-box !important;
      }
      #hp-tilda-form-slot .t-contact-method__type:hover {
        border-color: var(--hp-rose, #f472b6) !important;
        background: rgba(244, 114, 182, 0.12) !important;
      }
      
      #hp-tilda-form-slot .t-contact-method__type[data-method="phone"].hp-active {
        background: rgba(244, 114, 182, 0.22) !important;
        border-color: #f472b6 !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.45) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="whatsapp"].hp-active {
        background: rgba(37, 211, 102, 0.22) !important;
        border-color: #25D366 !important;
        box-shadow: 0 0 16px rgba(37, 211, 102, 0.45) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="telegram"].hp-active {
        background: rgba(34, 158, 217, 0.22) !important;
        border-color: #229ED9 !important;
        box-shadow: 0 0 16px rgba(34, 158, 217, 0.45) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="max_messenger"].hp-active {
        background: rgba(168, 85, 247, 0.22) !important;
        border-color: #A855F7 !important;
        box-shadow: 0 0 16px rgba(168, 85, 247, 0.45) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="phone"]:hover {
        border-color: #f472b6 !important;
        background: rgba(244, 114, 182, 0.12) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="whatsapp"]:hover {
        border-color: #25D366 !important;
        background: rgba(37, 211, 102, 0.12) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="telegram"]:hover {
        border-color: #229ED9 !important;
        background: rgba(34, 158, 217, 0.12) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type[data-method="max_messenger"]:hover {
        border-color: #A855F7 !important;
        background: rgba(168, 85, 247, 0.12) !important;
      }

      #hp-tilda-form-slot .t-contact-method__type.hp-active,
      #hp-tilda-form-slot .t-contact-method__type:has(>.t-radio:checked) {
        background: rgba(244, 114, 182, 0.22) !important;
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.35) !important;
      }
      #hp-tilda-form-slot .t-contact-method__type-label {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        cursor: pointer !important;
        white-space: nowrap !important;
        padding: 0 10px !important;
        margin: 0 !important;
        width: 100% !important;
        height: 100% !important;
        box-sizing: border-box !important;
      }
      #hp-tilda-form-slot .t-contact-method__type-label svg {
        width: 20px !important;
        height: 20px !important;
        min-width: 20px !important;
        min-height: 20px !important;
        flex-shrink: 0 !important;
        display: inline-block !important;
        vertical-align: middle !important;
      }
      #hp-tilda-form-slot .t-contact-method__title {
        color: #fdfafd !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 13.5px !important;
        font-weight: 600 !important;
        white-space: nowrap !important;
        display: inline-block !important;
        line-height: 1 !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container,
      #hp-tilda-form-slot .t-contact-method__value-container.t-contact-method__hidden {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #hp-tilda-form-slot .t-contact-method__phone-value,
      #hp-tilda-form-slot .t-contact-method__phone-value.t-contact-method__hidden {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-contact-method__phone-value .t-input-block {
        display: block !important;
        visibility: visible !important;
        width: 100% !important;
        margin: 0 !important;
      }
      #hp-tilda-form-slot .t-contact-method__phone-value input[type="tel"],
      #hp-tilda-form-slot .t-contact-method__phone-value input.t-input,
      #hp-tilda-form-slot .t-contact-method__phone-value .t-input-phonemask__wrap {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        width: 100% !important;
      }
      #hp-tilda-form-slot .t-contact-method__telegram-value,
      #hp-tilda-form-slot .t-contact-method__whatsapp-value,
      #hp-tilda-form-slot .t-contact-method__max_messenger-value {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        overflow: hidden !important;
        pointer-events: none !important;
      }
      #hp-tilda-form-slot .hp-block-hidden {
        display: none !important;
      }
      #hp-tilda-form-slot .t-contact-method__value-container .t-input-block {
        margin: 0 !important;
        width: 100% !important;
      }
      /* Единые чистые белые инпуты для формы (Имя и Телефон) */
      #hp-tilda-form-slot input.t-input,
      #hp-tilda-form-slot input[type="text"],
      #hp-tilda-form-slot input[type="tel"],
      #hp-tilda-form-slot .t-contact-method__phone-value input {
        display: block !important;
        width: 100% !important;
        height: 56px !important;
        min-height: 56px !important;
        background: #ffffff !important;
        color: #111111 !important;
        border: 1.5px solid rgba(244, 114, 182, 0.35) !important;
        border-radius: 16px !important;
        padding: 0 18px !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 16px !important;
        font-weight: 500 !important;
        box-sizing: border-box !important;
        outline: none !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
      }
      #hp-tilda-form-slot input:focus {
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.4) !important;
      }
      #hp-tilda-form-slot input::placeholder,
      #hp-tilda-form-slot input::-webkit-input-placeholder {
        color: #888888 !important;
        opacity: 1 !important;
      }
      #hp-tilda-form-slot .t-input-phonemask__select {
        display: none !important;
      }
      #hp-tilda-form-slot input.t-input:not(.t-input-phonemask):focus,
      #hp-tilda-form-slot textarea.t-input:focus {
        border-color: var(--hp-rose, #f472b6) !important;
        box-shadow: 0 0 16px rgba(244, 114, 182, 0.3) !important;
      }
      #hp-tilda-form-slot input::placeholder,
      #hp-tilda-form-slot input::-webkit-input-placeholder,
      #hp-tilda-form-slot textarea::-webkit-input-placeholder,
      #hp-tilda-form-slot input::-moz-placeholder,
      #hp-tilda-form-slot textarea::-moz-placeholder,
      #hp-tilda-form-slot input:-ms-input-placeholder,
      #hp-tilda-form-slot textarea:-ms-input-placeholder {
        color: #71717a !important;
        opacity: 1 !important;
      }
      #hp-tilda-form-slot .t-contact-method__phone-value .t-input-block {
        position: relative !important;
        display: block !important;
        width: 100% !important;
      }
      .hp-country-prefix {
        position: absolute !important;
        left: 10px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        display: flex !important;
        align-items: center !important;
        gap: 5px !important;
        padding: 5px 8px !important;
        background: #f4f4f5 !important;
        border: 1px solid #e4e4e7 !important;
        border-radius: 10px !important;
        cursor: pointer !important;
        z-index: 10 !important;
        user-select: none !important;
        font-family: 'Montserrat', sans-serif !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        color: #18181b !important;
        transition: background 0.15s ease !important;
      }
      .hp-country-prefix:hover {
        background: #e4e4e7 !important;
      }
      .hp-country-prefix .hp-flag {
        font-size: 17px !important;
        line-height: 1 !important;
      }
      .hp-country-prefix .hp-code {
        font-weight: 700 !important;
        color: #111111 !important;
        font-size: 14px !important;
      }
      .hp-country-dropdown {
        position: absolute !important;
        left: 0 !important;
        top: calc(100% + 6px) !important;
        background: #ffffff !important;
        border: 1px solid rgba(244, 114, 182, 0.4) !important;
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.35) !important;
        border-radius: 14px !important;
        padding: 6px !important;
        z-index: 1000 !important;
        width: 250px !important;
        display: none;
        flex-direction: column !important;
        gap: 2px !important;
      }
      .hp-country-dropdown.hp-show {
        display: flex !important;
      }
      .hp-country-item {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        padding: 8px 12px !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        font-size: 13.5px !important;
        font-weight: 500 !important;
        color: #18181b !important;
        transition: background 0.15s ease !important;
      }
      .hp-country-item:hover {
        background: #fdf2f8 !important;
        color: #db2777 !important;
      }
      .hp-country-item .hp-c-name {
        flex: 1 !important;
      }
      .hp-country-item .hp-c-code {
        font-weight: 600 !important;
        color: #71717a !important;
      }
      #hp-tilda-form-slot .t-contact-method__phone-value input[type="tel"] {
        padding-left: 92px !important;
      }
      #hp-tilda-form-slot .hp-field-error-msg {
        color: #fca5a5 !important;
        font-size: 12.5px !important;
        font-weight: 600 !important;
        margin-top: 6px !important;
        text-align: left !important;
        display: none;
      }
      #hp-tilda-form-slot .t-input-group_tx {
        display: none !important;
      }
      #hp-tilda-form-slot .t-checkbox__control {
        color: var(--hp-text-muted, #b8acc7) !important;
        font-size: 12.5px !important;
        text-align: left !important;
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
      }
      #hp-tilda-form-slot .t-checkbox__indicator {
        border-color: var(--hp-rose, #f472b6) !important;
      }
      #hp-tilda-form-slot .t-submit,
      #hp-tilda-form-slot button[type="submit"] {
        width: 100% !important;
        background: var(--hp-grad-btn, linear-gradient(135deg, #fbcfe8 0%, #f472b6 50%, #db2777 100%)) !important;
        color: #1a0818 !important;
        border: none !important;
        border-radius: 20px !important;
        padding: 18px 26px !important;
        font-size: 16.5px !important;
        font-weight: 700 !important;
        font-family: 'Montserrat', sans-serif !important;
        cursor: pointer !important;
        box-shadow: 0 8px 25px rgba(244, 114, 182, 0.4) !important;
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        text-transform: none !important;
        letter-spacing: 0.5px !important;
        margin-top: 8px !important;
      }
      #hp-tilda-form-slot .t-submit:hover,
      #hp-tilda-form-slot button[type="submit"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 35px rgba(244, 114, 182, 0.6) !important;
      }
      #hp-tilda-form-slot .t-btn_wrap-effects { display: none !important; }
      #hp-tilda-form-slot.hp-submitted form, #hp-tilda-form-slot:has(.hp-success-card) form { display: none !important; visibility: hidden !important; height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; pointer-events: none !important; }
      .hp-success-card {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%) !important;
        border: 2px solid #10B981 !important;
        border-radius: 20px !important;
        padding: 32px 20px !important;
        text-align: center !important;
        box-shadow: 0 16px 45px rgba(16, 185, 129, 0.25) !important;
        animation: hpSuccessFadeIn 0.35s ease forwards !important;
        margin: 10px 0 !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      @keyframes hpSuccessFadeIn {
        from { opacity: 0; transform: scale(0.96); }
        to { opacity: 1; transform: scale(1); }
      }
      .hp-success-check {
        width: 64px !important;
        height: 64px !important;
        background: linear-gradient(135deg, #10B981 0%, #059669 100%) !important;
        color: #ffffff !important;
        font-size: 34px !important;
        font-weight: 700 !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 0 auto 16px auto !important;
        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.45) !important;
      }
      .hp-success-title {
        font-family: 'Cormorant Garamond', serif !important;
        font-size: 30px !important;
        font-weight: 700 !important;
        color: #fdfafd !important;
        margin: 0 0 10px 0 !important;
        letter-spacing: 0.5px !important;
      }
      .hp-success-desc {
        font-size: 14.5px !important;
        color: #e2e8f0 !important;
        line-height: 1.5 !important;
        margin: 0 0 20px 0 !important;
      }
      .hp-success-info-box {
        background: rgba(0, 0, 0, 0.3) !important;
        border: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-radius: 14px !important;
        padding: 14px 18px !important;
        text-align: left !important;
        margin-bottom: 18px !important;
      }
      .hp-success-row {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        padding: 7px 0 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
        font-size: 13.5px !important;
      }
      .hp-success-row:last-child {
        border-bottom: none !important;
      }
      .hp-s-label {
        color: #b8acc7 !important;
      }
      .hp-s-val {
        color: #ffffff !important;
        font-weight: 600 !important;
      }
      .hp-success-tip {
        font-size: 13px !important;
        color: #6ee7b7 !important;
        background: rgba(16, 185, 129, 0.12) !important;
        padding: 10px 14px !important;
        border-radius: 10px !important;
        line-height: 1.45 !important;
      }
      /* Полное отключение белых оверлеев и попапов Тильды */
      .t-popup,
      .t-popup_show,
      .t702,
      .t702__wrapper,
      #rec4673146901:not(#hp-tilda-form-slot *),
      body > .t-popup,
      .t-popup__container,
      .cf-turnstile-wrapper,
      .t-captcha {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
        visibility: hidden !important;
        background: transparent !important;
        z-index: -9999 !important;
      }
      body.t-body_popupshowed,
      html.t-body_popupshowed,
      body.t-body_scroll-locked,
      html.t-body_scroll-locked {
        overflow: auto !important;
        position: static !important;
        height: auto !important;
      }
      #hp-tilda-form-slot .hp-input-label {
        font-family: 'Montserrat', sans-serif !important;
        font-size: 13.5px !important;
        font-weight: 600 !important;
        color: #fce7f3 !important;
        margin-bottom: 8px !important;
        margin-top: 14px !important;
        text-align: left !important;
        display: block !important;
      }
      #hp-tilda-form-slot .hp-contact-hint-box {
        background: rgba(244, 114, 182, 0.08) !important;
        border-left: 3px solid #f472b6 !important;
        border-radius: 10px !important;
        padding: 10px 14px !important;
        margin: 10px 0 16px 0 !important;
        font-size: 13px !important;
        color: #fce7f3 !important;
        line-height: 1.45 !important;
        text-align: left !important;
        transition: all 0.2s ease !important;
      }
      #hp-tilda-form-slot .hp-form-security-note {
        font-size: 12px !important;
        color: #b8acc7 !important;
        text-align: center !important;
        margin-top: 12px !important;
        line-height: 1.4 !important;
      }
      #hp-tilda-form-slot .js-successbox {
        background: rgba(16, 185, 129, 0.15) !important;
        border: 1px solid #10B981 !important;
        color: #6ee7b7 !important;
        border-radius: 16px !important;
        padding: 18px !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        margin-bottom: 20px !important;
      }



      .hp-contacts-card {

        background: var(--hp-bg-card);

        border: 1px solid var(--hp-border);

        border-radius: 26px;

        padding: 40px;

        max-width: 800px;

        margin: 0 auto;

      }

      .hp-contact-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: 34px;

        font-weight: 700;

        margin: 0 0 24px;

        color: #fff;

        text-align: center;

      }

      .hp-contact-item {

        display: flex;

        align-items: flex-start;

        gap: 16px;

        margin-bottom: 20px;

      }

      .hp-ci-icon { font-size: 22px; color: var(--hp-rose); }

      .hp-ci-label {

        font-size: 12px;

        text-transform: uppercase;

        letter-spacing: 1px;

        color: var(--hp-rose-light);

        margin-bottom: 4px;

        font-weight: 600;

      }

      .hp-ci-val { font-size: 15px; color: #fff; line-height: 1.45; }

      .hp-ci-val a { color: #fff; text-decoration: none; font-weight: 600; }

      .hp-contacts-messengers {

        display: flex;

        flex-wrap: wrap;

        gap: 12px 20px;

        align-items: center;

        margin-top: 6px;

      }

      .hp-m-link {

        display: inline-flex !important;

        align-items: center !important;

        gap: 7px !important;

        text-decoration: none !important;

        font-weight: 600 !important;

        font-size: 14.5px !important;

        white-space: nowrap !important;

        transition: opacity 0.2s, transform 0.2s;

      }

      .hp-m-link:hover {

        opacity: 0.85;

        transform: translateY(-1px);

      }

      .hp-m-link svg, .hp-method-btn svg {

        width: 17px;

        height: 17px;

        flex-shrink: 0;

        vertical-align: middle;

      }





      /* ПРЕМИАЛЬНЫЙ ПОДВАЛ (GREYWOLF СТИЛЬ) */

      .hp-footer {

        background: #09050e;

        border-top: 1px solid var(--hp-border);

        padding: 50px 20px 30px;

        color: var(--hp-text-muted);

        font-size: 13px;

        line-height: 1.7;

      }

      .hp-footer-top {

        display: grid;

        grid-template-columns: 1.5fr 1fr 1fr;

        gap: 40px;

        margin-bottom: 40px;

      }

      .hp-footer-brand {

        display: flex;

        flex-direction: column;

        gap: 8px;

      }

      .hp-footer-logo {

        font-family: 'Cormorant Garamond', serif;

        font-size: 28px;

        font-weight: 700;

        background: var(--hp-grad-text);

        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

      }

      .hp-footer-requisites {

        font-size: 12.5px;

        color: #9d8fa9;

        line-height: 1.6;

        margin-top: 6px;

      }

      .hp-footer-col-title {

        font-size: 13px;

        text-transform: uppercase;

        letter-spacing: 1.5px;

        color: var(--hp-rose-light);

        font-weight: 700;

        margin-bottom: 16px;

      }

      .hp-footer-menu {

        display: flex;

        flex-direction: column;

        gap: 10px;

      }

      .hp-footer-menu a, .hp-footer-menu button {

        display: inline-flex;

        align-items: center;

        gap: 7px;

        white-space: nowrap;

        color: #b8acc7;

        text-decoration: none;

        font-size: 13.5px;

        background: none;

        border: none;

        padding: 0;

        text-align: left;

        cursor: pointer;

        font-family: inherit;

        transition: color 0.2s ease;

      }

      .hp-footer-menu a:hover, .hp-footer-menu button:hover {

        color: var(--hp-rose);

      }

      .hp-footer-bottom {

        padding-top: 24px;

        border-top: 1px solid rgba(244, 114, 182, 0.15);

        display: flex;

        justify-content: space-between;

        align-items: center;

        flex-wrap: wrap;

        gap: 16px;

        font-size: 12px;

        color: #8b7d99;

      }

      .hp-footer-bottom-links {

        display: flex;

        gap: 18px;

        flex-wrap: wrap;

      }

      .hp-footer-bottom-link {

        color: #8b7d99;

        text-decoration: underline;

        cursor: pointer;

        background: none;

        border: none;

        font-size: 12px;

        font-family: inherit;

        padding: 0;

        transition: color 0.2s;

      }

      .hp-footer-bottom-link:hover { color: var(--hp-rose-light); }



      /* ДЕТАЛЬНАЯ МОДАЛКА 152-ФЗ / ПОЛИТИКИ */

      .hp-policy-backdrop {

        display: none;

        position: fixed;

        inset: 0;

        background: rgba(8, 4, 14, 0.88);

        backdrop-filter: blur(10px);

        z-index: 100000;

        align-items: center;

        justify-content: center;

        padding: 20px;

      }

      .hp-policy-backdrop.open { display: flex; animation: hpFadeIn 0.25s ease; }

      @keyframes hpFadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }

      .hp-policy-box {

        background: linear-gradient(180deg, #1b1029 0%, #10081a 100%);

        border: 1px solid var(--hp-border-active);

        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(244, 114, 182, 0.2);

        border-radius: 20px;

        max-width: 800px;

        width: 100%;

        max-height: 85vh;

        display: flex;

        flex-direction: column;

        overflow: hidden;

      }

      .hp-policy-top {

        padding: 20px 26px;

        border-bottom: 1px solid var(--hp-border);

        display: flex;

        align-items: center;

        justify-content: space-between;

        background: rgba(14, 8, 22, 0.7);

      }

      .hp-policy-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: 22px;

        font-weight: 700;

        color: #fff;

      }

      .hp-policy-close {

        width: 32px;

        height: 32px;

        border-radius: 50%;

        background: rgba(255, 255, 255, 0.06);

        border: 1px solid var(--hp-border);

        color: #ddd;

        cursor: pointer;

        display: flex;

        align-items: center;

        justify-content: center;

        font-size: 16px;

        transition: all 0.2s;

      }

      .hp-policy-close:hover { background: var(--hp-rose); color: #1a0818; }

      .hp-policy-body {

        padding: 26px;

        overflow-y: auto;

        font-size: 13.5px;

        line-height: 1.7;

        color: #d1c5df;

      }

      .hp-policy-body h4 {

        color: var(--hp-rose-light);

        margin: 18px 0 8px;

        font-size: 15px;

      }

      .hp-policy-body p { margin-bottom: 12px; }



      /* ДВУХСТАДИЙНЫЙ БАННЕР COOKIE (GREYWOLF СТИЛЬ) */

      .hp-cookie-banner {

        position: fixed;

        bottom: 20px;

        left: 20px;

        max-width: 440px;

        width: calc(100% - 40px);

        background: #170d26;

        border: 1.5px solid var(--hp-rose);

        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(244, 114, 182, 0.3);

        border-radius: 20px;

        padding: 22px;

        z-index: 99999;

        display: flex;

        flex-direction: column;

        gap: 14px;

        opacity: 0;

        visibility: hidden;

        transform: translateY(25px);

        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;

        box-sizing: border-box;

        color: #f3e8ff;

      }

      .hp-cookie-banner.visible {

        opacity: 1;

        visibility: visible;

        transform: translateY(0);

      }

      .hp-cookie-close-corner {

        position: absolute;

        top: 14px; right: 14px;

        width: 28px; height: 28px;

        border-radius: 50%;

        background: rgba(255, 255, 255, 0.08);

        border: 1px solid rgba(244, 114, 182, 0.25);

        color: #d1c5df;

        display: flex;

        align-items: center;

        justify-content: center;

        cursor: pointer;

        font-size: 13px;

        transition: all 0.2s;

        z-index: 10;

      }

      .hp-cookie-close-corner:hover {

        background: var(--hp-rose);

        color: #1a0818;

      }

      .hp-cookie-view { display: flex; flex-direction: column; gap: 14px; }

      .hp-cookie-view.hidden { display: none; }

      .hp-cookie-top-nav { display: flex; align-items: center; gap: 12px; }

      .hp-cookie-back-btn {

        width: 32px; height: 32px;

        border-radius: 8px;

        background: rgba(255, 255, 255, 0.06);

        border: 1px solid var(--hp-border);

        color: var(--hp-rose);

        display: flex;

        align-items: center;

        justify-content: center;

        cursor: pointer;

        flex-shrink: 0;

      }

      .hp-cookie-title {

        font-family: 'Cormorant Garamond', serif;

        font-size: 20px;

        font-weight: 700;

        color: #fff;

        line-height: 1.2;

      }

      .hp-cookie-text {

        font-size: 13px;

        line-height: 1.6;

        color: #b8acc7;

      }

      .hp-cookie-text a {

        color: var(--hp-rose-light);

        text-decoration: underline;

        font-weight: 600;

        cursor: pointer;

      }

      .hp-cookie-btn-col {

        display: flex;

        flex-direction: column;

        gap: 8px;

        margin-top: 4px;

      }

      .hp-cookie-btn-primary {

        background: var(--hp-grad-btn);

        color: #1a0818;

        font-size: 13.5px;

        font-weight: 700;

        padding: 12px 18px;

        border: none;

        border-radius: 12px;

        cursor: pointer;

        transition: transform 0.15s, box-shadow 0.2s;

        text-align: center;

      }

      .hp-cookie-btn-primary:hover {

        transform: translateY(-1px);

        box-shadow: 0 4px 18px rgba(244, 114, 182, 0.5);

      }

      .hp-cookie-btn-secondary {

        background: rgba(244, 114, 182, 0.15);

        color: var(--hp-rose-light);

        border: 1px solid var(--hp-border);

        font-size: 13.5px;

        font-weight: 600;

        padding: 11px 18px;

        border-radius: 12px;

        cursor: pointer;

        transition: background 0.2s;

        text-align: center;

      }

      .hp-cookie-btn-secondary:hover {

        background: rgba(244, 114, 182, 0.28);

      }

      .hp-cookie-btn-dark {

        background: rgba(255, 255, 255, 0.05);

        color: #b8acc7;

        font-size: 13px;

        font-weight: 600;

        padding: 11px 18px;

        border: 1px solid rgba(255, 255, 255, 0.1);

        border-radius: 12px;

        cursor: pointer;

        text-align: center;

      }

      .hp-cookie-btn-dark:hover {

        color: #fff;

        border-color: var(--hp-rose);

      }

      .hp-cookie-toggles-list {

        display: flex;

        flex-direction: column;

        gap: 10px;

        margin: 6px 0;

      }

      .hp-cookie-item {

        display: flex;

        align-items: center;

        justify-content: space-between;

        padding: 10px 14px;

        background: rgba(255, 255, 255, 0.04);

        border: 1px solid var(--hp-border);

        border-radius: 12px;

        gap: 10px;

      }

      .hp-cookie-item-label {

        font-size: 13px;

        color: #eee;

        font-weight: 600;

      }

      .hp-switch {

        position: relative;

        display: inline-block;

        width: 44px;

        height: 24px;

        flex-shrink: 0;

      }

      .hp-switch input { opacity: 0; width: 0; height: 0; }

      .hp-slider {

        position: absolute;

        cursor: pointer;

        top: 0; left: 0; right: 0; bottom: 0;

        background-color: #332344;

        transition: 0.25s;

        border-radius: 24px;

      }

      .hp-slider:before {

        position: absolute;

        content: "";

        height: 18px; width: 18px;

        left: 3px; bottom: 3px;

        background-color: #ffffff;

        transition: 0.25s;

        border-radius: 50%;

      }

      .hp-switch input:checked + .hp-slider { background-color: var(--hp-rose); }

      .hp-switch input:checked + .hp-slider:before { transform: translateX(20px); }

      .hp-switch input:disabled + .hp-slider { opacity: 0.6; cursor: not-allowed; }



      /* КНОПКА «НАВЕРХ» И ВИДЖЕТ ЗАЯВКИ */

      #hp-btn-top {

        position: fixed;

        bottom: 14px;

        left: 14px;

        width: 42px;

        height: 42px;

        border-radius: 50%;

        background: rgba(22, 13, 34, 0.9);

        border: 1px solid var(--hp-border-active);

        color: var(--hp-rose-light);

        display: none;

        align-items: center;

        justify-content: center;

        cursor: pointer;

        z-index: 9990;

        box-shadow: 0 4px 15px rgba(0,0,0,0.5);

        transition: transform 0.2s ease, background 0.2s ease;

      }

      #hp-btn-top:hover {

        transform: translateY(-2px);

        background: rgba(244, 114, 182, 0.3);

      }

      #hp-btn-top svg { width: 20px; height: 20px; fill: currentColor; }



      #hp-widget-lead {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 9990;
        display: flex;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .hp-widget-pulse-btn {
        background: var(--hp-grad-btn);
        color: #1a0818 !important;
        padding: 10px 22px;
        border-radius: 9999px;
        text-decoration: none;
        box-shadow: 0 8px 25px rgba(244, 114, 182, 0.55), 0 2px 8px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        border: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: inline-flex;
        align-items: center;
      }
      .hp-widget-pulse-btn:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 12px 32px rgba(244, 114, 182, 0.75);
      }
      .hp-widget-btn-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        line-height: 1.25;
      }
      .hp-widget-btn-main {
        font-size: 13.5px;
        font-weight: 700;
        color: #1a0818;
        letter-spacing: -0.2px;
      }
      .hp-widget-btn-sub {
        font-size: 10.5px;
        font-weight: 600;
        color: #4a044e;
        margin-top: 2px;
        letter-spacing: 0.1px;
        opacity: 0.95;
      }
      @media (max-width: 480px) {
        #hp-widget-lead {
          bottom: 12px !important;
          right: 12px !important;
          left: 12px !important;
        }
        .hp-widget-pulse-btn {
          width: 100%;
          justify-content: center;
          padding: 10px 16px;
        }
        .hp-widget-btn-content {
          align-items: center;
          text-align: center;
        }
        .hp-widget-btn-main {
          font-size: 13px;
        }
        .hp-widget-btn-sub {
          font-size: 10px;
        }
      }



      /* МОБИЛЬНАЯ АДАПТАЦИЯ */

      @media (max-width: 992px) {

        .hp-hero-grid { grid-template-columns: 1fr; }

        .hp-features-grid { grid-template-columns: repeat(2, 1fr); }

        .hp-catalog-grid { grid-template-columns: repeat(2, 1fr); }

        .hp-nav-links { display: none; }

        .hp-footer-top { grid-template-columns: 1fr; gap: 30px; }

      }

      @media (max-width: 640px) {

        .hp-features-grid { grid-template-columns: 1fr; }

        .hp-catalog-grid { grid-template-columns: 1fr; }

        .hp-quiz-options { grid-template-columns: 1fr; }

        .hp-hero-stats { grid-template-columns: 1fr; }

        .hp-method-selector { grid-template-columns: 1fr; }

        .hp-filter-row { flex-direction: column; align-items: flex-start; }

        .hp-footer-bottom { flex-direction: column; align-items: flex-start; }

        .hp-lead-section { padding: 30px 10px 100px; }

        .hp-lead-box { padding: 32px 16px; border-radius: 20px; }

        .hp-input { font-size: 14px; padding: 14px; }

      }

      @media (max-width: 420px) {

        .hp-lead-section { padding: 25px 6px 110px; }

        .hp-lead-trust-gallery {
          gap: 8px;
          max-width: 100%;
          margin: 0 auto 16px auto;
        }
        .hp-trust-card {
          max-height: 135px;
          border-radius: 12px;
        }
        .hp-trust-badge {
          bottom: 5px;
          left: 5px;
          right: 5px;
          padding: 3px 6px;
          font-size: 9.5px;
        }


        .hp-lead-box { padding: 26px 12px; border-radius: 18px; }

        .hp-input { font-size: 13.5px; padding: 12px 10px; }

        .hp-method-btn { padding: 10px 8px; font-size: 13px; }

      }


      /* ===================== AIRTIGHT MOBILE ADAPTATION FOR CONTACTS & FOOTER ===================== */
      @media (max-width: 768px) {
        #contacts {
          padding: 15px 12px 45px !important;
          width: 100% !important;
          max-width: 100vw !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        .hp-contacts-card {
          padding: 22px 14px !important;
          border-radius: 18px !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        .hp-contact-title {
          font-size: 24px !important;
          margin-bottom: 16px !important;
          text-align: center !important;
        }
        .hp-contact-item {
          display: flex !important;
          align-items: flex-start !important;
          gap: 12px !important;
          margin-bottom: 15px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .hp-ci-icon {
          font-size: 20px !important;
          flex-shrink: 0 !important;
          margin-top: 2px !important;
        }
        .hp-contact-item > div:last-child {
          min-width: 0 !important;
          flex: 1 1 auto !important;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
        }
        .hp-ci-label {
          font-size: 11px !important;
          letter-spacing: 0.8px !important;
          margin-bottom: 3px !important;
        }
        .hp-ci-val {
          font-size: 13.5px !important;
          line-height: 1.4 !important;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
        }
        .hp-contacts-messengers {
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 8px !important;
          width: 100% !important;
          margin-top: 10px !important;
          box-sizing: border-box !important;
        }
        .hp-m-link {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 10px !important;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          padding: 12px 12px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(244, 114, 182, 0.25) !important;
          border-radius: 12px !important;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
          font-size: 13px !important;
          line-height: 1.35 !important;
        }
        .hp-m-link span {
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
          white-space: normal !important;
        }
        .hp-m-link svg {
          flex-shrink: 0 !important;
        }

        /* FOOTER MOBILE FIX */
        .hp-footer {
          padding: 30px 12px 115px !important;
          width: 100% !important;
          max-width: 100vw !important;
          box-sizing: border-box !important;
          overflow: hidden !important;
        }
        .hp-footer-top {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .hp-footer-brand {
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .hp-footer-logo {
          font-size: 26px !important;
        }
        .hp-footer-requisites {
          font-size: 11.5px !important;
          line-height: 1.5 !important;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
          margin-top: 10px !important;
        }
        .hp-footer-col-title {
          font-size: 14px !important;
          margin-bottom: 10px !important;
        }
        .hp-footer-menu {
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 8px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .hp-footer-menu a, .hp-footer-menu button {
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          white-space: normal !important;
          word-break: break-word !important;
          overflow-wrap: anywhere !important;
          text-align: left !important;
          font-size: 13px !important;
          line-height: 1.35 !important;
          padding: 6px 0 !important;
        }
        .hp-footer-bottom {
          padding-top: 18px !important;
          margin-top: 18px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 12px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          font-size: 11px !important;
          line-height: 1.45 !important;
        }
        .hp-footer-bottom-links {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 6px !important;
          width: 100% !important;
        }
        .hp-footer-bottom-links span {
          display: none !important;
        }
        .hp-footer-bottom-link {
          text-align: left !important;
          font-size: 11.5px !important;
          padding: 0 !important;
        }
      }

    `;

    document.head.appendChild(s);

  }



  // 3. БАЗА РЕАЛЬНЫХ СРЕЗОВ ИЗ TELEGRAM КАНАЛА (@hi_pretty)

  var cutsDatabase = [
  {
    "id": "4395",
    "cutNum": "#4395",
    "title": "Срез #4395 (62 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 62,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4395.jpg",
    "tgUrl": "https://t.me/hi_pretty/4395",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1599 62 см 136 грамм"
  },
  {
    "id": "4388",
    "cutNum": "#4388",
    "title": "Срез #4388 (56 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 56,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4388.jpg",
    "tgUrl": "https://t.me/hi_pretty/4388",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1601 56 см 153 грамма"
  },
  {
    "id": "4383",
    "cutNum": "#4383",
    "title": "Срез #4383 (68 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 68,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4383.jpg",
    "tgUrl": "https://t.me/hi_pretty/4383",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1607 68 см 146 грамм"
  },
  {
    "id": "4377",
    "cutNum": "#4377",
    "title": "Срез #4377 (56 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 56,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4377.jpg",
    "tgUrl": "https://t.me/hi_pretty/4377",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1596 56 см   106 грамм"
  },
  {
    "id": "4372",
    "cutNum": "#4372",
    "title": "Срез #4372 (61 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 61,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4372.jpg",
    "tgUrl": "https://t.me/hi_pretty/4372",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1600 61 см   176 грамм"
  },
  {
    "id": "4366",
    "cutNum": "#4366",
    "title": "Срез #4366 (57 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 57,
    "weight": "110 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4366.jpg",
    "tgUrl": "https://t.me/hi_pretty/4366",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1602 57 см 192 грамма"
  },
  {
    "id": "4353",
    "cutNum": "#4353",
    "title": "Срез #4353 (57 см / 182 гр)",
    "cat": "wave",
    "badge": "Природная волна",
    "length": 57,
    "weight": "182 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4353.jpg",
    "tgUrl": "https://t.me/hi_pretty/4353",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Детские пористые срезы с природной волной   861 57 см 182 гр 67000 1249 65 см 144 гр  60000 1255 62 см 211 гр 131000 1430 55 см 159 гр 83200"
  },
  {
    "id": "4350",
    "cutNum": "#4350",
    "title": "Срез #4350 (55 см / 139 гр)",
    "cat": "straight",
    "badge": "Прямой шелк",
    "length": 55,
    "weight": "139 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4350.jpg",
    "tgUrl": "https://t.me/hi_pretty/4350",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   1616  55 см  139 гр   Гладкий, мягкий, нежный, шелковистый   68000"
  },
  {
    "id": "4347",
    "cutNum": "#4347",
    "title": "Срез #4347 (54 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 54,
    "weight": "110 гр",
    "price": "118 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4347.jpg",
    "tgUrl": "https://t.me/hi_pretty/4347",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Природный оттенок и структура   1615  54 см в кудре и 65 в вытянутом 168 грамм  Тон 6-7  118.000"
  },
  {
    "id": "4342",
    "cutNum": "#4342",
    "title": "Срез #4342 (52 см / 120 гр)",
    "cat": "blond",
    "badge": "Окрашенный блонд",
    "length": 52,
    "weight": "120 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4342.jpg",
    "tgUrl": "https://t.me/hi_pretty/4342",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Детский блондик  Тонкий, мягкий, нежный   52 см  120 гр  92400"
  },
  {
    "id": "4338",
    "cutNum": "#4338",
    "title": "Срез #4338 (67 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 67,
    "weight": "110 гр",
    "price": "90 500 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4338.jpg",
    "tgUrl": "https://t.me/hi_pretty/4338",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Природный оттенок и структура  Мягкий, тонкий, нежный   1606 67 см   181 грамм  90.500"
  },
  {
    "id": "4334",
    "cutNum": "#4334",
    "title": "Срез #4334 (67 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 67,
    "weight": "110 гр",
    "price": "90 500 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4334.jpg",
    "tgUrl": "https://t.me/hi_pretty/4334",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Природный оттенок и структура  Мягкий, тонкий, нежный   1606 67 см   181 грамм  90.500   Природный оттенок и структура, средней плотности  1598 60 см   114 грамм  54850"
  },
  {
    "id": "4329",
    "cutNum": "#4329",
    "title": "Срез #4329 (67 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 67,
    "weight": "110 гр",
    "price": "90 500 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4329.jpg",
    "tgUrl": "https://t.me/hi_pretty/4329",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  Канал с окрашенными волосами ПРЕМИУМ   Природный оттенок и структура  Мягкий, тонкий, нежный   1606 67 см   181 грамм  90.500   Природный оттенок и структура   1605 68 см   146 грамм  83.400"
  },
  {
    "id": "4325",
    "cutNum": "#4325",
    "title": "Срез #4325 (57 см / 110 гр)",
    "cat": "silk",
    "badge": "Премиум шелк",
    "length": 57,
    "weight": "110 гр",
    "price": "84 480 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4325.jpg",
    "tgUrl": "https://t.me/hi_pretty/4325",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами   Природный оттенок и структура   1608 57 см   176 грамм  84.480"
  },
  {
    "id": "4306",
    "cutNum": "#1554",
    "title": "Срез #1554 (54 см / 115 гр)",
    "cat": "silk",
    "length": 54,
    "weight": "115 гр",
    "price": "158 400 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4306.jpg",
    "tgUrl": "https://t.me/hi_pretty/4306",
    "desc": "#1554   Детский нежный,натуральный блонд Тонкая волосинка  Природная легкая волна   8 тон,есть выгоревшие прядки 9 и 10 тона  54 см 115 гр 158.400"
  },
  {
    "id": "4301",
    "cutNum": "#1232",
    "title": "Срез #1232 (91 см / 169 гр)",
    "cat": "silk",
    "length": 91,
    "weight": "169 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4301.jpg",
    "tgUrl": "https://t.me/hi_pretty/4301",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  #1232  Детский шелк,волосок как паутинка,очень редко бывает в такой длине   Что бы уплотнить концы хвостик можно перетянуть по длинам и нарастить обратным каскадом   Такую работу выполнят наши мастера в студии  "
  },
  {
    "id": "4291",
    "cutNum": "#1556",
    "title": "Срез #1556 (80 см / 174 гр)",
    "cat": "silk",
    "length": 80,
    "weight": "174 гр",
    "price": "275 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4291.jpg",
    "tgUrl": "https://t.me/hi_pretty/4291",
    "desc": "Подбор волос и запись на наращивание ТУТ  Канал с детскими волосами  #1556  Детский срез Тонкая волосинка,шелковый,нежнейший   80 см 174 гр 275.000"
  },
  {
    "id": "4276",
    "cutNum": "#1378",
    "title": "Срез #1378 (50 см / 80 гр)",
    "cat": "silk",
    "length": 50,
    "weight": "80 гр",
    "price": "47 200 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4276.jpg",
    "tgUrl": "https://t.me/hi_pretty/4276",
    "desc": "#1378 • Детский русский срез • Окрашен в щадящей технике без потери качества волос"
  },
  {
    "id": "4271",
    "cutNum": "#1387",
    "title": "Срез #1387 (66 см / 86 гр)",
    "cat": "silk",
    "length": 66,
    "weight": "86 гр",
    "price": "48 400 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4271.jpg",
    "tgUrl": "https://t.me/hi_pretty/4271",
    "desc": "Детские,шелковые,нежнейшие хвостики • #1387 66см/86гр - 48.400 • #1555 68см/140гр - 190.000"
  },
  {
    "id": "4263",
    "cutNum": "#1436",
    "title": "Срез #1436 (50 см / 107 гр)",
    "cat": "wave",
    "length": 50,
    "weight": "107 гр",
    "price": "41 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4263.jpg",
    "tgUrl": "https://t.me/hi_pretty/4263",
    "desc": "#1436 • Детский шелк • Природная волна,волосинка между тонкой и средней,есть выгоревшие прядки"
  },
  {
    "id": "4258",
    "cutNum": "#1247",
    "title": "Срез #1247 (65 см / 181 гр)",
    "cat": "straight",
    "length": 65,
    "weight": "181 гр",
    "price": "113 750 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4258.jpg",
    "tgUrl": "https://t.me/hi_pretty/4258",
    "desc": "Шелковые,маслянистые,нежнейшие,гладкие • #1247 65см/181гр - 113.750 • #1249 65см/144гр - 60.000"
  },
  {
    "id": "4249",
    "cutNum": "#1386",
    "title": "Срез #1386 (60 см / 100 гр)",
    "cat": "wave",
    "length": 60,
    "weight": "100 гр",
    "price": "84 750 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4249.jpg",
    "tgUrl": "https://t.me/hi_pretty/4249",
    "desc": "Детские срезы,выкрашены из славянских,русых хвостиков • Вычесаны от коротышей,подрезаны до густых концов • Волосинка нежная,мягкая,есть легкая волна"
  },
  {
    "id": "4231",
    "cutNum": "#770",
    "title": "Срез #770 (50 см / 140 гр)",
    "cat": "silk",
    "length": 50,
    "weight": "140 гр",
    "price": "48 240 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4231.jpg",
    "tgUrl": "https://t.me/hi_pretty/4231",
    "desc": "Пористые,воздушные детские хвостики • Не жесткие,мягкие,волосинка между тонкой и средней • Идеально придадут желаемый обьем,маленьким количеством грамм в наращивании"
  },
  {
    "id": "4221",
    "cutNum": "#1255",
    "title": "Срез #1255 (62 см / 211 гр)",
    "cat": "silk",
    "length": 62,
    "weight": "211 гр",
    "price": "131 643 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4221.jpg",
    "tgUrl": "https://t.me/hi_pretty/4221",
    "desc": "#1255 • Детский воздушный хвостик • Слегка пористый,не жесткий"
  },
  {
    "id": "4211",
    "cutNum": "#1562",
    "title": "Срез #1562 (50 см / 115 гр)",
    "cat": "wave",
    "length": 50,
    "weight": "115 гр",
    "price": "115 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4211.jpg",
    "tgUrl": "https://t.me/hi_pretty/4211",
    "desc": "#1562 • Эксклюзив   🤍 • Шелковый,нежный,натуральный блонд"
  },
  {
    "id": "4201",
    "cutNum": "#1561",
    "title": "Срез #1561 (55 см / 106 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "106 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4201.jpg",
    "tgUrl": "https://t.me/hi_pretty/4201",
    "desc": "#1561 • Детский эксклюзив • Природная детская активная волнушка,нежнейший,волосинка тоненькая,легкая пористость"
  },
  {
    "id": "4194",
    "cutNum": "#1373",
    "title": "Срез #1373 (53 см / 117 гр)",
    "cat": "silk",
    "length": 53,
    "weight": "117 гр",
    "price": "68 300 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4194.jpg",
    "tgUrl": "https://t.me/hi_pretty/4194",
    "desc": "#1373 • Детский,воздушный хвостик • Окрашен в щадящей технике,качество осталось прежним,срез мягкий,нежный"
  },
  {
    "id": "4187",
    "cutNum": "#1555",
    "title": "Срез #1555 (55 см / 106 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "106 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4187.jpg",
    "tgUrl": "https://t.me/hi_pretty/4187",
    "desc": "#1555 • Детский эксклюзив • Природная детская активная волнушка,нежнейший,волосинка тоненькая,легкая пористость"
  },
  {
    "id": "4177",
    "cutNum": "#1246",
    "title": "Срез #1246 (67 см / 229 гр)",
    "cat": "silk",
    "length": 67,
    "weight": "229 гр",
    "price": "87 350 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4177.jpg",
    "tgUrl": "https://t.me/hi_pretty/4177",
    "desc": "#1246 • Детский,глянцевый срез • Шелковый,мягкий,волосинка ближе к средней"
  },
  {
    "id": "4167",
    "cutNum": "#1560",
    "title": "Срез #1560 (54 см / 96 гр)",
    "cat": "silk",
    "length": 54,
    "weight": "96 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4167.jpg",
    "tgUrl": "https://t.me/hi_pretty/4167",
    "desc": "#1560 • Самый настоящий шелк • Нежнейший детский хвостик с тончайшей волосинкой"
  },
  {
    "id": "4157",
    "cutNum": "#1263",
    "title": "Срез #1263 (55 см / 156 гр)",
    "cat": "silk",
    "length": 55,
    "weight": "156 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4157.jpg",
    "tgUrl": "https://t.me/hi_pretty/4157",
    "desc": "Детские  💎 • Природный блонд • Корень холодный 8-9"
  },
  {
    "id": "4147",
    "cutNum": "#1434",
    "title": "Срез #1434 (72 см / 153 гр)",
    "cat": "straight",
    "length": 72,
    "weight": "153 гр",
    "price": "73 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4147.jpg",
    "tgUrl": "https://t.me/hi_pretty/4147",
    "desc": "#1434 • Детский струящийся шелк • Идеально прямой,блестящий"
  },
  {
    "id": "4137",
    "cutNum": "#993",
    "title": "Срез #993 (53 см / 168 гр)",
    "cat": "wave",
    "length": 53,
    "weight": "168 гр",
    "price": "171 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4137.jpg",
    "tgUrl": "https://t.me/hi_pretty/4137",
    "desc": "#993 • Детский,натуральный блонд,шелк • Волосинка между тонкой и средней"
  },
  {
    "id": "4127",
    "cutNum": "#1218",
    "title": "Срез #1218 (58 см / 188 гр)",
    "cat": "straight",
    "length": 58,
    "weight": "188 гр",
    "price": "от 45 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4127.jpg",
    "tgUrl": "https://t.me/hi_pretty/4127",
    "desc": "#1218 • Детский,идеально прямой срез • Волосинка между тонкой и средней"
  },
  {
    "id": "4117",
    "cutNum": "#1261",
    "title": "Срез #1261 (55 см / 117 гр)",
    "cat": "wave",
    "length": 55,
    "weight": "117 гр",
    "price": "90 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4117.jpg",
    "tgUrl": "https://t.me/hi_pretty/4117",
    "desc": "#1261 • Детский шелковый срез с красивой природной,активной волной • Выгоревшие концы"
  },
  {
    "id": "4106",
    "cutNum": "#1221",
    "title": "Срез #1221 (75 см / 197 гр)",
    "cat": "wave",
    "length": 75,
    "weight": "197 гр",
    "price": "149 000 ₽",
    "img": "https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/cuts/cut_4106.jpg",
    "tgUrl": "https://t.me/hi_pretty/4106",
    "desc": "#1221 • Детский срез с легкой волной • Волосинка между тонкой и средней,шелк"
  }
];



  // 4. HTML РАЗМЕТКА САЙТА

  var html = `

<div id="hp-app">

  <!-- ХЕДЕР -->

  <header class="hp-header">

    <div class="hp-container hp-header-inner">

      <a href="https://hipretty.ru" class="hp-logo-wrap">

        <div class="hp-logo">hi, pretty!</div>

        <div class="hp-logo-sub">Шоурум в Москве • Самовывоз • Доставка СДЭК по РФ</div>

      </a>

      <nav class="hp-nav-links">

        <a href="#catalog" class="hp-nav-link">Каталог срезов</a>

        <a href="#why-us" class="hp-nav-link">Преимущества</a>

        <a href="#lead-box" class="hp-nav-link">Подбор среза</a>

        <a href="#contacts" class="hp-nav-link">Контакты</a>

      </nav>

      <div class="hp-header-actions">

        <a href="tel:+79933365357" class="hp-header-phone" title="Позвонить нам">

          <span class="hp-phone-icon">📞</span>

          <span class="hp-phone-text">8 (993) 336-53-57</span>

        </a>

        <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" class="hp-hdr-msg-btn hp-hdr-msg-tg" title="Написать в Telegram">

          <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

        </a>

        <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" class="hp-hdr-msg-btn hp-hdr-msg-max" title="Написать в MAX">

          <svg viewBox="0 0 48 48" width="18" height="18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#A855F7"/></svg>

        </a>

        <button type="button" class="hp-btn-header-cta hp-open-form-btn">Консультация ✦</button>

      </div>

    </div>

  </header>



  <!-- ГЛАВНЫЙ ЭКРАН (HERO) -->

  <section class="hp-container hp-hero">

    <div class="hp-hero-grid">

      <div class="hp-hero-info">

        <div class="hp-badge-geo"><span class="hp-badge-geo-loc"><span class="hp-dot"></span> Шоурум в Москве (Арбат)</span><span class="hp-badge-delivery-tag">Доставка СДЭК по РФ от 1 дня</span></div>

        <h1 class="hp-hero-title">Натуральные детские<br>славянские срезы <span>высшего качества</span></h1>

        <p class="hp-hero-desc">

          Коллекция отборных натуральных волос со склада в Москве (>35 кг). 

          100% живой волос от одного донора без силикона и химии: ровные плотные концы, шелковистая структура. 

          Быстрая отправка в любой город России и за рубеж.

        </p>

        <div class="hp-hero-cta-box">
          <button type="button" class="hp-btn-main hp-open-form-btn">✦ Подобрать срез по моим параметрам</button>

          <div class="hp-hero-delivery-sub" style="display:inline-flex;align-items:center;gap:8px;font-size:13.5px;color:#fce7f3;margin-top:14px;background:rgba(255,255,255,0.06);padding:8px 16px;border-radius:20px;border:1px solid rgba(244,114,182,0.25);">
            <span>🚚</span> <b>Самовывоз в Москве сегодня</b> • Доставка СДЭК по всей РФ от 1 дня
          </div>
        </div>

        <div class="hp-hero-stats">

          <div class="hp-stat-card">

            <div class="hp-stat-val">>35 кг</div>

            <div class="hp-stat-lbl">Собственный склад волос в Москве</div>

          </div>

          <div class="hp-stat-card">

            <div class="hp-stat-val">РФ и Мир</div>

            <div class="hp-stat-lbl">Быстрая отправка СДЭК и курьером по всей стране</div>

          </div>

          <div class="hp-stat-card">

            <div class="hp-stat-val">100% Натур.</div>

            <div class="hp-stat-lbl">Один донор, без вычеса, служат много коррекций</div>

          </div>

        </div>

      </div>



      <!-- ФОТО ТРЕХ ДЕВОЧЕК -->

      <div class="hp-hero-girls-showcase">

        <img src="https://static.tildacdn.com/tild6662-3065-4338-a165-323261623835/169.svg" alt="Магазин натуральных волос hi, pretty! — детские и славянские срезы" class="hp-girls-img" loading="eager">

        <div class="hp-hero-float-badge top-left">

          <span>✨ Детские шелковые срезы</span>

        </div>

        <div class="hp-hero-float-badge bottom-right">

          <span>💎 Оптовые условия мастерам</span>

        </div>

      </div>

    </div>

  </section>



  <!-- ПРЕИМУЩЕСТВА -->

  <section class="hp-container" id="why-us" style="padding: 20px 20px 40px;">

    <div class="hp-sec-head">

      <span class="hp-sec-badge">Честное качество</span>

      <h2 class="hp-sec-title">Почему наши волосы выбирают <span>по всей России</span></h2>

      <p class="hp-sec-desc">Мы лично отбираем каждый хвостик и гарантируем безупречное качество от первой примерки до многократных коррекций.</p>

    </div>

    <div class="hp-features-grid">

      <div class="hp-feature-card">

        <div class="hp-feat-icon">✨</div>

        <h3 class="hp-feat-title">Один срез — один донор</h3>

        <p class="hp-feat-desc">Волосы не смешиваются. Кутикула направлена строго в одну сторону, поэтому они не путаются после мытья.</p>

      </div>

      <div class="hp-feature-card">

        <div class="hp-feat-icon">🌿</div>

        <h3 class="hp-feat-title">Без силикона и химии</h3>

        <p class="hp-feat-desc">Природный живой волос. Сохраняет естественную шелковистость и блеск даже после окрашивания и термоукладок.</p>

      </div>

      <div class="hp-feature-card">

        <div class="hp-feat-icon">⚖️</div>

        <h3 class="hp-feat-title">Честный вес и длина</h3>

        <p class="hp-feat-desc">Показываем подробные фото и видео выбранного среза при дневном свете перед покупкой.</p>

      </div>

      <div class="hp-feature-card">

        <div class="hp-feat-icon">🚚</div>

        <h3 class="hp-feat-title">Быстрая доставка</h3>

        <p class="hp-feat-desc">Быстрая отправка СДЭК в любой регион России (1–3 дня). Доставка по миру. Надежная упаковка.</p>

      </div>

    </div>

  </section>



  <!-- ИНТЕРАКТИВНЫЙ КАТАЛОГ СРЕЗОВ (ПРЯМОЙ ЭФИР TELEGRAM @hi_pretty) -->

  <section class="hp-container hp-catalog-section" id="catalog">

    <div class="hp-sec-head">

      <span class="hp-sec-badge">Прямой эфир с Telegram-канала @hi_pretty</span>

      <h2 class="hp-sec-title">Примеры срезов <span>из нашего канала</span></h2>

      <p class="hp-sec-desc">

        Публикуем реальные хвостики из ленты Telegram с ценами, фото и точными параметрами. 

        Поскольку срезы быстро разбирают, нажмите «Уточнить наличие и видео» — мастер проверит выбранный хвостик или подберет аналогичный из >35 кг со склада.

      </p>

    </div>



    <!-- ПАНЕЛЬ УМНЫХ ФИЛЬТРОВ -->

    <div class="hp-catalog-filter-bar">

      <!-- 1. ТИП СТРУКТУРЫ -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Структура волос:</div>

        <div class="hp-filter-group" id="filter-type-group">

          <button type="button" class="hp-filter-pill active" data-type="all">Все примеры (28)</button>

          <button type="button" class="hp-filter-pill" data-type="silk">Детский шелк</button>

          <button type="button" class="hp-filter-pill" data-type="wave">Природная волна</button>

          <button type="button" class="hp-filter-pill" data-type="straight">Прямые и гладкие</button>

        </div>

      </div>



      <!-- 2. ДЛИНА -->

      <div class="hp-filter-row">

        <div class="hp-filter-label">Длина волос:</div>

        <div class="hp-filter-group" id="filter-length-group">

          <button type="button" class="hp-filter-pill active" data-len="all">Любая длина</button>

          <button type="button" class="hp-filter-pill" data-len="50">До 50 см</button>

          <button type="button" class="hp-filter-pill" data-len="60">53–65 см</button>

          <button type="button" class="hp-filter-pill" data-len="70">66–80+ см</button>

        </div>

      </div>

    </div>



    <div class="hp-catalog-counter">

      Показано срезов: <strong id="hp-cuts-shown-count">0</strong> из <strong id="hp-cuts-total-count">0</strong>

    </div>



    <!-- СЕТКА КАРТОЧЕК КАТАЛОГА -->

    <div class="hp-catalog-grid" id="hp-catalog-cards">

      <!-- Генерируется динамически через JS -->

    </div>

    <!-- КНОПКА ПОКАЗАТЬ ЕЩЕ + МОСТ К ИНДИВИДУАЛЬНОМУ ПОДБОРУ -->
    <div class="hp-catalog-footer" id="hp-catalog-footer">
      <button type="button" class="hp-catalog-more-btn" id="hp-catalog-more-btn" style="display: none;">
        Показать еще срезы (+6) ↓
      </button>
      <div class="hp-catalog-bridge-banner">
        <div class="hp-catalog-bridge-text">
          <strong>Не хотите листать или не нашли нужный оттенок?</strong>
          <span>На складе в Москве более 35 кг отборных волос от одного донора. Мастер снимет живое видео среза и подберет под вашу структуру за 1 минуту.</span>
        </div>
        <button type="button" class="hp-btn-main hp-open-form-btn">Заказать индивидуальный подбор ✦</button>
      </div>
    </div>

  </section>



  <!-- ЦЕНТРАЛЬНЫЙ БЛОК ЗАХВАТА ЗАЯВКИ -->

  <section id="lead-box" class="hp-lead-section">
    <div id="selection" style="position:relative;top:-80px;visibility:hidden;"></div>

    <div class="hp-container">

      <div class="hp-lead-box">

        <span class="hp-lead-badge">ИНДИВИДУАЛЬНЫЙ ПОДБОР</span>

        <h2 class="hp-lead-title">Подберем идеальный срез <span>под ваш бюджет и структуру волос</span></h2>

        <p class="hp-lead-subtitle">

          Снимем живое видео среза при дневном свете до оплаты. Заберите лично в шоуруме в Москве или получите экспресс-доставкой СДЭК.

        </p>



        <!-- ПЛАШКА ВЫБРАННОГО СРЕЗА ИЛИ ПАРАМЕТРОВ КВИЗА -->

        <div id="hp-selected-cut-box" class="hp-selected-cut-box">

          <div class="hp-selected-cut-info">

            <span class="hp-selected-cut-tag" id="hp-selected-cut-tag">Выбранный срез</span>

            <span class="hp-selected-cut-title" id="hp-selected-cut-text"></span>

          </div>

          <button type="button" class="hp-selected-cut-reset" id="hp-selected-cut-reset" title="Очистить выбор">✕</button>

        </div>



        
        <!-- БЛОК ДОВЕРИЯ: ЖИВЫЕ ФОТО СРЕЗКИ И ПОДГОТОВКИ -->
        <div class="hp-lead-trust-gallery">
          <div class="hp-trust-card">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/images/donor_cut.jpg" alt="Живой срез от одного донора" class="hp-trust-img" loading="lazy">
            <div class="hp-trust-badge">
              <span class="hp-trust-dot"></span>
              <span>Срезка с донора</span>
            </div>
          </div>
          <div class="hp-trust-card">
            <img src="https://cdn.jsdelivr.net/gh/snesterov/hipretty-web@main/images/salon_prep.jpg" alt="Подготовка и отбор прядей в салоне" class="hp-trust-img" loading="lazy">
            <div class="hp-trust-badge">
              <span class="hp-trust-dot"></span>
              <span>Подготовка в салоне</span>
            </div>
          </div>
        </div>

        <!-- СЛОТ ДЛЯ ОФИЦИАЛЬНОЙ РОДНОЙ TILDA-ФОРМЫ -->

        <!-- ИНТЕРАКТИВНЫЙ ВЫБОР ПАРАМЕТРОВ СРЕЗА ПРЯМО В ФОРМЕ -->
        <div class="hp-form-params-picker">
          <div class="hp-fp-head">
            <span class="hp-fp-head-title">Параметры для быстрого подбора (или оставьте пустым):</span>
            <span class="hp-fp-head-hint">Мастер отберет подходящие срезы из 35 кг со склада и пришлет видео</span>
          </div>
          <div class="hp-fp-row">
            <span class="hp-fp-label">Желаемая длина:</span>
            <div class="hp-fp-chips" id="hp-fp-length">
              <button type="button" class="hp-fp-chip" data-val="40–50 см">40–50 см</button>
              <button type="button" class="hp-fp-chip" data-val="55–65 см">55–65 см</button>
              <button type="button" class="hp-fp-chip" data-val="70–80 см">70–80 см</button>
            </div>
          </div>
          <div class="hp-fp-row">
            <span class="hp-fp-label">Тип структуры:</span>
            <div class="hp-fp-chips" id="hp-fp-type">
              <button type="button" class="hp-fp-chip" data-val="Детский шелк">Детский шелк</button>
              <button type="button" class="hp-fp-chip" data-val="Славянский шелк">Славянский шелк</button>
              <button type="button" class="hp-fp-chip" data-val="Природная волна">Природная волна</button>
            </div>
          </div>
        </div>

        <div id="hp-tilda-form-slot"></div>

      </div>

    </div>

  </section>



  <!-- КОНТАКТЫ СТУДИИ -->

  <section class="hp-container" id="contacts" style="padding: 20px 20px 60px;">

    <div class="hp-contacts-card">

      <h2 class="hp-contact-title">Контакты студии</h2>

      <div class="hp-contact-item">

        <div class="hp-ci-icon">📍</div>

        <div>

          <div class="hp-ci-label">Адрес студии в Москве</div>

          <div class="hp-ci-val">г. Москва, м. Арбатская / Смоленская, Староконюшенный переулок 35с2 (по предварительной записи)</div>

        </div>

      </div>

      <div class="hp-contact-item">

        <div class="hp-ci-icon">📞</div>

        <div>

          <div class="hp-ci-label">Телефон студии</div>

          <div class="hp-ci-val"><a href="tel:+79933365357">+7 (993) 336-53-57</a></div>

        </div>

      </div>

      <div class="hp-contact-item">

        <div class="hp-ci-icon">🕒</div>

        <div>

          <div class="hp-ci-label">График работы</div>

          <div class="hp-ci-val">Вт – Вск: с 11:00 до 20:00 (по предварительной записи). Онлайн-подбор: 24/7</div>

        </div>

      </div>

      <div class="hp-contact-item">

        <div class="hp-ci-icon">💬</div>

        <div>

          <div class="hp-ci-label">Мессенджеры для связи</div>

          <div class="hp-contacts-messengers">

            <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" class="hp-m-link" style="color:var(--hp-rose);">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Менеджер в TG: @hi_pretty_manager</span> <span style="font-size:11px;opacity:0.75;margin-left:4px;">(нужен VPN)</span>

            </a>

            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-m-link" style="color:#81D4FA;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Канал: @hi_pretty</span> <span style="font-size:11px;opacity:0.75;margin-left:4px;">(нужен VPN)</span>

            </a>

            <a href="https://wa.me/79933365357" target="_blank" rel="noopener" class="hp-m-link" style="color:#25D366;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.29 16.46 16.59 20.15 12.05 20.15M16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.54 14.62C13.39 14.78 13.25 14.8 13 14.68C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.22C9.83 11.11 9.97 10.93 10.1 10.78C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.17 7.66 9.02 7.65C8.88 7.65 8.71 7.65 8.55 7.65C8.38 7.65 8.11 7.71 7.88 7.96C7.65 8.21 7 8.82 7 10.06C7 11.31 7.91 12.51 8.03 12.68C8.16 12.84 9.82 15.4 12.35 16.5C12.95 16.76 13.42 16.91 13.78 17.03C14.38 17.22 14.93 17.19 15.36 17.13C15.84 17.06 16.84 16.52 17.05 15.94C17.26 15.36 17.26 14.86 17.2 14.76C17.14 14.65 16.82 14.46 16.57 14.33Z"/></svg>

              <span>WhatsApp</span> <span style="font-size:11px;opacity:0.75;margin-left:4px;">(нужен VPN)</span>

            </a>

            <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" class="hp-m-link" style="color:#C084FC;">

              <svg viewBox="0 0 48 48" width="20" height="20" fill="none" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#A855F7"/></svg>

              <span>ЛС MAX</span>

            </a>

          </div>

        </div>

      </div>

    </div>

  </section>



  <!-- ПРЕМИАЛЬНЫЙ ПОДВАЛ (GREYWOLF СТИЛЬ) -->

  <footer class="hp-footer">

    <div class="hp-container">

      <div class="hp-footer-top">

        <div class="hp-footer-brand">

          <div class="hp-footer-logo">hi, pretty!</div>

          <div style="font-size:13px;color:var(--hp-rose);text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">Магазин натуральных волос • Москва</div>

          <div class="hp-footer-requisites">

            ИП Лесовая В. С.<br>

            ИНН: 100201988457 • ОГРНИП: 323774600090577<br>

            Адрес: г. Москва, Староконюшенный пер. 35с2 (по предварительной записи)<br>

            Доставка курьером и СДЭК по всей России и миру.

          </div>

        </div>



        <div>

          <div class="hp-footer-col-title">Навигация</div>

          <div class="hp-footer-menu">

            <a href="#catalog" class="hp-nav-link">Каталог срезов (>35 кг)</a>

            <a href="#selection" class="hp-nav-link">Подбор под ваши параметры</a>

            <a href="#why-us" class="hp-nav-link">Почему наши волосы</a>

            <a href="#contacts" class="hp-nav-link">Контакты студии</a>

            <button type="button" class="hp-open-form-btn">Запросить индивидуальный подбор</button>

          </div>

        </div>



        <div>

          <div class="hp-footer-col-title">Связь и документы</div>

          <div class="hp-footer-menu">

            <a href="https://t.me/hi_pretty_manager" target="_blank" rel="noopener" class="hp-m-link" style="display:inline-flex;align-items:center;gap:7px;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Менеджер в TG: @hi_pretty_manager</span> <span style="font-size:11px;opacity:0.75;margin-left:4px;">(нужен VPN)</span>

            </a>

            <a href="https://t.me/hi_pretty" target="_blank" rel="noopener" class="hp-m-link" style="display:inline-flex;align-items:center;gap:7px;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#0088cc" style="flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>

              <span>Наш канал: @hi_pretty</span>

            </a>

            <a href="https://wa.me/79933365357" target="_blank" rel="noopener" class="hp-m-link" style="display:inline-flex;align-items:center;gap:7px;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" style="flex-shrink:0;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.29 16.46 16.59 20.15 12.05 20.15M16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.9 13.68 14.45 13.54 14.62C13.39 14.78 13.25 14.8 13 14.68C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.97 9.61 11.72C9.47 11.47 9.6 11.34 9.72 11.22C9.83 11.11 9.97 10.93 10.1 10.78C10.22 10.64 10.27 10.53 10.35 10.37C10.43 10.2 10.39 10.06 10.33 9.94C10.27 9.81 9.77 8.58 9.57 8.08C9.37 7.6 9.17 7.66 9.02 7.65C8.88 7.65 8.71 7.65 8.55 7.65C8.38 7.65 8.11 7.71 7.88 7.96C7.65 8.21 7 8.82 7 10.06C7 11.31 7.91 12.51 8.03 12.68C8.16 12.84 9.82 15.4 12.35 16.5C12.95 16.76 13.42 16.91 13.78 17.03C14.38 17.22 14.93 17.19 15.36 17.13C15.84 17.06 16.84 16.52 17.05 15.94C17.26 15.36 17.26 14.86 17.2 14.76C17.14 14.65 16.82 14.46 16.57 14.33Z"/></svg>

              <span>WhatsApp: +7 (993) 336-53-57</span> <span style="font-size:11px;opacity:0.75;margin-left:4px;">(нужен VPN)</span>

            </a>

            <a href="https://max.ru/u/f9LHodD0cOJDkOJa38G-aakmLO32B2FcARILKCnXhnJnzvKWD9r6yXfUCxE" target="_blank" rel="noopener" class="hp-m-link" style="display:inline-flex;align-items:center;gap:7px;">

              <svg viewBox="0 0 48 48" width="20" height="20" fill="none" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#A855F7"/></svg>

              <span>ЛС MAX</span>

            </a>

            <a href="tel:+79933365357" class="hp-m-link" style="display:inline-flex;align-items:center;gap:7px;">

              <svg viewBox="0 0 24 24" width="18" height="18" fill="#E8A598" style="flex-shrink:0;"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>

              <span>+7 (993) 336-53-57</span>

            </a>

            <button type="button" onclick="openPolicyModal('privacy')">Политика конфиденциальности (152-ФЗ)</button>

            <button type="button" onclick="openPolicyModal('consent')">Согласие на обработку данных</button>

            <button type="button" onclick="openCookieSettings()">Настройки файлов Cookie</button>

          </div>

        </div>

      </div>



      <div class="hp-footer-bottom">

        <div>© 2026 Магазин натуральных волос «hi, pretty!». Все права защищены.</div>

        <div class="hp-footer-bottom-links">

          <button type="button" class="hp-footer-bottom-link" onclick="openPolicyModal('privacy')">Конфиденциальность 152-ФЗ</button>

          <span>•</span>

          <button type="button" class="hp-footer-bottom-link" onclick="openPolicyModal('consent')">Согласие на обработку данных</button>

          <span>•</span>

          <button type="button" class="hp-footer-bottom-link" onclick="openCookieSettings()">Настройки Cookie</button>

        </div>

      </div>

    </div>

  </footer>

</div>



<!-- МОДАЛ ПОЛИТИКИ И СОГЛАСИЯ 152-ФЗ -->

<div id="hp-policy-modal" class="hp-policy-backdrop" onclick="closePolicyModal()">

  <div class="hp-policy-box" onclick="event.stopPropagation()">

    <div class="hp-policy-top">

      <div id="hp-policy-modal-title" class="hp-policy-title">Политика конфиденциальности</div>

      <button type="button" class="hp-policy-close" onclick="closePolicyModal()">✕</button>

    </div>

    <div id="hp-policy-modal-body" class="hp-policy-body"></div>

  </div>

</div>



<!-- ДВУХЭТАПНЫЙ БАННЕР COOKIE (GREYWOLF СТИЛЬ) -->

<div id="hp-cookie-banner" class="hp-cookie-banner">

  <button type="button" class="hp-cookie-close-corner" onclick="closeCookieBanner()" title="Закрыть">✕</button>

  

  <div id="hp-cookie-view-main" class="hp-cookie-view">

    <div class="hp-cookie-title">«hi, pretty!» использует cookie</div>

    <div class="hp-cookie-text">

      Они необходимы для правильной и надежной работы сайта, сохранения ваших настроек и веб-аналитики (Яндекс.Метрика). Подробнее читайте в <a onclick="openPolicyModal('privacy')">Политике конфиденциальности</a>.

    </div>

    <div class="hp-cookie-btn-col">

      <button type="button" class="hp-cookie-btn-primary" onclick="acceptAllCookies()">Разрешить все</button>

      <button type="button" class="hp-cookie-btn-secondary" onclick="acceptEssentialCookies()">Разрешить обязательные</button>

      <button type="button" class="hp-cookie-btn-dark" onclick="showCookieSettings()">Настроить</button>

    </div>

  </div>



  <div id="hp-cookie-view-settings" class="hp-cookie-view hidden">

    <div class="hp-cookie-top-nav">

      <button type="button" class="hp-cookie-back-btn" onclick="hideCookieSettings()" title="Назад">

        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>

      </button>

      <div class="hp-cookie-title">Настройки файлов cookie</div>

    </div>

    <div class="hp-cookie-text">

      Вы можете выбрать, какие типы файлов cookie разрешить для использования на сайте.

    </div>

    <div class="hp-cookie-toggles-list">

      <div class="hp-cookie-item">

        <div class="hp-cookie-item-label">Технические (обязательные)</div>

        <label class="hp-switch">

          <input type="checkbox" checked disabled>

          <span class="hp-slider"></span>

        </label>

      </div>

      <div class="hp-cookie-item">

        <div class="hp-cookie-item-label">Аналитические (Яндекс.Метрика)</div>

        <label class="hp-switch">

          <input type="checkbox" id="hp-cookie-toggle-analytics" checked>

          <span class="hp-slider"></span>

        </label>

      </div>

      <div class="hp-cookie-item">

        <div class="hp-cookie-item-label">Маркетинговые и другие</div>

        <label class="hp-switch">

          <input type="checkbox" id="hp-cookie-toggle-other" checked>

          <span class="hp-slider"></span>

        </label>

      </div>

    </div>

    <div class="hp-cookie-btn-col">

      <button type="button" class="hp-cookie-btn-primary" onclick="saveCustomCookieSettings()">Сохранить настройки</button>

    </div>

  </div>

</div>

`;



  var currentMethod = 'telegram';

  var selectedType = 'all';

  var selectedLen = 'all';

  var selectedShade = 'all';



  function scrollToSection(targetId) {

    var el = document.getElementById(targetId);

    if (!el) return;

    var headerOffset = 80;

    var elementPosition = el.getBoundingClientRect().top;

    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({

      top: offsetPosition,

      behavior: "smooth"

    });

  }



  var visibleCutsCount = 3;

  function renderCatalogCards() {
    var container = document.getElementById('hp-catalog-cards');
    if (!container) return;

    var filtered = cutsDatabase.filter(function(item) {
      if (selectedType !== 'all' && item.cat !== selectedType) return false;
      if (selectedLen !== 'all') {
        if (selectedLen === '50' && (item.length > 50)) return false;
        if (selectedLen === '60' && (item.length < 51 || item.length > 65)) return false;
        if (selectedLen === '70' && (item.length < 66)) return false;
      }
      return true;
    });

    var countEl = document.getElementById('hp-cuts-shown-count');
    var totalEl = document.getElementById('hp-cuts-total-count');
    if (totalEl) totalEl.textContent = cutsDatabase.length;

    var moreBtn = document.getElementById('hp-catalog-more-btn');

    if (filtered.length === 0) {
      if (countEl) countEl.textContent = '0';
      if (moreBtn) moreBtn.style.display = 'none';
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--hp-bg-card); border-radius: 20px; border: 1px dashed var(--hp-border);">
          <div style="font-size: 32px; margin-bottom: 12px;">🔎</div>
          <h3 style="font-size: 20px; color: #fff; margin: 0 0 10px;">Срезов с такими параметрами сейчас нет в витрине</h3>
          <p style="color: var(--hp-text-muted); font-size: 14px; margin: 0 0 20px;">На складе более 35 кг отборных волос! Оставьте заявку — мастер снимет живое видео и подберет срез индивидуально.</p>
          <button type="button" class="hp-btn-main hp-open-form-btn">Заказать индивидуальный подбор ✦</button>
        </div>
      `;
      setupActionButtons();
      return;
    }

    var visibleCuts = filtered.slice(0, visibleCutsCount);
    if (countEl) countEl.textContent = visibleCuts.length;

    if (moreBtn) {
      if (filtered.length > visibleCutsCount) {
        var remaining = filtered.length - visibleCutsCount;
        var nextBatch = Math.min(3, remaining);
        moreBtn.innerHTML = 'Показать еще срезы (+' + nextBatch + ') ↓';
        moreBtn.style.display = 'inline-flex';
      } else {
        moreBtn.style.display = 'none';
      }
    }

    var htmlCards = visibleCuts.map(function(item) {
      var badgeText = item.cat === 'wave' ? 'Природная волна' : (item.cat === 'straight' ? 'Прямой шелк' : 'Детский шелк');
      return `
        <div class="hp-cut-card" data-id="${item.id}">
          <div class="hp-cut-img-wrap">
            <img src="${item.img}" alt="${item.title}" class="hp-cut-img" loading="lazy" onerror="hpHandleImgError(this, '${item.id}')">
            <span class="hp-cut-badge">${badgeText}</span>${item.id === cutsDatabase[0].id ? '<span class="hp-cut-new-badge">★ Свежий (Пост #' + item.id + ')</span>' : ''}
            <span class="hp-cut-price-tag">${(!item.price || item.price.includes('TG')) ? 'от 45 000 ₽' : item.price}</span>
            <a href="${item.tgUrl}" target="_blank" rel="noopener" class="hp-cut-video-badge" title="Смотреть видео среза в Telegram">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Видео среза в TG <i>(нужен VPN)</i></span>
            </a>
          </div>
          <div class="hp-cut-body">
            <h3 class="hp-cut-title">${item.title}</h3>
            <div class="hp-cut-meta">
              <span>${item.length} см</span>
              <span>${item.weight}</span>
              <span class="hp-cut-post-tag">Пост #${item.id}</span>
            </div>
            <p class="hp-cut-desc">${item.desc}</p>
            <div class="hp-cut-actions">
              <button type="button" class="hp-cut-btn hp-open-form-btn" data-cut="${item.title}">Уточнить наличие и видео ✦</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = htmlCards;
    setupActionButtons();
  }

  var chosenCutParam = '';



  

  // Быстрая безотказная доставка фото срезов (CDN jsDelivr -> Raw GitHub -> Statically)
  window.hpHandleImgError = function(img, cutId) {
    var retries = parseInt(img.getAttribute('data-retries') || '0', 10);
    if (retries === 0) {
      img.setAttribute('data-retries', '1');
      img.src = 'https://raw.githubusercontent.com/snesterov/hipretty-web/main/cuts/cut_' + cutId + '.jpg';
    } else if (retries === 1) {
      img.setAttribute('data-retries', '2');
      img.src = 'https://cdn.statically.io/gh/snesterov/hipretty-web/main/cuts/cut_' + cutId + '.jpg';
    }
  };



  function setSelectedCutBadge(text, isQuiz) {

    chosenCutParam = text || '';

    var box = document.getElementById('hp-selected-cut-box');

    var tag = document.getElementById('hp-selected-cut-tag');

    var title = document.getElementById('hp-selected-cut-text');

    if (!box || !title) return;

    if (text) {

      tag.textContent = isQuiz ? 'Подбор под параметры' : 'Выбранный срез';

      title.textContent = text;

      box.style.display = 'flex';

    } else {

      box.style.display = 'none';

      title.textContent = '';

    }

  }



  function setupActionButtons() {

    var btns = document.querySelectorAll('.hp-open-form-btn');

    btns.forEach(function(b) {

      if (b.dataset.bound) return;

      b.dataset.bound = 'true';

      b.addEventListener('click', function(e) {

        e.preventDefault();

        var cutName = b.getAttribute('data-cut');

        if (cutName) {

          setSelectedCutBadge(cutName, false);

        }

        scrollToSection('lead-box');

      });

    });



    var resetBtn = document.getElementById('hp-selected-cut-reset');

    if (resetBtn && !resetBtn.dataset.bound) {

      resetBtn.dataset.bound = 'true';

      resetBtn.addEventListener('click', function() {

        setSelectedCutBadge('', false);

      });

    }

  }



  // ===================== COOKIE & 152-ФЗ СИСТЕМА =====================

  var policyTexts = {

    privacy: {

      title: 'Политика конфиденциальности (152-ФЗ РФ)',

      content: `

        <h4>1. Общие положения</h4>

        <p>Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности данных, предпринимаемые магазином натуральных волос «hi, pretty!» (ИП Лесовая В. С., ИНН: 100201988457, ОГРНИП: 323774600090577).</p>

        <h4>2. Цели обработки персональных данных</h4>

        <p>Персональные данные (имя, контактный телефон, никнейм/аккаунт в Telegram или WhatsApp) обрабатываются исключительно в целях консультации, подбора срезов натуральных волос, демонстрации фото/видео материалов и оформления доставки заказа по согласованию с клиентом.</p>

        <h4>3. Правовые основания</h4>

        <p>Оператор обрабатывает персональные данные только при их заполнении и отправке Пользователем через формы на сайте hipretty.ru. Отправляя свои данные, Пользователь выражает свое полное согласие с данной Политикой.</p>

        <h4>4. Безопасность и конфиденциальность</h4>

        <p>Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ неуполномоченных лиц. Данные не передаются третьим лицам, за исключением случаев выполнения доставки (служба курьерской доставки / СДЭК).</p>

      `

    },

    consent: {

      title: 'Согласие на обработку персональных данных (152-ФЗ)',

      content: `

        <h4>Согласие Пользователя</h4>

        <p>Настоящим я, действуя свободно, своей волей и в своем интересе, даю согласие ИП Лесовая В. С. (ИНН 100201988457, ОГРНИП 323774600090577) на обработку моих персональных данных:</p>

        <p>• Имя;<br>• Номер контактного телефона;<br>• Имя пользователя / никнейм в мессенджерах Telegram или WhatsApp.</p>

        <h4>Цели предоставления данных</h4>

        <p>Обработка осуществляется для обратной связи, консультации мастера, подбора натуральных срезов волос по моим параметрам, подтверждения бронирования и организации курьерской или почтовой доставки по всей территории РФ и за рубеж.</p>

        <p>Настоящее согласие действует бессрочно с момента предоставления данных и может быть отозвано путем направления письменного уведомления Оператору.</p>

      `

    }

  };



  window.openPolicyModal = function(type) {

    type = type || 'privacy';

    var modal = document.getElementById('hp-policy-modal');

    var titleEl = document.getElementById('hp-policy-modal-title');

    var bodyEl = document.getElementById('hp-policy-modal-body');

    if (!modal) return;

    var data = policyTexts[type] || policyTexts.privacy;

    if (titleEl) titleEl.textContent = data.title;

    if (bodyEl) bodyEl.innerHTML = data.content;

    modal.classList.add('open');

  };



  window.closePolicyModal = function() {

    var modal = document.getElementById('hp-policy-modal');

    if (modal) modal.classList.remove('open');

  };



  window.openCookieSettings = function() {

    var banner = document.getElementById('hp-cookie-banner');

    if (!banner) return;

    var mainView = document.getElementById('hp-cookie-view-main');

    var settingsView = document.getElementById('hp-cookie-view-settings');

    if (mainView && settingsView) {

      mainView.classList.add('hidden');

      settingsView.classList.remove('hidden');

    }

    banner.classList.add('visible');

  };



  window.closeCookieBanner = function() {

    var banner = document.getElementById('hp-cookie-banner');

    if (banner) banner.classList.remove('visible');

  };



  window.showCookieSettings = function() {

    var mainView = document.getElementById('hp-cookie-view-main');

    var settingsView = document.getElementById('hp-cookie-view-settings');

    if (mainView && settingsView) {

      mainView.classList.add('hidden');

      settingsView.classList.remove('hidden');

    }

  };



  window.hideCookieSettings = function() {

    var mainView = document.getElementById('hp-cookie-view-main');

    var settingsView = document.getElementById('hp-cookie-view-settings');

    if (mainView && settingsView) {

      settingsView.classList.add('hidden');

      mainView.classList.remove('hidden');

    }

  };



  window.acceptAllCookies = function() {

    localStorage.setItem('hp_cookie_consent', JSON.stringify({ status: 'all', time: Date.now() }));

    localStorage.setItem('hp_cookie_accepted', 'true');

    closeCookieBanner();

  };



  window.acceptEssentialCookies = function() {

    localStorage.setItem('hp_cookie_consent', JSON.stringify({ status: 'essential', time: Date.now() }));

    localStorage.setItem('hp_cookie_accepted', 'true');

    closeCookieBanner();

  };



  window.saveCustomCookieSettings = function() {

    var a = document.getElementById('hp-cookie-toggle-analytics');

    var o = document.getElementById('hp-cookie-toggle-other');

    localStorage.setItem('hp_cookie_consent', JSON.stringify({

      status: 'custom',

      analytics: a ? a.checked : true,

      other: o ? o.checked : false,

      time: Date.now()

    }));

    localStorage.setItem('hp_cookie_accepted', 'true');

    closeCookieBanner();

  };



  function checkCookieBannerInit() {

    if (!localStorage.getItem('hp_cookie_accepted')) {

      setTimeout(function() {

        var banner = document.getElementById('hp-cookie-banner');

        if (banner) banner.classList.add('visible');

      }, 900);

    }

  }



  
  // ===================== YANDEX METRIKA 90792799 & DIRECT CONVERSIONS =====================
  (function initYandexMetrika() {
    window.mainMetrikaId = 90792799;
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      if (!document.querySelector('script[src*="mc.yandex.ru/metrika/tag.js"]')) {
        k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;if(a&&a.parentNode){a.parentNode.insertBefore(k,a);}else{document.head.appendChild(k);}
      }
    })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

    try {
      window.ym(90792799, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
    } catch(e) {}
  })();

  window.reachYmGoal = function(goalName, params) {
    try {
      var id = 90792799;
      if (typeof window.ym === 'function') {
        window.ym(id, 'reachGoal', goalName, params);
      } else if (window.ym) {
        window.ym(id, 'reachGoal', goalName, params);
      }
      if (window['yaCounter' + id]) {
        window['yaCounter' + id].reachGoal(goalName, params);
      }
    } catch (err) {}
  };

  // СТРОГАЯ ЗАЩИТА ОТ ЗАДВОЕНИЯ КОНВЕРСИЙ ДЛЯ ЯНДЕКС.ДИРЕКТА (DEDUPLICATION SHIELD)
  var sentYmLeadGoals = false;
  window.sendLeadConversionGoals = function() {
    if (sentYmLeadGoals) {
      return; // Защита: цель шлем строго один раз, без дублей на 100%!
    }
    sentYmLeadGoals = true;

    // Виртуальный хит для URL-цели 'ЗАЯВКА' (ID 513400530, условие: URL содержит 'submitted')
    try {
      var ymId = 90792799;
      if (typeof window.ym === 'function') {
        window.ym(ymId, 'hit', 'https://hipretty.ru/sale2/submitted', {
          title: 'Успешная заявка (подбор волос)'
        });
      } else if (window['yaCounter' + ymId]) {
        window['yaCounter' + ymId].hit('https://hipretty.ru/sale2/submitted');
      }
    } catch (eHit) {}

    window.reachYmGoal('lead');
    window.reachYmGoal('submitted');
    window.reachYmGoal('order');
    window.reachYmGoal('form_submit');
    window.reachYmGoal('form4673146901');
  };

  // Перехват успеха формы Tilda (jQuery + Native event) с защитой от задвоения
  function onTildaFormSuccessGlobal() {
    window.sendLeadConversionGoals();
    var formEl = document.querySelector('form#form4673146901');
    if (formEl) {
      var sBox = formEl.querySelector('.js-successbox');
      if (sBox) {
        sBox.style.setProperty('display', 'block', 'important');
        if (!sBox.innerHTML || sBox.innerHTML.trim() === '') {
          sBox.innerHTML = '<div style="font-size:18px;font-weight:700;margin-bottom:8px;color:#10B981;">✓ Заявка успешно отправлена!</div><div style="color:#e2e8f0;font-size:15px;">Мастер уже подбирает срез и свяжется с вами в течение 10 минут.</div>';
        }
      }
      var inputsWrap = formEl.querySelector('.t-form__inputsbox') || formEl.querySelector('.t-form__wrapper');
      if (inputsWrap) inputsWrap.style.display = 'none';
      var sBtn = formEl.querySelector('button[type="submit"], .t-submit');
      if (sBtn) sBtn.style.display = 'none';
    }
  }
  if (typeof window.jQuery !== 'undefined') {
    window.jQuery(document).on('tildaform:success', onTildaFormSuccessGlobal);
  }
  document.addEventListener('tildaform:success', onTildaFormSuccessGlobal);

  // Защита от мульти-кликов по контактам (debounce 4 секунды)
  var lastContactClickTime = 0;
  document.addEventListener('click', function(e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var now = Date.now();
    if (now - lastContactClickTime < 4000) return; // Исключаем спам-клики

    if (href.indexOf('tel:') === 0) {
      lastContactClickTime = now;
      window.reachYmGoal('phone_click');
      window.reachYmGoal('contact_click');
    } else if (href.indexOf('t.me') !== -1) {
      lastContactClickTime = now;
      window.reachYmGoal('telegram_click');
      window.reachYmGoal('messenger_click');
    } else if (href.indexOf('max.ru') !== -1) {
      lastContactClickTime = now;
      window.reachYmGoal('max_click');
      window.reachYmGoal('messenger_click');
    } else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp.com') !== -1) {
      lastContactClickTime = now;
      window.reachYmGoal('whatsapp_click');
      window.reachYmGoal('messenger_click');
    }
  }, true);

  function setupContactMethodSwitcher(form) {
    var methodContainer = form.querySelector('.t-contact-method__types-container');
    var valContainer = form.querySelector('.t-contact-method__value-container');
    if (!methodContainer || !valContainer) return;

    var methodBtns = methodContainer.querySelectorAll('.t-contact-method__type');
    var phoneVal = valContainer.querySelector('.t-contact-method__phone-value');

    var icons = {
      phone: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="rgba(244,114,182,0.25)"/><path d="M7 9.8a12.5 12.5 0 005.2 5.2l1.8-1.8c.2-.2.5-.3.8-.2.9.3 1.9.5 2.9.5.4 0 .8.4.8.8v2.9c0 .4-.4.8-.8.8-7.5 0-13.7-6.2-13.7-13.7 0-.4.4-.8.8-.8H8c.4 0 .8.4.8.8 0 1 .2 2 .5 2.9.1.3 0 .6-.2.8L7 9.8z" fill="#f472b6"/></svg>',
      telegram: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#2AABEE"/><path d="M5.5 11.8l3.2 1.2 1.3 4.1c.2.5.8.6 1.1.2l1.9-1.9 3.8 2.8c.4.3 1 .1 1.1-.4l2.2-10.4c.1-.6-.4-1.1-1-.9L5.5 10.7c-.6.2-.6 1 0 1.1zm4.2 1l6.8-4.3c.2-.1.3.1.2.2l-5.6 5.1-.2 2.3-.8-2.6-.4-.7z" fill="#ffffff"/></svg>',
      whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="12" fill="#25D366"/><path d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9c0 1.7 1.3 3.4 1.4 3.6.2.2 2.5 3.9 6.2 5.4.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z" fill="#ffffff"/></svg>',
      max_messenger: '<svg viewBox="0 0 48 48" width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#A855F7"/></svg>'
    };

    var titles = {
      phone: 'Телефон',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
      max_messenger: 'MAX'
    };

    methodBtns.forEach(function(btn) {
      var mType = btn.getAttribute('data-method-type');
      var label = btn.querySelector('.t-contact-method__type-label');
      if (label && mType && icons[mType]) {
        label.innerHTML = icons[mType] + '<span class="t-contact-method__title">' + (titles[mType] || mType) + '</span>';
      }
    });

    // ПОСТОЯННО держим основной блок ввода телефона открытым и видимым
    if (phoneVal) {
      phoneVal.classList.remove('t-contact-method__hidden', 'hp-block-hidden');
      phoneVal.style.setProperty('display', 'block', 'important');
      phoneVal.style.setProperty('visibility', 'visible', 'important');
      phoneVal.style.setProperty('opacity', '1', 'important');
      var pInp = phoneVal.querySelector('input');
      if (pInp) {
        pInp.disabled = false;
        pInp.setAttribute('data-tilda-req', '1');
        attachCleanPhoneMask(pInp);
      }
    }

    // Скрытые блоки других мессенджеров прячем, но нейтрализуем их обязательность
    var hiddenMethodBlocks = valContainer.querySelectorAll('.t-contact-method__telegram-value, .t-contact-method__whatsapp-value, .t-contact-method__max_messenger-value');
    hiddenMethodBlocks.forEach(function(b) {
      b.style.setProperty('display', 'none', 'important');
      b.querySelectorAll('input').forEach(function(inp) {
        inp.removeAttribute('data-tilda-req');
        inp.removeAttribute('required');
        inp.classList.remove('js-tilda-rule');
      });
    });

    var currentSelectedMethod = 'phone';

    function selectMethod(methodType) {
      currentSelectedMethod = methodType;
      methodBtns.forEach(function(btn) {
        var bType = btn.getAttribute('data-method-type');
        var r = btn.querySelector('input[type="radio"]');
        if (bType === methodType) {
          btn.classList.add('hp-active');
          if (r) r.checked = true;
        } else {
          btn.classList.remove('hp-active');
          if (r) r.checked = false;
        }
      });

      // Переключаем радио Тильды
      var radios = form.querySelectorAll('input[name="messenger-type"]');
      radios.forEach(function(r) {
        r.checked = (r.value === methodType);
      });

      // Основной блок ввода телефона ВСЕГДА на виду и никогда не исчезает!
      if (phoneVal) {
        phoneVal.classList.remove('t-contact-method__hidden', 'hp-block-hidden');
        phoneVal.style.setProperty('display', 'block', 'important');
        phoneVal.style.setProperty('visibility', 'visible', 'important');
        phoneVal.style.setProperty('opacity', '1', 'important');
        var pInp = phoneVal.querySelector('input');
        if (pInp) {
          pInp.disabled = false;
          pInp.setAttribute('data-tilda-req', '1');
          attachCleanPhoneMask(pInp);
        }
      }

      var hints = {
        phone: '📞 <b>Звонок по телефону:</b> Мастер свяжется с вами в течение 10 минут, ответит на все вопросы и бесплатно подберет срез.',
        telegram: '✈️ <b>Подбор в Telegram:</b> Укажите номер телефона. Мастер пришлет персональную подборку, фото и видео срезов в Telegram.',
        whatsapp: '💬 <b>Подбор в WhatsApp:</b> Укажите номер телефона. Мастер отправит видео срезов при дневном свете и проконсультирует в чате WhatsApp.',
        max_messenger: '🟣 <b>Подбор в MAX:</b> Укажите номер телефона. Мастер пришлет варианты срезов без потери качества и без VPN.'
      };
      var hBox = form.querySelector('#hp-contact-hint-box');
      if (hBox && hints[methodType]) {
        hBox.innerHTML = hints[methodType];
      }
      var pLbl = form.querySelector('#hp-phone-label');
      if (pLbl) {
        if (methodType === 'telegram') {
          pLbl.innerHTML = 'Номер телефона для Telegram <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для связи в чате)</span>';
        } else if (methodType === 'whatsapp') {
          pLbl.innerHTML = 'Номер WhatsApp <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для отправки видео)</span>';
        } else if (methodType === 'max_messenger') {
          pLbl.innerHTML = 'Номер телефона для MAX <span style="font-size:12px;font-weight:400;color:#b8acc7;">(без VPN)</span>';
        } else {
          pLbl.innerHTML = 'Номер телефона <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для звонка и подбора)</span>';
        }
      }
    }

    // Слушатель ввода: при вводе в видимый телефон синхронизируем значение во ВСЕ скрытые инпуты формы
    valContainer.addEventListener('input', function(e) {
      var v = e.target.value;
      valContainer.querySelectorAll('input:not([type="hidden"])').forEach(function(inp) {
        inp.value = v;
      });
    });

    methodBtns.forEach(function(btn) {
      if (btn.dataset.hpSwitchInit) return;
      btn.dataset.hpSwitchInit = 'true';
      btn.addEventListener('click', function(e) {
        var mType = btn.getAttribute('data-method-type');
        if (mType) selectMethod(mType);
      });
    });

    var checkedRadio = methodContainer.querySelector('input[type="radio"]:checked');
    var defaultMethod = (checkedRadio && checkedRadio.value) ? checkedRadio.value : 'phone';
    selectMethod(defaultMethod);

    // No MutationObserver to prevent event-loop freeze
  }


    // Автоматическая маска телефона +7 (9XX) XXX-XX-XX
    var hpCurrentCountry = { code: '+7', flag: '🇷🇺', name: 'Россия' };

    function renderCountryPrefix(valBlock, inp) {
      if (!valBlock || valBlock.querySelector('#hp-country-prefix')) return;
      var tBlock = valBlock.querySelector('.t-input-block') || valBlock;
      tBlock.style.setProperty('position', 'relative', 'important');

      var pref = document.createElement('div');
      pref.id = 'hp-country-prefix';
      pref.className = 'hp-country-prefix';
      pref.innerHTML = '<span class="hp-flag">' + hpCurrentCountry.flag + '</span><span class="hp-code">' + hpCurrentCountry.code + '</span><svg class="hp-arrow" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M1 1L4 4L7 1" stroke="#888888" stroke-width="1.5" stroke-linecap="round"/></svg>';

      var dropdown = document.createElement('div');
      dropdown.id = 'hp-country-dropdown';
      dropdown.className = 'hp-country-dropdown';

      var countries = [
        { code: '+7', flag: '🇷🇺', name: 'Россия' },
        { code: '+375', flag: '🇧🇾', name: 'Беларусь' },
        { code: '+7', flag: '🇰🇿', name: 'Казахстан' },
        { code: '+374', flag: '🇦🇲', name: 'Армения' },
        { code: '+995', flag: '🇬🇪', name: 'Грузия' },
        { code: '+994', flag: '🇦🇿', name: 'Азербайджан' },
        { code: '+998', flag: '🇺🇿', name: 'Узбекистан' },
        { code: '+', flag: '🌍', name: 'Другая страна' }
      ];

      countries.forEach(function(c) {
        var item = document.createElement('div');
        item.className = 'hp-country-item';
        item.innerHTML = '<span>' + c.flag + '</span><span class="hp-c-name">' + c.name + '</span><span class="hp-c-code">' + c.code + '</span>';
        item.addEventListener('click', function(ev) {
          ev.stopPropagation();
          hpCurrentCountry = c;
          pref.querySelector('.hp-flag').textContent = c.flag;
          pref.querySelector('.hp-code').textContent = c.code;
          dropdown.classList.remove('hp-show');
          if (inp) {
            inp.value = '';
            if (c.code === '+') {
              inp.placeholder = 'Код и номер (любая страна)';
            } else {
              inp.placeholder = '(999) 000-00-00';
            }
            inp.focus();
          }
        });
        dropdown.appendChild(item);
      });

      pref.addEventListener('click', function(ev) {
        ev.stopPropagation();
        dropdown.classList.toggle('hp-show');
      });

      document.addEventListener('click', function(ev) {
        if (!pref.contains(ev.target)) {
          dropdown.classList.remove('hp-show');
        }
      });

      tBlock.appendChild(pref);
      tBlock.appendChild(dropdown);
    }

    function attachCleanPhoneMask(inp) {
      if (!inp || inp.dataset.cleanMaskSet) return;
      inp.dataset.cleanMaskSet = 'true';
      inp.placeholder = '(999) 000-00-00';
      inp.setAttribute('autocomplete', 'tel');
      inp.setAttribute('inputmode', 'tel');
      inp.setAttribute('type', 'tel');
      inp.setAttribute('name', 'phone');
      inp.style.setProperty('background', '#ffffff', 'important');
      inp.style.setProperty('color', '#111111', 'important');
      inp.style.setProperty('display', 'block', 'important');
      inp.style.setProperty('padding-left', '92px', 'important');

      var valBlock = inp.closest('.t-contact-method__phone-value') || inp.parentElement;
      if (valBlock) renderCountryPrefix(valBlock, inp);

      function formatPhoneValue() {
        var val = inp.value;
        if (!val) return;
        if (hpCurrentCountry.code === '+') {
          inp.value = val.replace(/[^\d\s\-\(\)\+]/g, '');
          return;
        }
        var digits = val.replace(/\D/g, '');
        if (!digits) {
          inp.value = '';
          return;
        }

        // Если введен код страны в поле (например из буфера +7999... или 8999...)
        if (hpCurrentCountry.code === '+7') {
          if ((digits.length >= 11 && (digits[0] === '7' || digits[0] === '8')) || (digits.length === 10 && digits[0] === '8')) {
            digits = digits.substring(1);
          }
        } else if (hpCurrentCountry.code === '+375' && digits.indexOf('375') === 0) {
          digits = digits.substring(3);
        }

        digits = digits.substring(0, 10);
        var formatted = '';
        if (digits.length > 0) formatted += '(' + digits.substring(0, 3);
        if (digits.length >= 3) formatted += ') ' + digits.substring(3, 6);
        if (digits.length >= 6) formatted += '-' + digits.substring(6, 8);
        if (digits.length >= 8) formatted += '-' + digits.substring(8, 10);
        inp.value = formatted;
      }

      inp.addEventListener('input', formatPhoneValue);
      inp.addEventListener('change', formatPhoneValue);
      inp.addEventListener('paste', function() { setTimeout(formatPhoneValue, 10); });
    }

  
  function showCustomError(inputEl, msg) {
    if (!inputEl) return;
    var targetBox = inputEl.classList.contains('t-input-phonemask') ? inputEl.closest('.t-input-phonemask__wrap') : inputEl;
    if (!targetBox) targetBox = inputEl;

    targetBox.style.setProperty('border-color', '#f87171', 'important');
    targetBox.style.setProperty('box-shadow', '0 0 18px rgba(239, 68, 68, 0.45)', 'important');
    inputEl.focus();

    var block = inputEl.closest('.t-input-block') || targetBox.parentElement;
    if (!block) return;

    var existingErr = block.querySelector('.hp-field-error-msg');
    if (!existingErr) {
      existingErr = document.createElement('div');
      existingErr.className = 'hp-field-error-msg';
      block.appendChild(existingErr);
    }
    existingErr.textContent = msg;
    existingErr.style.display = 'block';

    function onInp() {
      targetBox.style.removeProperty('border-color');
      targetBox.style.removeProperty('box-shadow');
      existingErr.style.display = 'none';
      inputEl.removeEventListener('input', onInp);
    }
    inputEl.addEventListener('input', onInp);
  }

  function clearCustomErrors(formEl) {
    if (!formEl) return;
    formEl.querySelectorAll('.hp-field-error-msg').forEach(function(el) {
      el.style.display = 'none';
    });
    formEl.querySelectorAll('input, .t-input-phonemask__wrap').forEach(function(el) {
      el.style.removeProperty('border-color');
      el.style.removeProperty('box-shadow');
    });
  }

  function renderBuiltinLeadForm(slot) {
    if (!slot) return;
    if (slot.querySelector('#form4673146901, form') || slot.querySelector('.hp-success-card')) return;

    slot.innerHTML = '<form id="form546191949" name="form546191949" role="form" action="https://forms.tildacdn.com/procces/" method="POST" data-formactiontype="2" data-inputbox=".t-input-group" data-success-popup="y" class="t-form js-form-proccess" data-formskey="a8a1a8151b151a0221d568e5a5500437" autocomplete="off" onsubmit="return false;">' +
      '<input type="hidden" name="formservices[]" value="b50f30259e15e3d8d5212d867a1d4954" class="js-formaction-services">' +
      '<input type="hidden" name="formservices[]" value="f84b098f0cddc52c587a2c2f5e0fadfc" class="js-formaction-services">' +
      '<input type="hidden" name="formservices[]" value="9f2f90b847bfb45b6924b750bb155691" class="js-formaction-services">' +
      '<input type="hidden" name="formservices[]" value="3de76a792e289629ff456561531ed0ca" class="js-formaction-services">' +
      '<input type="hidden" name="formservices[]" value="079d3725ab062a821f281c7010b7677f" class="js-formaction-services">' +
      '<input type="hidden" name="tildaspec-formid" value="546191949">' +
      '<input type="hidden" name="tildaspec-formname" value="Заявка на подбор со срезом">' +
      '<input type="hidden" name="tildaspec-pageid" value="33796955">' +
      '<input type="hidden" name="tildaspec-projectid" value="5500437">' +
      '<input type="hidden" name="cut" id="hp-builtin-cut-hidden" value="">' +
      '<input type="hidden" name="messenger" id="hp-builtin-msg-hidden" value="">' +
      '<input type="hidden" name="Phone" id="hp-builtin-phone-hidden" value="">' +
      '<input type="hidden" name="Textarea" id="hp-builtin-textarea-hidden" value="">' +
      '<input type="hidden" name="Checkbox" value="yes">' +
      '<div class="t-form__inputsbox">' +
        '<div class="t-input-group">' +
          '<div class="hp-input-label">Ваше имя <span style="font-size:12px;font-weight:400;color:#b8acc7;">(как к вам обращаться)</span></div>' +
          '<div class="t-input-block">' +
            '<input type="text" name="Name" class="t-input hp-lead-input" placeholder="Например, Анна" autocomplete="name" style="width:100%!important;height:54px!important;background:#ffffff!important;border:1px solid #d1d5db!important;border-radius:14px!important;color:#111111!important;padding:0 18px!important;font-size:15px!important;box-sizing:border-box!important;font-family:\'Montserrat\',sans-serif!important;">' +
          '</div>' +
        '</div>' +
        '<div class="t-input-group">' +
          '<div class="t-input-title hp-input-label">Куда прислать подбор и видео среза:</div>' +
          '<div class="t-contact-method__types-container" id="hp-builtin-method-container">' +
            '<div class="t-contact-method__type hp-active" data-method="phone">' +
              '<div class="t-contact-method__type-label">' +
                '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" style="vertical-align:middle;flex-shrink:0;"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#F472B6"/></svg>' +
                '<span class="t-contact-method__title" style="color:#fdfafd!important;">Телефон</span>' +
              '</div>' +
            '</div>' +
            '<div class="t-contact-method__type" data-method="whatsapp">' +
              '<div class="t-contact-method__type-label">' +
                '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" style="vertical-align:middle;flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2.1 21.9l4.872-1.306A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.07 14.168c-.214.604-1.244 1.157-1.722 1.218-.456.058-1.042.083-1.684-.122-.39-.124-.892-.29-1.543-.573-2.723-1.182-4.502-3.953-4.639-4.135-.136-.182-1.1-1.464-1.1-2.793 0-1.328.694-1.982.94-2.247.246-.265.536-.331.715-.331.18 0 .358.002.513.01.166.008.388-.063.608.465.226.542.77 1.88.837 2.018.067.137.112.298.022.477-.09.18-.135.292-.269.448-.134.157-.282.35-.403.47-.135.135-.276.282-.119.55.157.269.697 1.148 1.493 1.856 1.026.912 1.892 1.194 2.161 1.328.269.135.426.113.583-.067.157-.18.672-.784.851-1.053.18-.269.358-.224.604-.134.246.09 1.566.738 1.834.872.269.135.448.202.515.314.067.112.067.65-.147 1.254z" fill="#25D366"/></svg>' +
                '<span class="t-contact-method__title" style="color:#fdfafd!important;">WhatsApp</span>' +
              '</div>' +
            '</div>' +
            '<div class="t-contact-method__type" data-method="telegram">' +
              '<div class="t-contact-method__type-label">' +
                '<svg viewBox="0 0 24 24" width="18" height="18" fill="#229ED9" style="vertical-align:middle;flex-shrink:0;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>' +
                '<span class="t-contact-method__title" style="color:#fdfafd!important;">Telegram</span>' +
              '</div>' +
            '</div>' +
            '<div class="t-contact-method__type" data-method="max_messenger">' +
              '<div class="t-contact-method__type-label">' +
                '<svg viewBox="0 0 48 48" width="18" height="18" fill="none" style="vertical-align:middle;flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" fill="#A855F7"/></svg>' +
                '<span class="t-contact-method__title" style="color:#fdfafd!important;">MAX</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="t-input-group">' +
          '<div class="hp-input-label" id="hp-builtin-phone-label">Номер телефона <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для звонка и подбора)</span></div>' +
          '<div class="t-input-block" id="hp-builtin-phone-block" style="position:relative!important;">' +
            '<input type="tel" name="phone" id="hp-builtin-phone-input" class="t-input hp-lead-input" placeholder="(999) 000-00-00" autocomplete="tel" inputmode="tel" style="width:100%!important;height:54px!important;background:#ffffff!important;border:1px solid #d1d5db!important;border-radius:14px!important;color:#111111!important;padding:0 18px 0 92px!important;font-size:15px!important;box-sizing:border-box!important;font-family:\'Montserrat\',sans-serif!important;">' +
          '</div>' +
          '<div class="hp-contact-hint-box" id="hp-builtin-hint-box">' +
            '📞 <b>Звонок по телефону:</b> Мастер свяжется с вами в течение 10 минут, ответит на все вопросы и бесплатно подберет срез.' +
          '</div>' +
        '</div>' +
        '<div class="t-form__submit">' +
          '<button type="submit" id="hp-builtin-submit-btn" class="t-submit" style="width:100%!important;height:56px!important;background:linear-gradient(135deg,#ec4899,#d946ef)!important;color:#ffffff!important;border:none!important;border-radius:14px!important;font-weight:700!important;font-size:16px!important;cursor:pointer!important;box-shadow:0 8px 25px rgba(236,72,153,0.4)!important;transition:all 0.2s!important;font-family:\'Montserrat\',sans-serif!important;">' +
            'Заказать индивидуальный подбор ✦' +
          '</button>' +
          '<div class="hp-form-security-note">' +
            '🔒 Ваши данные защищены (152-ФЗ РФ). Консультация и подбор среза бесплатны и ни к чему вас не обязывают.' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</form>';

    var bForm = slot.querySelector('form');
    if (!bForm) return;
    var bPhoneInp = bForm.querySelector('#hp-builtin-phone-input');
    var bPhoneBlock = bForm.querySelector('#hp-builtin-phone-block');

    renderCountryPrefix(bPhoneBlock, bPhoneInp);
    attachCleanPhoneMask(bPhoneInp);

    var activeMethod = 'phone';
    var methodBtns = bForm.querySelectorAll('#hp-builtin-method-container .t-contact-method__type');
    var hintBox = bForm.querySelector('#hp-builtin-hint-box');
    var phoneLabel = bForm.querySelector('#hp-builtin-phone-label');

    var hints = {
      phone: '📞 <b>Звонок по телефону:</b> Мастер свяжется с вами в течение 10 минут, ответит на все вопросы и бесплатно подберет срез.',
      telegram: '✈️ <b>Подбор в Telegram:</b> Укажите номер телефона. Мастер пришлет персональную подборку, фото и видео срезов в Telegram.',
      whatsapp: '💬 <b>Подбор в WhatsApp:</b> Укажите номер телефона. Мастер отправит видео срезов при дневном свете и проконсультирует в чате WhatsApp.',
      max_messenger: '🟣 <b>Подбор в MAX:</b> Укажите номер телефона. Мастер пришлет варианты срезов без потери качества и без VPN.'
    };

    methodBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        methodBtns.forEach(function(b) { b.classList.remove('hp-active'); });
        btn.classList.add('hp-active');
        activeMethod = btn.getAttribute('data-method') || 'phone';
        if (hintBox && hints[activeMethod]) hintBox.innerHTML = hints[activeMethod];
        if (phoneLabel) {
          if (activeMethod === 'telegram') {
            phoneLabel.innerHTML = 'Номер телефона для Telegram <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для связи в чате)</span>';
          } else if (activeMethod === 'whatsapp') {
            phoneLabel.innerHTML = 'Номер WhatsApp <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для отправки видео)</span>';
          } else if (activeMethod === 'max_messenger') {
            phoneLabel.innerHTML = 'Номер телефона для MAX <span style="font-size:12px;font-weight:400;color:#b8acc7;">(без VPN)</span>';
          } else {
            phoneLabel.innerHTML = 'Номер телефона <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для звонка и подбора)</span>';
          }
        }
      });
    });

    var submitBtn = bForm.querySelector('#hp-builtin-submit-btn');
    var nameInput = bForm.querySelector('input[name="Name"]');

    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      var captchaInpB = bForm.querySelector('#js-tildaspec-captcha, input[name="tildaspec-captcha"]');
      var hasCaptchaB = captchaInpB && captchaInpB.value && captchaInpB.value.trim().length > 0;
      var now = Date.now();
      if (!hasCaptchaB && window.hpLastLeadSubmitTime && (now - window.hpLastLeadSubmitTime < 3000)) {
        return false;
      }

      clearCustomErrors(bForm);

      var nVal = (nameInput ? nameInput.value : '').trim();
      if (!nVal) {
        showCustomError(nameInput, 'Пожалуйста, укажите имя');
        return false;
      }

      var digits = (bPhoneInp ? bPhoneInp.value : '').replace(/\D/g, '');
      var isOtherCountry = (typeof hpCurrentCountry !== 'undefined' && hpCurrentCountry.code === '+');
      if (isOtherCountry) {
        if (!digits || digits.length < 6) {
          showCustomError(bPhoneInp, 'Пожалуйста, укажите телефон с кодом страны');
          return false;
        }
      } else {
        if (!digits || digits.length < 10) {
          showCustomError(bPhoneInp, 'Пожалуйста, укажите номер телефона');
          return false;
        }
      }

      window.hpLastLeadSubmitTime = now;
      submitBtn.disabled = true;
      submitBtn.style.setProperty('pointer-events', 'none', 'important');
      submitBtn.style.setProperty('opacity', '0.7', 'important');
      submitBtn.textContent = 'Отправка заявки...';

      var methodLabels = {
        phone: '📞 Звонок по телефону',
        telegram: '✈️ Telegram',
        whatsapp: '💬 WhatsApp',
        max_messenger: '🟣 MAX'
      };
      var methodText = methodLabels[activeMethod] || activeMethod;

      var cutParamEl = document.getElementById('hp-selected-cut-text');
      var selectedCut = (cutParamEl && cutParamEl.textContent.trim()) ? cutParamEl.textContent.trim() : (chosenCutParam || '');
        if (!selectedCut || selectedCut === 'Общий подбор (срез не указан)') {
          var actLen = document.querySelector('#hp-fp-length .hp-fp-chip.active');
          var actType = document.querySelector('#hp-fp-type .hp-fp-chip.active');
          if (actLen || actType) {
            selectedCut = (actLen ? actLen.getAttribute('data-val') : '55–65 см') + ' • ' + (actType ? actType.getAttribute('data-val') : 'Детский шелк');
          } else {
            selectedCut = 'Общий подбор (срез не указан)';
          }
        }

      var isOtherCountry = (typeof hpCurrentCountry !== 'undefined' && hpCurrentCountry.code === '+');
      var fPhone;
      var intDigits;
      if (isOtherCountry) {
        fPhone = '+' + digits;
        intDigits = digits;
      } else {
        var lastDigits = digits.slice(-10);
        var pCode = (typeof hpCurrentCountry !== 'undefined' && hpCurrentCountry.code) ? hpCurrentCountry.code : '+7';
        fPhone = pCode + ' (' + lastDigits.substring(0, 3) + ') ' + lastDigits.substring(3, 6) + '-' + lastDigits.substring(6, 8) + '-' + lastDigits.substring(8, 10);
        var rawDigits = digits.replace(/\D/g, '');
        intDigits = (rawDigits.length === 10 ? '7' + rawDigits : (rawDigits.length === 11 && rawDigits[0] === '8' ? '7' + rawDigits.substring(1) : rawDigits));
      }

      var searchParams = new URLSearchParams(window.location.search);
      var utmSource = searchParams.get('utm_source') || 'Прямой / Органика';
      var utmCampaign = searchParams.get('utm_campaign') || '-';
      var utmContent = searchParams.get('utm_content') || '-';
      var utmTerm = searchParams.get('utm_term') || '-';
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      var deviceText = isMobile ? '📱 Мобильный' : '💻 Десктоп';
      var clientName = (nVal || 'Клиент').trim();

      var waLink = 'https://wa.me/' + intDigits;
      
      var tgMsg = '🔥 <b>Новая заявка с сайта!</b>\n\n' +
                  '👤 <b>Имя:</b> ' + clientName + '\n' +
                  '📞 <b>Телефон:</b> <code>' + fPhone + '</code>\n' +
                  '💬 <b>Способ связи:</b> ' + methodText + '\n' +
                  '✂️ <b>Срез/запрос:</b> ' + selectedCut + '\n\n' +
                  '⚡ <b>Связь с клиентом в 1 клик:</b>\n' +
                  '• WhatsApp: ' + waLink + '\n\n' +
                  '📊 <b>Трафик и маркетинг:</b>\n' +
                  '• Источник: <code>' + utmSource + '</code>\n' +
                  '• Кампания: <code>' + utmCampaign + '</code>\n' +
                  '• Ключ: <code>' + (utmTerm !== '-' ? utmTerm : utmContent) + '</code>\n' +
                  '• Устройство: ' + deviceText + '\n' +
                  '• Страница: ' + window.location.href.split('?')[0];

      // 1. Формирование сопроводительного текста с быстрыми ссылками
      var commentText = '✂️ Срез: ' + selectedCut + '\n💬 Связь: ' + methodText + '\nWhatsApp: ' + waLink + '\n📊 Источник: ' + utmSource + ' / ' + utmCampaign + '\n📱 Устройство: ' + deviceText;

      // 2. Заполнение скрытых полей формы перед отправкой
      var cutHidden = bForm.querySelector('#hp-builtin-cut-hidden');
      if (cutHidden) cutHidden.value = selectedCut;
      var msgHidden = bForm.querySelector('#hp-builtin-msg-hidden');
      if (msgHidden) msgHidden.value = methodText;
      var phoneHidden = bForm.querySelector('#hp-builtin-phone-hidden');
      if (phoneHidden) phoneHidden.value = fPhone;
      var taHidden = bForm.querySelector('#hp-builtin-textarea-hidden');
      if (taHidden) taHidden.value = commentText;

      // 3. Доставка в Tilda Server Gateway с привязкой 5 рабочих сервисов (включая Telegram чат)
      var servicesList = [
        'b50f30259e15e3d8d5212d867a1d4954',
        'f84b098f0cddc52c587a2c2f5e0fadfc',
        '9f2f90b847bfb45b6924b750bb155691',
        '3de76a792e289629ff456561531ed0ca',
        '079d3725ab062a821f281c7010b7677f'
      ];

      var allRecords = document.getElementById('allrecords');
      var formsKey = (allRecords && allRecords.getAttribute('data-tilda-formskey')) || 'a8a1a8151b151a0221d568e5a5500437';

      // 3A. Вызов нативного метода Tilda
      var cutInpB = bForm.querySelector('input[name="cut"]');
        if (!cutInpB) {
          cutInpB = document.createElement('input');
          cutInpB.type = 'hidden';
          cutInpB.name = 'cut';
          bForm.appendChild(cutInpB);
        }
        cutInpB.value = selectedCut;

        if (window.tildaForm && typeof window.tildaForm.send === 'function') {
        try {
          window.tildaForm.send(bForm, submitBtn, 2, formsKey);
        } catch(err) {}
      }

      // 3B. Гарантированный фоновый POST запрос в Tilda со всеми 5 сервисами (form546191949)
      try {
        var p1 = new URLSearchParams();
        servicesList.forEach(function(s) { p1.append('formservices[]', s); });
        p1.append('formid', 'form546191949');
        p1.append('tildaspec-formid', '546191949');
        p1.append('tildaspec-formname', 'Заявка на подбор со срезом (sale2)');
        p1.append('tildaspec-pageid', '33796955');
        p1.append('tildaspec-projectid', '5500437');
        p1.append('Name', clientName);
        p1.append('Phone', fPhone);
        p1.append('cut', selectedCut);
        p1.append('messenger', methodText);
        p1.append('Textarea', commentText);
        p1.append('Checkbox', 'yes');

        var xhr1 = new XMLHttpRequest();
        xhr1.open('POST', 'https://forms.tildacdn.com/procces/', true);
        xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr1.send(p1.toString());
      } catch(e) {}

      // 3C. Дублирующий фоновый запрос (form1915062531) для полной надежности
      try {
        var p2 = new URLSearchParams();
        servicesList.forEach(function(s) { p2.append('formservices[]', s); });
        p2.append('formid', 'form1915062531');
        p2.append('tildaspec-formid', '1915062531');
        p2.append('tildaspec-formname', 'Заявка на подбор со срезом (sale2)');
        p2.append('tildaspec-pageid', '297318909');
        p2.append('tildaspec-projectid', '5500437');
        var bNameWithCut = clientName + ' [✂️ ' + selectedCut + ']';
        p2.append('Name', clientName);
        p2.append('Phone', fPhone);
        p2.append('cut', selectedCut);
        p2.append('messenger', methodText);
        p2.append('Textarea', commentText);
        p2.append('Checkbox', 'yes');

        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'https://forms.tildacdn.com/procces/', true);
        xhr2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr2.send(p2.toString());
      } catch(e) {}

      // 3D. Локальный архив заявки
      try {
        var leadRecordB = { time: new Date().toISOString(), name: clientName, phone: fPhone, method: methodText, cut: selectedCut };
        var arch = JSON.parse(localStorage.getItem('hp_leads_archive') || '[]');
        arch.push(leadRecordB);
        localStorage.setItem('hp_leads_archive', JSON.stringify(arch));
      } catch(e) {}

      // 3. Отправка целей в Яндекс Метрику для Директа
      if (typeof window.sendLeadConversionGoals === 'function') {
        window.sendLeadConversionGoals();
      }

      // 4. Карточка подтверждения с поддержкой Tilda Captcha (без удаления формы из DOM)
      function displayBuiltinSuccess() {
        if (slot.querySelector('.hp-success-card')) return;
        bForm.style.setProperty('display', 'none', 'important');
        bForm.style.setProperty('visibility', 'hidden', 'important');
        bForm.style.setProperty('height', '0', 'important');
        bForm.style.setProperty('overflow', 'hidden', 'important');
        bForm.style.setProperty('pointer-events', 'none', 'important');
        if (slot) slot.classList.add('hp-submitted');
        var card = document.createElement('div');
        card.className = 'hp-success-card';
        card.innerHTML = '<div class="hp-success-check">✓</div>' +
          '<h3 class="hp-success-title">Заявка успешно принята!</h3>' +
          '<p class="hp-success-desc">Мастер уже получил ваш запрос и свяжется с вами в течение 10 минут.</p>' +
          '<div class="hp-success-info-box">' +
            '<div class="hp-success-row"><span class="hp-s-label">Имя:</span><span class="hp-s-val">' + nVal + '</span></div>' +
            '<div class="hp-success-row"><span class="hp-s-label">Телефон:</span><span class="hp-s-val">' + fPhone + '</span></div>' +
            '<div class="hp-success-row"><span class="hp-s-label">Способ связи:</span><span class="hp-s-val">' + methodText + '</span></div>' +
            '<div class="hp-success-row"><span class="hp-s-label">Срез/запрос:</span><span class="hp-s-val">' + selectedCut + '</span></div>' +
          '</div>' +
          '<div class="hp-success-tip">⚡ <b>Статус:</b> Заявка зафиксирована, мастер готовит видео среза. Пожалуйста, ожидайте ответа.</div>';
        slot.appendChild(card);
      }

      bForm.addEventListener('tildaform:aftersend', function() {
        displayBuiltinSuccess();
      });

      var builtinCheckInterval = setInterval(function() {
        var captchaBox = document.getElementById('tildaformcaptchabox');
        if (captchaBox) {
          submitBtn.textContent = 'Подтвердите капчу выше ↑';
        }
      }, 500);

      setTimeout(function() {
        clearInterval(builtinCheckInterval);
        var captchaBox = document.getElementById('tildaformcaptchabox');
        if (!captchaBox) {
          displayBuiltinSuccess();
        }
      }, 3000);
    });
  }

  function hpGetAnalyticsInfo() {
    var isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    var device = isMobile ? '📱 Смартфон' : '💻 ПК (десктоп)';

    var urlParams = new URLSearchParams(window.location.search);
    var utmSource = urlParams.get('utm_source') || '';
    var utmCamp = urlParams.get('utm_campaign') || '';
    var utmTerm = urlParams.get('utm_term') || '';

    var parts = [device];

    if (utmCamp || utmSource) {
      var campLabel = utmCamp;
      if (utmCamp === '707367393') campLabel = 'Поиск (707367393)';
      else if (utmCamp === '707364774') campLabel = 'РСЯ (707364774)';
      parts.push((utmSource ? utmSource + ' ' : '') + campLabel);
    } else {
      parts.push('Прямой переход');
    }

    if (utmTerm) {
      try {
        parts.push('Ключ: ' + decodeURIComponent(utmTerm));
      } catch(e) {
        parts.push('Ключ: ' + utmTerm);
      }
    }

    return parts.join(' • ');
  }

function mountTildaNativeForm() {
    var slot = document.getElementById('hp-tilda-form-slot');
    if (!slot) return;

    // Ищем любой нативный блок формы Тильды на странице (кроме блока нашего скрипта и аккордеона)
    var allForms = document.querySelectorAll('form.js-form-proccess');
    var form = null;
    for (var i = 0; i < allForms.length; i++) {
      var f = allForms[i];
      if (f.id !== 'form546191949' && !slot.contains(f)) {
        form = f;
        break;
      }
    }

    var rec = form ? form.closest('.r') : document.getElementById('rec4673146901');
    if (!form) {
      renderBuiltinLeadForm(slot);
      return;
    }

    if (form.parentElement !== slot) {
      slot.appendChild(form);
    }

    // Completely neutralize rec4673146901 and any t-popup overlays
    if (rec) {
      rec.style.setProperty('display', 'none', 'important');
      rec.style.setProperty('visibility', 'hidden', 'important');
      rec.style.setProperty('pointer-events', 'none', 'important');
      rec.querySelectorAll('.t-popup').forEach(function(p) {
        p.classList.remove('t-popup_show');
        p.style.setProperty('display', 'none', 'important');
        p.style.setProperty('pointer-events', 'none', 'important');
        p.style.setProperty('visibility', 'hidden', 'important');
      });
    }

    // Strip body scroll locks permanently
    document.body.classList.remove('t-body_popupshowed', 't-body_scroll-locked');
    document.documentElement.classList.remove('t-body_popupshowed', 't-body_scroll-locked');

    if (!form) return;

    form.style.setProperty('display', 'block', 'important');
    form.style.setProperty('visibility', 'visible', 'important');
    form.style.setProperty('opacity', '1', 'important');
    form.style.setProperty('position', 'static', 'important');
    form.style.setProperty('transform', 'none', 'important');

    // Добавляем понятный лейбл над полем имени
    var nameInputEl = form.querySelector('input[name="Name"]');
    var nameGroup = nameInputEl ? (nameInputEl.closest('.t-input-group') || nameInputEl.parentElement) : null;
    if (nameGroup && !form.querySelector('#hp-name-label')) {
      var nameLbl = document.createElement('div');
      nameLbl.id = 'hp-name-label';
      nameLbl.className = 'hp-input-label';
      nameLbl.innerHTML = 'Ваше имя <span style="font-size:12px;font-weight:400;color:#b8acc7;">(как к вам обращаться)</span>';
      nameGroup.insertBefore(nameLbl, nameGroup.firstChild);
    }

    var titleGroup = form.querySelector('.t-input-title');
    if (titleGroup) {
      titleGroup.textContent = 'Куда прислать подбор и видео среза:';
      titleGroup.className = 't-input-title hp-input-label';
    }

    // Добавляем лейбл над номером телефона
    var valContainerEl = form.querySelector('.t-contact-method__value-container');
    if (valContainerEl && !form.querySelector('#hp-phone-label')) {
      var phoneLbl = document.createElement('div');
      phoneLbl.id = 'hp-phone-label';
      phoneLbl.className = 'hp-input-label';
      phoneLbl.innerHTML = 'Номер телефона <span style="font-size:12px;font-weight:400;color:#b8acc7;">(для звонка и подбора)</span>';
      valContainerEl.insertBefore(phoneLbl, valContainerEl.firstChild);
    }

    // Добавляем плашку с понятной подсказкой под полем ввода
    if (valContainerEl && !form.querySelector('#hp-contact-hint-box')) {
      var hintBoxEl = document.createElement('div');
      hintBoxEl.id = 'hp-contact-hint-box';
      hintBoxEl.className = 'hp-contact-hint-box';
      hintBoxEl.innerHTML = '📞 <b>Звонок по телефону:</b> Мастер свяжется с вами в течение 10 минут, ответит на все вопросы и бесплатно подберет срез.';
      valContainerEl.appendChild(hintBoxEl);
    }

    // Подсказка безопасности под кнопкой отправки
    var submitWrapEl = form.querySelector('.t-form__submit');
    if (submitWrapEl && !form.querySelector('.hp-form-security-note')) {
      var secNoteEl = document.createElement('div');
      secNoteEl.className = 'hp-form-security-note';
      secNoteEl.innerHTML = '🔒 Ваши данные защищены (152-ФЗ РФ). Консультация и подбор среза бесплатны и ни к чему вас не обязывают.';
      submitWrapEl.appendChild(secNoteEl);
    }

    var subBtn = form.querySelector('.t-btnflex__text, .t-submit');
    if (subBtn) {
      subBtn.textContent = 'Заказать индивидуальный подбор ✦';
    }

    function showCustomError(inputEl, msg) {
      if (!inputEl) return;
      var targetBox = inputEl.classList.contains('t-input-phonemask') ? inputEl.closest('.t-input-phonemask__wrap') : inputEl;
      if (!targetBox) targetBox = inputEl;

      targetBox.style.setProperty('border-color', '#f87171', 'important');
      targetBox.style.setProperty('box-shadow', '0 0 18px rgba(239, 68, 68, 0.45)', 'important');
      inputEl.focus();

      var block = inputEl.closest('.t-input-block') || targetBox.parentElement;
      if (!block) return;

      var existingErr = block.querySelector('.hp-field-error-msg');
      if (!existingErr) {
        existingErr = document.createElement('div');
        existingErr.className = 'hp-field-error-msg';
        block.appendChild(existingErr);
      }
      existingErr.textContent = msg;
      existingErr.style.display = 'block';

      function onInp() {
        targetBox.style.removeProperty('border-color');
        targetBox.style.removeProperty('box-shadow');
        existingErr.style.display = 'none';
        inputEl.removeEventListener('input', onInp);
      }
      inputEl.addEventListener('input', onInp);
    }

    function clearCustomErrors(formEl) {
      formEl.querySelectorAll('.hp-field-error-msg').forEach(function(el) {
        el.style.display = 'none';
      });
      formEl.querySelectorAll('input, .t-input-phonemask__wrap').forEach(function(el) {
        el.style.removeProperty('border-color');
        el.style.removeProperty('box-shadow');
      });
    }

    if (!form.querySelector('input[name="hp_user_website_trap"]')) {
      var trap = document.createElement('input');
      trap.type = 'text';
      trap.name = 'hp_user_website_trap';
      trap.tabIndex = -1;
      trap.autocomplete = 'off';
      trap.setAttribute('aria-hidden', 'true');
      trap.style.cssText = 'position:absolute!important;left:-9999px!important;top:-9999px!important;width:1px!important;height:1px!important;opacity:0!important;pointer-events:none!important;';
      form.appendChild(trap);
    }

    function sanitizeInactiveMessengerInputs(targetForm, currentMethod) {
      if (!targetForm) return;
      var methods = ['phone', 'telegram', 'whatsapp', 'max_messenger'];
      methods.forEach(function(m) {
        var wrap = targetForm.querySelector('.t-contact-method__' + m + '-value');
        if (!wrap) return;
        if (m === currentMethod) {
          wrap.classList.remove('t-contact-method__hidden', 'hp-block-hidden');
          wrap.style.setProperty('display', 'block', 'important');
          wrap.querySelectorAll('input').forEach(function(inp) {
            inp.disabled = false;
            inp.setAttribute('data-tilda-req', '1');
            inp.setAttribute('name', 'messenger-id');
          });
        } else {
          wrap.classList.add('t-contact-method__hidden');
          wrap.style.setProperty('display', 'none', 'important');
          wrap.querySelectorAll('input').forEach(function(inp) {
            inp.removeAttribute('data-tilda-req');
            inp.removeAttribute('required');
            inp.classList.remove('js-tilda-rule');
          });
        }
      });
    }

    // Синхронизация введенного номера между всеми вкладками (Телефон / WhatsApp / Telegram / MAX)
    var allContactInputs = form.querySelectorAll('.t-contact-method__value-container input');
    allContactInputs.forEach(function(inp) {
      if (inp.dataset.hpSyncBound) return;
      inp.dataset.hpSyncBound = 'true';
      inp.addEventListener('input', function() {
        var curVal = inp.value;
        allContactInputs.forEach(function(other) {
          if (other !== inp) other.value = curVal;
        });
      });
    });

    var submitBtnEl = form.querySelector('button[type="submit"], .t-submit');
    if (submitBtnEl && !submitBtnEl.dataset.hpBound) {
      submitBtnEl.dataset.hpBound = 'true';
      submitBtnEl.style.setProperty('pointer-events', 'auto', 'important');
      submitBtnEl.style.setProperty('cursor', 'pointer', 'important');
      submitBtnEl.removeAttribute('disabled');

      submitBtnEl.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // 1. Защита от спам-кликов (дебаунс не блокирует авто-отправку после капчи)
        var captchaInpN = form.querySelector('#js-tildaspec-captcha, input[name="tildaspec-captcha"]');
        var hasCaptchaN = captchaInpN && captchaInpN.value && captchaInpN.value.trim().length > 0;
        var now = Date.now();
        if (!hasCaptchaN && window.hpLastLeadSubmitTime && (now - window.hpLastLeadSubmitTime < 3000)) {
          return false;
        }

        clearCustomErrors(form);

        var nameInp = form.querySelector('input[name="Name"]');
        var nameVal = (nameInp ? nameInp.value : '').trim();
        if (!nameVal) {
          showCustomError(nameInp, 'Пожалуйста, укажите имя');
          return false;
        }

        // 2. УНИВЕРСАЛЬНЫЙ ПОИСК ТЕЛЕФОНА (проверяем ВСЕ инпуты в форме, включая WhatsApp, Telegram, MAX и Телефон)
        var digits = '';
        var telInp = null;
        var candidateInputs = form.querySelectorAll('.t-contact-method__value-container input:not([type="hidden"]), input[type="tel"], input[name="phone"], input[name="messenger-id"]');

        for (var i = 0; i < candidateInputs.length; i++) {
          var cInp = candidateInputs[i];
          var d = (cInp.value || '').replace(/\D/g, '');
          if (d.length >= 10) {
            digits = d;
            telInp = cInp;
            break;
          }
        }

        // Если ровно 10 цифр не найдено, берем инпут с любыми цифрами для показа ошибки
        if (!digits) {
          for (var i = 0; i < candidateInputs.length; i++) {
            var cInp = candidateInputs[i];
            var d = (cInp.value || '').replace(/\D/g, '');
            if (d.length > 0) {
              digits = d;
              telInp = cInp;
              break;
            }
          }
        }

        // Если совсем ничего, берем видимый инпут
        if (!telInp) {
          for (var i = 0; i < candidateInputs.length; i++) {
            if (candidateInputs[i].offsetParent !== null) {
              telInp = candidateInputs[i];
              break;
            }
          }
          if (!telInp && candidateInputs.length > 0) telInp = candidateInputs[0];
        }

        if (!digits || digits.length < 10) {
          showCustomError(telInp, 'Пожалуйста, укажите номер телефона');
          return false;
        }

        var trapInp = form.querySelector('input[name="hp_user_website_trap"]');
        if (trapInp && trapInp.value) {
          return false;
        }

        // Фиксируем отправку
        window.hpLastLeadSubmitTime = now;
        submitBtnEl.disabled = true;
        submitBtnEl.style.setProperty('pointer-events', 'none', 'important');
        submitBtnEl.style.setProperty('opacity', '0.7', 'important');
        submitBtnEl.textContent = 'Отправка заявки...';

        var cbInp = form.querySelector('input[name="Checkbox"]');
        if (cbInp) cbInp.checked = true;

        var prefixCode = (typeof hpCurrentCountry !== 'undefined' && hpCurrentCountry.code) ? hpCurrentCountry.code : '+7';
        var cleanPhone = prefixCode + digits.slice(-10);

        // Заполняем абсолютно все скрытые и открытые поля телефона единым номером
        candidateInputs.forEach(function(inp) {
          inp.value = cleanPhone;
          inp.disabled = false;
        });

        var activeMethodEl = form.querySelector('.t-contact-method__type.hp-active, .t-contact-method__type.t-contact-method__type_active');
        var methodType = activeMethodEl ? (activeMethodEl.getAttribute('data-method-type') || activeMethodEl.getAttribute('data-method')) : 'phone';

        // Активируем радио-кнопку нужного мессенджера для валидатора Тильды
        var radios = form.querySelectorAll('input[name="messenger-type"]');
        radios.forEach(function(r) {
          r.checked = (r.value === methodType);
        });

        // Заполняем абсолютно все инпуты телефона
        var allInputs = form.querySelectorAll('input[name="messenger-id"], input[name="phone"], input[type="tel"]');
        allInputs.forEach(function(inp) {
          inp.value = cleanPhone;
        });

        // Снимаем data-tilda-req со скрытых инпутов других мессенджеров
        var hiddenMethodBlocks = form.querySelectorAll('.t-contact-method__telegram-value, .t-contact-method__whatsapp-value, .t-contact-method__max_messenger-value');
        hiddenMethodBlocks.forEach(function(b) {
          b.querySelectorAll('input').forEach(function(inp) {
            inp.removeAttribute('data-tilda-req');
            inp.removeAttribute('required');
            inp.classList.remove('js-tilda-rule');
          });
        });
        var methodLabels = {
          phone: '📞 Звонок по телефону',
          telegram: '✈️ Telegram',
          whatsapp: '💬 WhatsApp',
          max_messenger: '🟣 MAX'
        };
        var methodText = methodLabels[methodType] || methodType;

        var cutParamEl = document.getElementById('hp-selected-cut-text');
        var selectedCut = (cutParamEl && cutParamEl.textContent.trim()) ? cutParamEl.textContent.trim() : (chosenCutParam || 'Общий подбор (срез не указан)');

        var lastDigits = digits.slice(-10);
        var pCode = (typeof hpCurrentCountry !== 'undefined' && hpCurrentCountry.code) ? hpCurrentCountry.code : '+7';
        var fPhone = pCode + ' (' + lastDigits.substring(0, 3) + ') ' + lastDigits.substring(3, 6) + '-' + lastDigits.substring(6, 8) + '-' + lastDigits.substring(8, 10);

        var searchParams = new URLSearchParams(window.location.search);
        var utmSource = searchParams.get('utm_source') || 'Прямой / Органика';
        var utmCampaign = searchParams.get('utm_campaign') || '-';
        var utmContent = searchParams.get('utm_content') || '-';
        var utmTerm = searchParams.get('utm_term') || '-';
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var deviceText = isMobile ? '📱 Мобильный' : '💻 Десктоп';

        var rawDigits = digits.replace(/\D/g, '');
        var intDigits = (rawDigits.length === 10 ? '7' + rawDigits : (rawDigits.length === 11 && rawDigits[0] === '8' ? '7' + rawDigits.substring(1) : rawDigits));
        var clientName = (nameVal || 'Клиент').trim();

        var waLink = 'https://wa.me/' + intDigits;
        
        var tgMsg = '🔥 <b>Новая заявка с сайта!</b>\n\n' +
                    '👤 <b>Имя:</b> ' + clientName + '\n' +
                    '📞 <b>Телефон:</b> <code>' + fPhone + '</code>\n' +
                    '💬 <b>Способ связи:</b> ' + methodText + '\n' +
                    '✂️ <b>Срез/запрос:</b> ' + selectedCut + '\n\n' +
                    '⚡ <b>Связь с клиентом в 1 клик:</b>\n' +
                    '• WhatsApp: ' + waLink + '\n\n' +
                    '📊 <b>Трафик и маркетинг:</b>\n' +
                    '• Источник: <code>' + utmSource + '</code>\n' +
                    '• Кампания: <code>' + utmCampaign + '</code>\n' +
                    '• Ключ: <code>' + (utmTerm !== '-' ? utmTerm : utmContent) + '</code>\n' +
                    '• Устройство: ' + deviceText + '\n' +
                    '• Страница: ' + window.location.href.split('?')[0];

        // 1. Прямая отправка в бот отключена (уведомления идут строго через Тильду без блокировок РКН)
        try {
          var leadRecord = { time: new Date().toISOString(), name: clientName, phone: fPhone, method: methodText, cut: selectedCut, utm: utmSource + ' | ' + utmCampaign };
          var existingLeads = JSON.parse(localStorage.getItem('hp_leads_archive') || '[]');
          existingLeads.push(leadRecord);
          localStorage.setItem('hp_leads_archive', JSON.stringify(existingLeads));
        } catch(e) {}

        // 2. Отправка через нативный механизм Tilda и официальный шлюз forms.tildacdn.com
        try {
          var allRecords = document.getElementById('allrecords');
          var formsKey = (allRecords && allRecords.getAttribute('data-tilda-formskey')) || 'a8a1a8151b151a0221d568e5a5500437';


          var cutInp = form.querySelector('input[name="cut"]');
          if (!cutInp) {
            cutInp = document.createElement('input');
            cutInp.type = 'hidden';
            cutInp.name = 'cut';
            form.appendChild(cutInp);
          }
          cutInp.value = selectedCut;

          if (nameInp) nameInp.value = clientName;
          // 2A. Вызываем официальный метод Tilda для гарантированной обработки
          if (window.tildaForm && typeof window.tildaForm.send === 'function') {
            try {
              window.tildaForm.send(form, submitBtnEl, 2, formsKey);
            } catch(tErr) {}
          }

          // 2B. Прямой резервный XHR POST со всеми 5 сервисами и привязкой к rec4673146901
          var servicesList = [
            'b50f30259e15e3d8d5212d867a1d4954',
            'f84b098f0cddc52c587a2c2f5e0fadfc',
            '9f2f90b847bfb45b6924b750bb155691',
            '3de76a792e289629ff456561531ed0ca',
            '079d3725ab062a821f281c7010b7677f'
          ];

          var p = new URLSearchParams();
          servicesList.forEach(function(s) { p.append('formservices[]', s); });
          p.append('formid', 'form4673146901');
          p.append('tildaspec-formid', '4673146901');
          p.append('tildaspec-formname', 'Запись на подбор волос');
          p.append('tildaspec-pageid', '297318909');
          p.append('tildaspec-projectid', '5500437');
          if (nameInp) nameInp.value = clientName;
          p.append('Name', clientName);
          p.append('Phone', fPhone);
          p.append('messenger-type', methodType);
          p.append('messenger-id', fPhone);
          p.append('cut', selectedCut);
          p.append('Textarea', '✂️ Срез: ' + selectedCut + '\n💬 Способ связи: ' + methodText + '\nWhatsApp: ' + waLink + '\n📊 Источник: ' + utmSource + ' | ' + utmCampaign + '\n📱 Устройство: ' + deviceText);
          p.append('comment', hpGetAnalyticsInfo());
          p.append('Checkbox', 'yes');
          var capInp = form.querySelector('#js-tildaspec-captcha, input[name="tildaspec-captcha"]');
          if (capInp && capInp.value) {
            p.append('tildaspec-captcha', capInp.value);
          }

          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://forms.tildacdn.com/procces/', true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
          xhr.send(p.toString());
        } catch(e) {}

        // 3. Отправка целей в Яндекс Метрику для Директа
        if (typeof window.sendLeadConversionGoals === 'function') {
          window.sendLeadConversionGoals();
        }

        // 4. Карточка подтверждения с поддержкой Tilda Captcha (без удаления формы из DOM)
        var slot = document.getElementById('hp-tilda-form-slot');
        function displayNativeSuccess() {
          if (slot && slot.querySelector('.hp-success-card')) return;
          form.style.setProperty('display', 'none', 'important');
          form.style.setProperty('visibility', 'hidden', 'important');
          form.style.setProperty('height', '0', 'important');
          form.style.setProperty('overflow', 'hidden', 'important');
          form.style.setProperty('pointer-events', 'none', 'important');
          if (slot) slot.classList.add('hp-submitted');
          var card = document.createElement('div');
          card.className = 'hp-success-card';
          card.innerHTML = '<div class="hp-success-check">✓</div>' +
            '<h3 class="hp-success-title">Заявка успешно принята!</h3>' +
            '<p class="hp-success-desc">Мастер уже получил ваш запрос и свяжется с вами в течение 10 минут.</p>' +
            '<div class="hp-success-info-box">' +
              '<div class="hp-success-row"><span class="hp-s-label">Имя:</span><span class="hp-s-val">' + (nameVal || 'Клиент') + '</span></div>' +
              '<div class="hp-success-row"><span class="hp-s-label">Телефон:</span><span class="hp-s-val">' + fPhone + '</span></div>' +
              '<div class="hp-success-row"><span class="hp-s-label">Способ связи:</span><span class="hp-s-val">' + methodText + '</span></div>' +
              '<div class="hp-success-row"><span class="hp-s-label">Срез/запрос:</span><span class="hp-s-val">' + selectedCut + '</span></div>' +
            '</div>' +
            '<div class="hp-success-tip">⚡ <b>Статус:</b> Заявка зафиксирована, мастер готовит видео среза. Пожалуйста, ожидайте ответа.</div>';
          if (slot) slot.appendChild(card);
          else form.parentElement.appendChild(card);
        }

        form.addEventListener('tildaform:aftersend', function() {
          displayNativeSuccess();
        });

        var nativeCheckInterval = setInterval(function() {
          var captchaBox = document.getElementById('tildaformcaptchabox');
          if (captchaBox) {
            submitBtnEl.removeAttribute('disabled');
            submitBtnEl.disabled = false;
            submitBtnEl.style.setProperty('pointer-events', 'auto', 'important');
            submitBtnEl.style.setProperty('opacity', '1', 'important');
            submitBtnEl.textContent = 'Подтвердите капчу выше ↑';
          }
        }, 500);

        setTimeout(function() {
          clearInterval(nativeCheckInterval);
          var captchaBox = document.getElementById('tildaformcaptchabox');
          if (!captchaBox) {
            displayNativeSuccess();
          }
        }, 3000);
      });
    }

    var nameInp = form.querySelector('input[name="Name"]');
    if (nameInp) {
      nameInp.placeholder = 'Например, Анна';
      nameInp.setAttribute('placeholder', 'Например, Анна');
      nameInp.setAttribute('autocomplete', 'name');
    }

    function initPhoneMasks() {
      if (typeof window.t_form_phonemask__mulitple__load === 'function') {
        var maskInputs = rec.querySelectorAll('[data-phonemask-lid="1770920801992"]');
        if (maskInputs.length) {
          try {
            window.t_form_phonemask__mulitple__load(maskInputs);
          } catch (e) {}
        }
      }
    }

    initPhoneMasks();
    setTimeout(initPhoneMasks, 250);
    setTimeout(initPhoneMasks, 600);
    setTimeout(initPhoneMasks, 1200);

    setupContactMethodSwitcher(form);
    var pInpEl = form.querySelector('.t-contact-method__phone-value input[type="tel"]') || form.querySelector('input[type="tel"]');
    if (pInpEl) attachCleanPhoneMask(pInpEl);

    function installBulletproofTildaValidator() {
      var bulletproofValidator = function(formTarget) {
        var f = (typeof t_forms__getElement === 'function') ? t_forms__getElement(formTarget) : (formTarget || form);
        if (!f) return [];
        var n = f.querySelector('input[name="Name"]');
        var t = f.querySelector('.t-contact-method__phone-value input[type="tel"]') || f.querySelector('input[type="tel"]');
        var resInp = f.querySelector('.t-contact-method__phone-value .js-phonemask-result');
        var nVal = (n ? n.value : '').trim();
        var rawT = (t ? t.value : '') || (resInp ? resInp.value : '');
        var tVal = rawT.replace(/\D/g, '');

        var errs = [];
        if (!nVal) {
          errs.push({ obj: n, type: ['req'] });
        }
        if (!tVal || tVal.length < 10) {
          errs.push({ obj: t, type: ['req'] });
        }

        if (errs.length === 0) {
          var fullNum = '+7' + tVal.slice(-10);
          if (t) t.value = fullNum;
          if (resInp) resInp.value = fullNum;
          f.querySelectorAll('input[type="tel"], input[name*="phone" i], input[name*="Phone" i], input[name="messenger-id"], .js-phonemask-result, input[name="tildaspec-phone-part[]"]').forEach(function(inp) {
            inp.value = fullNum;
            inp.disabled = false;
          });
          var cBox = f.querySelector('input[name="Checkbox"]');
          if (cBox) cBox.checked = true;
          f.querySelectorAll('.t-input-error, .js-errorbox-all, .hp-field-error-msg').forEach(function(el) {
            el.style.display = 'none';
            el.innerHTML = '';
          });
          return [];
        }
        return errs;
      };

      if (!window.tildaForm) window.tildaForm = {};
      window.tildaForm.validate = bulletproofValidator;
      window.validateForm = bulletproofValidator;
    }

    
    function killTildaBodyLocks() {
      if (window.tildaForm) {
        window.tildaForm.showCaptcha = function() {};
      }
      document.querySelectorAll('.t-popup, .t-popup_show').forEach(function(p) {
        if (!p.closest('#hp-tilda-form-slot')) {
          p.classList.remove('t-popup_show');
          p.style.setProperty('display', 'none', 'important');
        }
      });
      if (document.body.classList.contains('t-body_popupshowed') || document.body.classList.contains('t-body_scroll-locked')) {
        document.body.classList.remove('t-body_popupshowed', 't-body_scroll-locked');
      }
      if (document.documentElement.classList.contains('t-body_popupshowed') || document.documentElement.classList.contains('t-body_scroll-locked')) {
        document.documentElement.classList.remove('t-body_popupshowed', 't-body_scroll-locked');
      }
    }
    killTildaBodyLocks();
    // body locks stripped on init
installBulletproofTildaValidator();
    // validator set on init

    // Автоматическая очистка ошибок Тильды при вводе номера
    var visiblePhoneInput = form.querySelector('.t-contact-method__phone-value input[type="tel"]');
    if (visiblePhoneInput) {
      visiblePhoneInput.addEventListener('input', function() {
        var digits = visiblePhoneInput.value.replace(/\D/g, '');
        if (digits.length >= 10) {
          var errSpan = form.querySelector('#error_1770920801992');
          if (errSpan) {
            errSpan.style.display = 'none';
            errSpan.innerHTML = '';
          }
          var errBox = form.querySelector('.js-errorbox-all');
          if (errBox) {
            errBox.style.display = 'none';
          }
          var blk = visiblePhoneInput.closest('.t-input-block');
          if (blk) blk.classList.remove('t-input-block_error');
        }
      });
    }

    // Надежная обработка чекбокса согласия
    var consentCb = form.querySelector('input[name="Checkbox"]');
    if (consentCb) {
      consentCb.checked = true; // По умолчанию всегда отмечен!
      var cbGroup = consentCb.closest('.t-input-group_cb');
      if (cbGroup) {
        cbGroup.addEventListener('click', function(ev) {
          var cbErr = cbGroup.querySelector('#error_1748433871038');
          if (cbErr && consentCb.checked) {
            cbErr.style.display = 'none';
            cbErr.innerHTML = '';
          }
        });
      }
    }

    // Обертка валидатора Тильды: перед валидацией Тильды всегда снимаем data-tilda-req со скрытых полей!
    if (window.tildaForm && typeof window.tildaForm.validate === 'function' && !window.tildaForm._hpSanitized) {
      var origTildaValidate = window.tildaForm.validate;
      window.tildaForm.validate = function(targetForm) {
        try {
          sanitizeInactiveMessengerInputs(typeof t_forms__getElement === 'function' ? t_forms__getElement(targetForm) : targetForm);
        } catch(ex) {}
        return origTildaValidate.apply(this, arguments);
      };
      window.tildaForm._hpSanitized = true;
    }


    if (!form.dataset.hpMounted) {
      form.dataset.hpMounted = 'true';

      function injectCutDetails() {
        if (!chosenCutParam) return;
        // НЕ меняем nameInp, чтобы не триггерить валидатор Тильды на спецсимволы.
        // Записываем срез в tildaspec-formname — бот Telegram и Тильда выводят это как Form Name!
        var formNameInp = form.querySelector('input[name="tildaspec-formname"]');
        if (formNameInp) {
          if (formNameInp.value.indexOf(chosenCutParam) === -1) {
            formNameInp.value = 'Заявка [' + chosenCutParam + ']';
          }
        } else {
          var hiddenName = document.createElement('input');
          hiddenName.type = 'hidden';
          hiddenName.name = 'tildaspec-formname';
          hiddenName.value = 'Заявка [' + chosenCutParam + ']';
          form.appendChild(hiddenName);
        }

        var commentInp = form.querySelector('input[name="comment"]');
        if (!commentInp) {
          commentInp = document.createElement('input');
          commentInp.type = 'hidden';
          commentInp.name = 'comment';
          form.appendChild(commentInp);
        }
        commentInp.value = hpGetAnalyticsInfo();
      }

      form.addEventListener('submit', function() {
        injectCutDetails();
        window.sendLeadConversionGoals();
      });

      var sBtn = form.querySelector('button[type="submit"]') || form.querySelector('.t-submit');
      if (sBtn) {
        sBtn.addEventListener('click', function() {
          injectCutDetails();
        });
      }
    }
  }



  function mount() {

    var tildaCookie = document.getElementById('rec1930057121') || document.querySelector('.t972');

    if (tildaCookie) tildaCookie.remove();

    var tFooter = document.getElementById('t-footer');

    if (tFooter) tFooter.remove();



    var existingApp = document.getElementById('hp-app');

    if (existingApp) existingApp.remove();



    var temp = document.createElement('div');

    temp.innerHTML = html;

    var appNode = temp.firstElementChild;

    var modalNode = temp.querySelector('#hp-policy-modal');

    var cookieNode = temp.querySelector('#hp-cookie-banner');



    document.body.prepend(appNode);

    if (modalNode) document.body.appendChild(modalNode);

    if (cookieNode) document.body.appendChild(cookieNode);



    // Навигация по секциям

    document.querySelectorAll('.hp-nav-link').forEach(function(link) {

      link.addEventListener('click', function(e) {

        var href = link.getAttribute('href');

        if (href && href.startsWith('#')) {

          e.preventDefault();

          var targetId = href.substring(1);

          scrollToSection(targetId);

        }

      });

    });



    // Фильтры: Тип волос

    var typeBtns = document.querySelectorAll('#filter-type-group .hp-filter-pill');

    typeBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        typeBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedType = btn.getAttribute('data-type');
        visibleCutsCount = 3;
        renderCatalogCards();



      });

    });



    // Фильтры: Длина

    var lenBtns = document.querySelectorAll('#filter-length-group .hp-filter-pill');

    lenBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        lenBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedLen = btn.getAttribute('data-len');
        visibleCutsCount = 3;
        renderCatalogCards();

      });

    });



    // Фильтры: Оттенок

    var shadeBtns = document.querySelectorAll('#filter-shade-group .hp-filter-pill');

    shadeBtns.forEach(function(btn) {

      btn.addEventListener('click', function() {

        shadeBtns.forEach(function(b) { b.classList.remove('active'); });

        btn.classList.add('active');

        selectedShade = btn.getAttribute('data-shade');
        visibleCutsCount = 3;
        renderCatalogCards();

      });

    });



    // Инициализация каталога

    renderCatalogCards();

    var moreBtn = document.getElementById('hp-catalog-more-btn');
    if (moreBtn && !moreBtn.dataset.bound) {
      moreBtn.dataset.bound = 'true';
      moreBtn.addEventListener('click', function() {
        visibleCutsCount += 3;
        renderCatalogCards();
      });
    }

    // Автопрокрутка к якорю из URL (например, из быстрых ссылок Яндекс Директ: #catalog, #contacts, #why-us, #selection)
    if (window.location.hash) {
      var hashTarget = window.location.hash.substring(1);
      setTimeout(function() {
        scrollToSection(hashTarget);
      }, 350);
    }



    // Квиз

    function setupQuiz(boxId) {

      var box = document.getElementById(boxId);

      if (!box) return;

      var opts = box.querySelectorAll('.hp-quiz-opt');

      opts.forEach(function(o) {

        o.addEventListener('click', function() {

          opts.forEach(function(x) { x.classList.remove('selected'); });

          o.classList.add('selected');

        });

      });

    }

    setupQuiz('quiz-length');

    setupQuiz('quiz-type');



    var quizBtn = document.querySelector('#selection .hp-btn-main');

    if (quizBtn) {

      quizBtn.addEventListener('click', function() {

        var lenEl = document.querySelector('#quiz-length .hp-quiz-opt.selected');

        var typeEl = document.querySelector('#quiz-type .hp-quiz-opt.selected');

        var lenVal = lenEl ? lenEl.getAttribute('data-val') : '55-65 см';

        var typeVal = typeEl ? typeEl.getAttribute('data-val') : 'Детский шелк';

        setSelectedCutBadge(lenVal + ' • ' + typeVal, true);

        scrollToSection('lead-box');

      });

    }



    // Привязка кликабельных чипсов в самой форме
    function setupFormParamsPicker() {
      var lenChips = document.querySelectorAll('#hp-fp-length .hp-fp-chip');
      var typeChips = document.querySelectorAll('#hp-fp-type .hp-fp-chip');

      function updateFromChips() {
        var actLen = document.querySelector('#hp-fp-length .hp-fp-chip.active');
        var actType = document.querySelector('#hp-fp-type .hp-fp-chip.active');
        var parts = [];
        if (actLen) parts.push(actLen.getAttribute('data-val'));
        if (actType) parts.push(actType.getAttribute('data-val'));
        if (parts.length > 0) {
          setSelectedCutBadge(parts.join(' • '), true);
        } else {
          setSelectedCutBadge('', false);
        }
      }

      lenChips.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var wasActive = btn.classList.contains('active');
          lenChips.forEach(function(c) { c.classList.remove('active'); });
          if (!wasActive) btn.classList.add('active');
          updateFromChips();
        });
      });

      typeChips.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          var wasActive = btn.classList.contains('active');
          typeChips.forEach(function(c) { c.classList.remove('active'); });
          if (!wasActive) btn.classList.add('active');
          updateFromChips();
        });
      });
    }
    setupFormParamsPicker();

    
    mountTildaNativeForm();

    setTimeout(mountTildaNativeForm, 500);

    setTimeout(mountTildaNativeForm, 1500);

    checkCookieBannerInit();

  }



  // Кнопка «Наверх»

  if (!document.getElementById('hp-btn-top')) {

    var topBtn = document.createElement('button');

    topBtn.id = 'hp-btn-top';

    topBtn.title = 'Наверх';

    topBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';

    document.body.appendChild(topBtn);

    window.addEventListener('scroll', function() {

      topBtn.style.display = window.scrollY > 350 ? 'flex' : 'none';

    });

    topBtn.addEventListener('click', function() {

      window.scrollTo({ top: 0, behavior: 'smooth' });

    });

  }



  // Плавающий виджет заявки

  if (!document.getElementById('hp-widget-lead')) {

    var leadWidget = document.createElement('div');

    leadWidget.id = 'hp-widget-lead';

    leadWidget.innerHTML = '<button type="button" class="hp-widget-pulse-btn hp-open-form-btn"><div class="hp-widget-btn-content"><span class="hp-widget-btn-main">✦ Заказать подбор среза</span><span class="hp-widget-btn-sub">🚗 Шоурум Арбат • 📦 Доставка СДЭК по РФ</span></div></button>';

    document.body.appendChild(leadWidget);

    setupActionButtons();

    function updateLeadWidgetVisibility() {
      if (!leadWidget) return;
      var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var leadSec = document.getElementById('lead-box');

      // Показываем плавающую кнопку ТОЛЬКО после ухода с первого экрана (проскроллили > 400px),
      // чтобы на первом экране на смартфонах и ПК не было задвоения кнопок!
      var isPastHero = scrollY > 400;

      // Скрываем плавающую кнопку, когда пользователь доскроллил до самой формы (#lead-box)
      var isInLeadBox = false;
      if (leadSec) {
        var rect = leadSec.getBoundingClientRect();
        isInLeadBox = (rect.top < window.innerHeight && rect.bottom > 80);
      }

      if (isPastHero && !isInLeadBox) {
        leadWidget.style.opacity = '1';
        leadWidget.style.pointerEvents = 'auto';
        leadWidget.style.transform = 'translateY(0)';
      } else {
        leadWidget.style.opacity = '0';
        leadWidget.style.pointerEvents = 'none';
        leadWidget.style.transform = 'translateY(20px)';
      }
    }

    window.addEventListener('scroll', updateLeadWidgetVisibility, { passive: true });
    updateLeadWidgetVisibility();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', mount);

  } else {

    mount();

  }

})();

