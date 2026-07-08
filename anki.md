---
layout: page
title: Anki
permalink: /anki/
---

Here are some of the decks I made on Anki while studying Computer Science at university. I translated all the flashcards in English too, so there are links for both the Italian and English versions.

{: .box-note}
<span class="material-symbols-outlined">info</span> **Note:**<br>
More decks and add-ons on my <a href="https://ankiweb.net/shared/by-author/2070876889" target="_blank" rel="noopener">AnkiWeb author page</a>.<br>
Card collages made with [PicPitch Collage 🖼️](https://sammed05.github.io/picpitch-collage/) ([code](https://github.com/SamMed05/picpitch-collage)).<br>
Read how I create these decks on my <a href="https://sammed05.github.io/sm_blog/2025/12/10/how-i-make-anki-decks" target="_blank">dedicated post</a>.

{: .box-error}
<span class="material-symbols-outlined">volunteer_activism</span> **Support**<br>If you find these decks useful, please leave a rating! I spent several days creating them, and if you feel generous and want to support my work, encouraging me to create more high-quality decks, you can freely support me [here](https://sammed05.github.io/support/).



<!-- markdownlint-disable MD033 -->
<style>
.anki-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.9rem;align-items:stretch}
.anki-card{display:flex;flex-direction:column;height:100%;background:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.02));border:1px solid rgba(0,0,0,.08);border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.07);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
.anki-card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,0,0,.12);border-color:rgba(0,0,0,.14)}
.anki-media{position:relative;overflow:hidden;aspect-ratio:16/9;background:#f4f4f4;cursor:zoom-in}
.anki-media img{width:100%;height:100%;object-fit:cover;transform:scale(1.45);transition:transform .28s ease;display:block;image-rendering:auto;will-change:transform}
.anki-card:hover .anki-media img{transform:scale(1.62)}

/* Zoom modal */
.anki-zoom-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.92);z-index:9999;display:none;align-items:center;justify-content:center;cursor:zoom-out;animation:fadeIn .2s ease}
.anki-zoom-overlay.active{display:flex}
.anki-zoom-overlay img{max-width:90%;max-height:90%;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.5);border-radius:8px}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.anki-content{flex:1;display:flex;flex-direction:column;padding:12px 14px 14px}
.anki-title{font-weight:750;margin:0 0 6px 0;font-size:1.15rem;line-height:1.15;letter-spacing:-.02em}
.anki-desc{margin:0 0 14px 0;font-size:.96rem;line-height:1.5}
.anki-desc > p{margin:0}
.anki-actions{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:.75rem;}
.anki-actions__left{display:flex;align-items:center;justify-content:flex-start;min-height:2.6rem}
.anki-actions__right{display:flex;gap:.45rem;flex-wrap:nowrap;justify-content:flex-end;white-space:nowrap}
.anki-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.46rem .72rem !important;border-radius:999px;border:1px solid rgba(0,0,0,.12);text-decoration:none;color:inherit;background:rgba(0,0,0,.04);font-size:.9rem;line-height:1.1;white-space:nowrap}
.anki-btn:hover{background:rgba(0,0,0,.08)}
.anki-badge{font-size:.82rem;opacity:.9}
.anki-btn .label{font-weight:700;letter-spacing:.02em;text-transform:uppercase}
.anki-btn .emoji{font-size:1.05rem;line-height:1}
.anki-textlink{display:inline-block;background:none;color:#6b7280;font-size:1rem;line-height:1;text-decoration:underline;cursor:pointer;text-align:left;white-space:nowrap}
.anki-textlink:hover{text-decoration:underline;color:#4b5563}

/* Language tints */
.anki-btn.lang-it{background:rgba(16,160,0,.08);border-color:rgba(16,160,0,.18)}
.anki-btn.lang-it:hover{background:rgba(16,160,0,.16)}
.anki-btn.lang-en{background:rgba(0,96,255,.08);border-color:rgba(0,96,255,.18)}
.anki-btn.lang-en:hover{background:rgba(0,96,255,.16)}
.anki-empty{opacity:.6}
.anki-author{margin-top:1rem;text-align:center}

/* Modal Structures */
.anki-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;padding:1rem;z-index:10000}
.anki-modal.active{display:flex}
.anki-modal__backdrop{position:absolute;inset:0;background:rgba(0,0,0,.76)}

/* --- LIGHT THEME DEFAULT STYLES --- */
.anki-modal__dialog{position:relative;z-index:1;width:min(820px,100%);max-height:min(86vh,920px);display:flex;flex-direction:column;overflow:hidden;background:#fff !important;color:#1f2328 !important;border:1px solid rgba(0,0,0,.14);border-radius:20px;box-shadow:0 26px 80px rgba(0,0,0,.35)}
.anki-modal__hero{position:relative;isolation:isolate;min-height:250px;padding:1.1rem 1.15rem 1.2rem;overflow:hidden;background:#dfe6ee;color:#fff}
.anki-modal__hero::before{content:"";position:absolute;inset:0;background-image:var(--anki-modal-image);background-size:cover;background-position:center;filter:grayscale(.1) saturate(.9) brightness(.82);transform:scale(1.06);z-index:-2}
.anki-modal__hero::after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,18,28,.18) 0%,rgba(10,18,28,.06) 65%,#fff 100%);z-index:-1}
.anki-modal__eyebrow{margin:0 0 .35rem 0;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;opacity:.8}
.anki-modal__title{margin:0;font-size:1.7rem;line-height:1.12;letter-spacing:-.03em;max-width:16ch;text-shadow: 0 2px 4px rgba(255, 255, 255, 0.62);}
.anki-modal__meta{margin:.45rem 0 0 0;opacity:.88}
.anki-modal__scroll{min-height:0;overflow:auto;scrollbar-gutter:stable both-edges;padding:1rem 1.15rem 1.25rem}
.anki-modal__tabs{display:flex;gap:.45rem;flex-wrap:wrap;margin:0 0 .8rem 0}
.anki-modal__tab{border:1px solid rgba(0,0,0,.14);background:rgba(0, 0, 0, 0.05);color: #4b5563 !important;border-radius:999px;padding:.42rem .7rem;cursor:pointer;font:inherit}
.anki-modal__tab.active{background:rgba(0,0,0,.1);font-weight:700;color:#374151}
.anki-modal__downloads{display:flex;gap:.45rem;flex-wrap:wrap;margin:0 0 1rem 0}
.anki-modal__download{display:inline-flex;align-items:center;gap:.35rem;padding:.46rem .72rem !important;border-radius:999px;border:1px solid rgba(0,0,0,.12);text-decoration:none;color:inherit;background:rgba(0,0,0,.04);font-size:.9rem;line-height:1.1;white-space:nowrap;font-weight:600}
.anki-modal__download:hover{background:rgba(0,0,0,.08)}
.anki-modal__download.lang-it{background:rgba(16,160,0,.08);border-color:rgba(16,160,0,.18)}
.anki-modal__download.lang-it:hover{background:rgba(16,160,0,.16)}
.anki-modal__download.lang-en{background:rgba(0,96,255,.08);border-color:rgba(0,96,255,.18)}
.anki-modal__download.lang-en:hover{background:rgba(0,96,255,.16)}
.anki-modal__body{font-size:1rem;line-height:1.68;}
.anki-modal__body, .anki-modal__body h1, .anki-modal__body h2, .anki-modal__body h3, .anki-modal__body h4, .anki-modal__body p, .anki-modal__body li, .anki-modal__body blockquote, .anki-modal__body pre, .anki-modal__body code {color:#1f2328 !important}
.anki-modal__body a{color:#0b69d0}
.anki-modal__body pre{overflow:auto;padding:1rem 1rem 1rem 1.45rem;border-radius:12px;background:rgba(0,0,0,.06)}
.anki-modal__body code{font-size:.94em}
.anki-modal__body p:first-child{margin-top:0}
.anki-modal__empty{opacity:.7;font-style:italic}
.anki-modal__body ul,.anki-modal__body ol{padding-left:1.6rem;margin-left:0}
.anki-modal__body blockquote{padding-left:1rem;border-left:3px solid rgba(0,0,0,.14)}
body.anki-modal-open{overflow:hidden}
@media (max-width:800px){.anki-grid{grid-template-columns:1fr}}

/* --- MANUALLY TOGGLED DARK THEME --- */
html[data-theme="dark"] .anki-card{background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.04));border-color:rgba(255,255,255,.12)}
html[data-theme="dark"] .anki-media{background:rgba(255,255,255,.07)}
html[data-theme="dark"] .anki-btn{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.15)}
html[data-theme="dark"] .anki-btn:hover{background:rgba(255,255,255,.12)}
html[data-theme="dark"] .anki-btn.lang-it{background:rgba(60,200,60,.14);border-color:rgba(60,200,60,.28)}
html[data-theme="dark"] .anki-btn.lang-it:hover{background:rgba(60,200,60,.24)}
html[data-theme="dark"] .anki-btn.lang-en{background:rgba(80,140,255,.14);border-color:rgba(80,140,255,.28)}
html[data-theme="dark"] .anki-btn.lang-en:hover{background:rgba(80,140,255,.24)}
html[data-theme="dark"] .anki-modal__dialog{background:#121212 !important;color:#f5f5f5 !important;border-color:rgba(255,255,255,.12)}
html[data-theme="dark"] .anki-modal__hero::after{background:linear-gradient(to bottom,rgba(10,18,28,.18) 0%,rgba(10,18,28,.06) 65(),#121212 100%)}
html[data-theme="dark"] .anki-modal__hero{color:#fff}
html[data-theme="dark"] .anki-modal__title {text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8)}
html[data-theme="dark"] .anki-modal__tabs{color:#f5f5f5}
html[data-theme="dark"] .anki-modal__tab, html[data-theme="dark"] .anki-modal__download{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.14);color:#d7dde6}
html[data-theme="dark"] .anki-modal__tab.active, html[data-theme="dark"] .anki-modal__tab:hover, html[data-theme="dark"] .anki-modal__download:hover{background:rgba(255, 255, 255, 0.18);color:#d1d1d1!important}
html[data-theme="dark"] .anki-modal__body, html[data-theme="dark"] .anki-modal__body h1, html[data-theme="dark"] .anki-modal__body h2, html[data-theme="dark"] .anki-modal__body h3, html[data-theme="dark"] .anki-modal__body h4, html[data-theme="dark"] .anki-modal__body p, html[data-theme="dark"] .anki-modal__body li, html[data-theme="dark"] .anki-modal__body blockquote, html[data-theme="dark"] .anki-modal__body pre, html[data-theme="dark"] .anki-modal__body code{color:#f5f5f5 !important}
html[data-theme="dark"] .anki-modal__body a{color:#8ab4f8}
html[data-theme="dark"] .anki-modal__body pre{background:rgba(255,255,255,.08)}
html[data-theme="dark"] .anki-modal__body blockquote{border-left-color:rgba(255,255,255,.22)}
</style>

{% assign decks = site.data.anki_decks %}
{% if decks and decks.size > 0 %}
<!-- Zoom overlay -->
<div class="anki-zoom-overlay" id="ankiZoomOverlay">
  <img id="ankiZoomImage" src="" alt="Zoomed preview">
</div>

<div class="anki-modal" id="ankiDeckModal" aria-hidden="true">
  <div class="anki-modal__backdrop" data-anki-modal-close></div>
  <section class="anki-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="ankiDeckModalTitle">
    <div class="anki-modal__hero">
      <p class="anki-modal__eyebrow">Deck description</p>
      <h2 class="anki-modal__title" id="ankiDeckModalTitle"></h2>
      <!-- <p class="anki-modal__meta" id="ankiDeckModalMeta"></p> -->
    </div>
    <div class="anki-modal__scroll">
      <div class="anki-modal__tabs" role="tablist" aria-label="Description languages">
        <button type="button" class="anki-modal__tab" data-anki-modal-lang="it">Italiano</button>
        <button type="button" class="anki-modal__tab" data-anki-modal-lang="en">English</button>
      </div>
      <div class="anki-modal__downloads" id="ankiDeckModalDownloads"></div>
      <div class="anki-modal__body" id="ankiDeckModalBody"></div>
    </div>
  </section>
</div>

<div class="anki-grid">

  {% for deck in decks %}
    {% assign deck_download = deck.download | relative_url %}
    {% capture deck_description_it %}{% case deck.slug %}{% when 'calculus-1' %}{% include_relative _data/anki_descriptions/calculus-1-it.md %}{% when 'computer-architecture' %}{% include_relative _data/anki_descriptions/computer-architecture-it.md %}{% when 'linear-algebra' %}{% include_relative _data/anki_descriptions/linear-algebra-it.md %}{% when 'os-concepts-linux-bash' %}{% include_relative _data/anki_descriptions/os-concepts-linux-bash-it.md %}{% when 'databases-sql' %}{% include_relative _data/anki_descriptions/databases-sql-it.md %}{% endcase %}{% endcapture %}
    {% capture deck_description_en %}{% case deck.slug %}{% when 'calculus-1' %}{% include_relative _data/anki_descriptions/calculus-1-en.md %}{% when 'computer-architecture' %}{% include_relative _data/anki_descriptions/computer-architecture-en.md %}{% when 'linear-algebra' %}{% include_relative _data/anki_descriptions/linear-algebra-en.md %}{% when 'os-concepts-linux-bash' %}{% include_relative _data/anki_descriptions/os-concepts-linux-bash-en.md %}{% when 'databases-sql' %}{% include_relative _data/anki_descriptions/databases-sql-en.md %}{% endcase %}{% endcapture %}
    <article class="anki-card">
      <div class="anki-media">
        {% assign img = deck.image | default: '/default-offline-image.png' %}
        <img class="anki-deck-img" src="{{ img | relative_url }}" alt="Preview of {{ deck.title }} Anki deck">
      </div>
      <div class="anki-content">
        <h4 class="anki-title">{{ deck.title }}</h4>
        {% if deck.description %}
          <div class="anki-desc">{{ deck.description | markdownify | strip }}</div>
        {% endif %}

        <div class="anki-actions">
          <div class="anki-actions__left">
            <button type="button" style="color:#a8b0ba; padding:6px; border-radius: 10px; margin:auto" class="anki-textlink" data-anki-modal-open data-deck-slug="{{ deck.slug }}" data-deck-title="{{ deck.title | escape }}" data-deck-image="{{ img | relative_url }}" data-deck-download-it="{{ deck.download_it | default: deck_download }}" data-deck-download-en="{{ deck.download_en | default: deck_download }}">Alt dl</button>
          </div>
          <div class="anki-actions__right">
            {% if deck.links.it %}
              <a class="anki-btn lang-it" href="{{ deck.links.it }}" target="_blank" rel="noopener" aria-label="Open deck (Italian)">
                <span class="emoji" aria-hidden="true">🇮🇹</span>
                <span class="label">IT</span>
                <span class="emoji" aria-hidden="true">📥</span>
              </a>
            {% endif %}
            {% if deck.links.en %}
              <a class="anki-btn lang-en" href="{{ deck.links.en }}" target="_blank" rel="noopener" aria-label="Open deck (English)">
                <span class="emoji" aria-hidden="true">🇬🇧</span>
                <span class="label">EN</span>
                <span class="emoji" aria-hidden="true">📥</span>
              </a>
            {% endif %}
          </div>
        </div>
      </div>

      <template id="anki-desc-{{ deck.slug }}-it">{{ deck_description_it | markdownify }}</template>
      <template id="anki-desc-{{ deck.slug }}-en">{{ deck_description_en | markdownify }}</template>
    </article>
  {% endfor %}
  
</div>

{% else %}
<p>No decks added yet.</p>
{% endif %}

<script>
(function() {
  const overlay = document.getElementById('ankiZoomOverlay');
  const zoomImg = document.getElementById('ankiZoomImage');
  const deckImages = document.querySelectorAll('.anki-media img');
  const modal = document.getElementById('ankiDeckModal');
  const modalTitle = document.getElementById('ankiDeckModalTitle');
  // const modalMeta = document.getElementById('ankiDeckModalMeta');
  const modalBody = document.getElementById('ankiDeckModalBody');
  const modalDownloads = document.getElementById('ankiDeckModalDownloads');
  const modalLangButtons = modal.querySelectorAll('[data-anki-modal-lang]');
  const openButtons = document.querySelectorAll('[data-anki-modal-open]');

  function getDescription(deckSlug, lang) {
    const template = document.getElementById(`anki-desc-${deckSlug}-${lang}`);
    return template ? template.innerHTML.trim() : '';
  }

  function setActiveLanguage(deckSlug, lang) {
    const available = getDescription(deckSlug, lang);
    const fallbackLang = lang === 'it' ? 'en' : 'it';
    const fallback = getDescription(deckSlug, fallbackLang);
    const body = available || fallback;
    const resolvedLang = available ? lang : (fallback ? fallbackLang : lang);

    modalBody.innerHTML = body || '<p class="anki-modal__empty">Description not available for this deck and language.</p>';
    // modalMeta.textContent = resolvedLang === 'it' ? 'Italiano' : 'English';

    modalLangButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.ankiModalLang === resolvedLang);
    });

    const downloadIt = modal.dataset.downloadIt || '';
    const downloadEn = modal.dataset.downloadEn || '';

    modalDownloads.innerHTML = `
      ${downloadIt ? `<a class="anki-modal__download" href="${downloadIt}" download>Local Download IT 🇮🇹</a>` : ''}
      ${downloadEn ? `<a class="anki-modal__download" href="${downloadEn}" download>Local Download EN 🇬🇧</a>` : ''}
    `;

    modal.dataset.currentLang = resolvedLang;
  }

  function openModal(deckSlug, deckTitle, deckImage, downloadIt, downloadEn) {
    const initialLang = getDescription(deckSlug, 'en') ? 'en' : 'it';

    modal.dataset.deckSlug = deckSlug;
    modal.dataset.downloadIt = downloadIt || '';
    modal.dataset.downloadEn = downloadEn || '';
    if (deckImage) {
      modal.style.setProperty('--anki-modal-image', `url("${deckImage}")`);
    }
    modalTitle.textContent = deckTitle;
    modal.classList.add('active');
    document.body.classList.add('anki-modal-open');
    setActiveLanguage(deckSlug, initialLang);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('anki-modal-open');
    modal.removeAttribute('data-deck-slug');
    modal.removeAttribute('data-current-lang');
    modalBody.innerHTML = '';
  }

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal(
        button.dataset.deckSlug,
        button.dataset.deckTitle,
        button.dataset.deckImage,
        button.dataset.deckDownloadIt,
        button.dataset.deckDownloadEn
      );
    });
  });

  modalLangButtons.forEach(button => {
    button.addEventListener('click', () => {
      const deckSlug = modal.dataset.deckSlug;

      if (!deckSlug) {
        return;
      }

      setActiveLanguage(deckSlug, button.dataset.ankiModalLang);
    });
  });

  modal.querySelectorAll('[data-anki-modal-close]').forEach(button => {
    button.addEventListener('click', closeModal);
  });
  
  deckImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      zoomImg.src = img.src;
      zoomImg.alt = img.alt;
      overlay.classList.add('active');
    });
  });
  
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('active')) {
        closeModal();
      }

      if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
      }
    }
  });
})();
</script>
<!-- markdownlint-enable MD033 -->
