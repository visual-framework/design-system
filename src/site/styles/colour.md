---
title: Styles
order: 100
isIndex: true
layout: layouts/base.njk
---
<script>
function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return "rgb(" + r + ", " + g + ", " + b + ")";

    document.getElementById('text').innerHTML = rgb;
}
</script>

<nav class="vf-navigation vf-navigation--main">
  <ul class="vf-navigation__list | vf-list--inline">
    <li class="vf-navigation__item"><a href="/styles/typography/" class="vf-navigation__link">Typography</a></li>
    <li class="vf-navigation__item"><a href="/styles/colour/" class="vf-navigation__link">Colour</a></li>
    <li class="vf-navigation__item"><a href="/styles/images/" class="vf-navigation__link">Images</a></li>
    <li class="vf-navigation__item"><a href="/styles/illustration-and-infographics/" class="vf-navigation__link">Illustration and Infographics</a></li>
  </ul>
</nav>

<section class="vf-intro | embl-grid embl-grid--has-centered-content">
  <div><!-- empty --></div>
  <div>
    <h1 class="vf-intro__heading vf-intro__heading--has-tag">Colour<a href="" class="vf-badge vf-badge--primary vf-badge--phases">Alpha</a></h1>
    <p class="vf-lede">Besides logo, typeface and graphical elements, colours are one the most important parts of a corporate design.</p>
    <p class="vf-intro__text">Besides logo, typeface and graphical elements, colours are one the most important parts of a corporate design.</p>
    <div class="vf-intro__text">The set below shows all the colours for the EMBL brand. Other colours are not allowed. Any kind of colour coding in alignment with a service, group etc. is not allowed. Our main colour is white, in order to underline the bespoke usage of white space in our visual example.</div>
  </div>
</section>


# The colour set: Overview

Besides logo, typeface and graphical elements, colours are one the most important parts of a corporate design.

The set below shows all the colours for the EMBL brand. Other colours are not allowed. Any kind of colour coding in alignment with a service, group etc. is not allowed. Our main colour is white, in order to underline the bespoke usage of white space in our visual example.


<style>
.swatches {
  grid-row-gap: 32px;
  margin: 48px 0;
}
.swatch {
  border: 2px solid #333;
}

.swatch__details {
  padding: 16px;
}
.swatch:nth-of-type(6),
.swatch:nth-of-type(11) {
  grid-column-start: 1;
}
.swatch__colour {
  border-bottom: 2px solid #333;
  height: 230px;
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
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 8px;
  font-family: monospace;
  font-size: 1em;
  align-items: center;
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
</style>

<main class="swatches | vf-grid vf-grid__col-3">
{% for item in styles.colour.properties %}

<article class="swatch">
  <script>
    console.log (hexToRGB( "{{ item.value }}"));
  </script>
  <div class="swatch__colour" style="background-color: {{ item.value}};"></div>
  <section class="swatch__details">
  <h3 class="swatch__colour-name">{{ item.meta.friendlyName }}</h3>
  <p class="swatch__colour-hex"><span class="swatch__meta">Hex: </span>{{ item.value }}</p>
  <p class="swatch__colour-hex"><span class="swatch__meta">RGB: </span>{{ item.meta.rgb }}</p>
  {% if item.meta.sassVariable %}
  <p class="swatch__sass-variable"><span class="swatch__meta">Sass Variable: </span>{{ item.meta.sassVariable }}</p>
  {% endif %}
  {% if item.meta.CSSCustomProperty %}
  <p class="swatch__css-property"><span class="swatch__meta">CSS: </span>{{ item.meta.CSSCustomProperty }}</p>
  {% endif %}
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
