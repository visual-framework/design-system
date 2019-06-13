---
title: Colours
subtitle: Besides logo, typeface and graphical elements, colours are one the most important parts of a corporate design
section: styles
tags: posts
layout: layouts/post.njk
---

The set below shows all the colours for the EMBL brand. Other colours are not allowed. Any kind of colour coding in alignment with a service, group etc. is not allowed. Our main colour is white, in order to underline the bespoke usage of white space in our visual example.


## The colour set: Overview

Besides logo, typeface and graphical elements, colours are one the most important parts of a corporate design.

The set below shows all the colours for the EMBL brand. Other colours are not allowed. Any kind of colour coding in alignment with a service, group etc. is not allowed. Our main colour is white, in order to underline the bespoke usage of white space in our visual example.


<style>
.swatches {
  grid-row-gap: 32px;
  margin: 48px 0;
}
.swatch {
  border: 2px solid #333;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.swatch__details {
  padding: 16px;
}
.swatch:nth-of-type(6),
.swatch:nth-of-type(11) {
  grid-column-start: 1;
}
.swatch__colour {
  border-right: 2px solid #333;
  height: 100%;
  width: 100%;
}
.swatch__colour-name {
  margin: 0 0 12px 0;
}

.swatch__colour-hex,
.swatch__sass-variable,
.swatch__comment,
.swatch__css-property {
  margin: 0 0 12px 0;
}

.swatch__colour-hex,
.swatch__sass-variable,
.swatch__css-property {
  font-family: monospace;
  font-size: 1em;
  align-items: start;
}

.swatch__colour-hex,
.swatch__sass-variable,
.swatch__css-property {
  font-family: 'IBM Plex Mono', Monaco, Consolas, 'Lucida Console', monospace;
}
.swatch__notes {
  margin: 12px 0 0px 0;
}
.swatch__notes,
.swatch__colour-name,
.swatch__meta {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
}
.swatch__meta {
  display: block;
  margin-bottom: 4px;
}
.swatch__css-property {
  margin-bottom: 0;
}
</style>

<main class="swatches | vf-grid vf-grid__col-2">
{% for item in styles.colors.properties %}

<article class="swatch">
  <div class="swatch__colour" style="background-color: {{ item.value}};"></div>
  <section class="swatch__details">
  <h3 class="swatch__colour-name">{{ item.meta.friendlyName }}</h3>
  <p class="swatch__colour-hex"><span class="swatch__meta">Hex: </span>{{ item.value }}</p>
  <p class="swatch__colour-hex"><span class="swatch__meta">RGB: </span> {{ item.value | hextorgb }}</p>
  {% if item.meta.comment %}
  <h4 class="swatch__notes">notes:</h4>
  <p class="swatch__comment">{{ item.meta.comment }}</p>
  {% endif %}
  </section>
</article>

{% else %}

<p>bugger</p>

{% endfor %}
</main>
