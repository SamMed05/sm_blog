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

<!-- markdownlint-disable MD033 -->
<style>
.anki-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.8rem;align-items:stretch}
.anki-card{display:flex;flex-direction:column;height:100%;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.08);border-radius:12px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.06);transition:transform .15s ease,box-shadow .15s ease}
.anki-card:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.10)}
.anki-media{position:relative;overflow:hidden;aspect-ratio:16/9;background:#f4f4f4}
.anki-media img{width:100%;height:100%;object-fit:cover;transform:scale(1.5);transition:transform .25s ease;display:block; image-rendering: smooth; will-change: scale}
.anki-card:hover .anki-media img{transform:scale(1.8)}
.anki-content{flex:1;display:flex;flex-direction:column;padding:10px 12px 10px}
.anki-title{font-weight:700;margin:0 0 2px 0;font-size:.88rem;line-height:1.25}
.anki-desc{margin:0 0 15px 0}
.anki-desc > p{margin:0}
.anki-actions{margin-top:auto;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end}
.anki-btn{display:inline-flex;align-items:center;gap:.35rem;padding:.46rem .66rem !important;border-radius:9px;border:1px solid rgba(0,0,0,.12);text-decoration:none;color:inherit;background:rgba(0,0,0,.04);font-size:.92rem}
.anki-btn:hover{background:rgba(0,0,0,.08)}
.anki-badge{font-size:.82rem;opacity:.9}
.anki-btn .label{font-weight:600;letter-spacing:.01em}
.anki-btn .emoji{font-size:1.05rem;line-height:1}
/* subtle language tints */
.anki-btn.lang-it{background:rgba(16,160,0,.08);border-color:rgba(16,160,0,.18)}
.anki-btn.lang-it:hover{background:rgba(16,160,0,.16)}
.anki-btn.lang-en{background:rgba(0,96,255,.08);border-color:rgba(0,96,255,.18)}
.anki-btn.lang-en:hover{background:rgba(0,96,255,.16)}
.anki-empty{opacity:.6}
.anki-author{margin-top:1rem;text-align:center}
@media (max-width:800px){.anki-grid{grid-template-columns:1fr}}
@media (prefers-color-scheme: dark){
  .anki-card{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)}
  .anki-media{background:rgba(255,255,255,.07)}
  .anki-btn{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.15)}
  .anki-btn:hover{background:rgba(255,255,255,.12)}
  .anki-btn.lang-it{background:rgba(60,200,60,.14);border-color:rgba(60,200,60,.28)}
  .anki-btn.lang-it:hover{background:rgba(60,200,60,.24)}
  .anki-btn.lang-en{background:rgba(80,140,255,.14);border-color:rgba(80,140,255,.28)}
  .anki-btn.lang-en:hover{background:rgba(80,140,255,.24)}
}
</style>

{% assign decks = site.data.anki_decks %}
{% if decks and decks.size > 0 %}
<div class="anki-grid">

  {% for deck in decks %}
    <article class="anki-card">
      <div class="anki-media">
        {% assign img = deck.image | default: '/default-offline-image.png' %}
        <img src="{{ img | relative_url }}" alt="Preview of {{ deck.title }} Anki deck">
      </div>
      <div class="anki-content">
        <h4 class="anki-title">{{ deck.title }}</h4>
        {% if deck.description %}
          <div class="anki-desc">{{ deck.description | markdownify | strip }}</div>
        {% endif %}

        <div class="anki-actions">
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
          {% unless deck.links.it or deck.links.en %}
            <span class="anki-btn anki-empty" aria-disabled="true">Links coming soon</span>
          {% endunless %}
        </div>
      </div>
    </article>
  {% endfor %}
  
</div>

{% else %}
<p>No decks added yet.</p>
{% endif %}
<!-- markdownlint-enable MD033 -->
