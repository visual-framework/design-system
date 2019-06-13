---
title: Typography
section: styles
subtitle:
date: 2018-08-22 12:24:50
tags: posts
layout: layouts/post.njk
---


### Typeface: IBM Plex

EMBL uses open-source typeface [IBM Plex](https://github.com/ibm/plex). IBM Plex is a [super-family](https://en.wikipedia.org/wiki/Font_superfamily) typeface designed to meet the needs of a modern brand typeface:

<ul class="vf-list vf-list--unordered">
<li class="vf-list__item">Adaptable: It is adaptable to many media types: projection, or print, to high and low resolution screens. </li>
<li class="vf-list__item">Legibility: Plex is designed to be legible at even the smallest sizes.</li>
<li class="vf-list__item">Active support: It is under constant improvement and was recently released in Variable Font format. </li>
<li class="vf-list__item">Ubiquitous: Plex is available to freely download from [GitHub](https://github.com/ibm/plex). It is also available on [Google Fonts](https://fonts.google.com/featured/Plex) for download and embedding directly in digital products</li>
</ul>

### Usage

EMBL uses two typefaces from the IBM Plex family; Sans and Mono. *Sans* is to be used for all communications material. *Mono* is reserved for high impact communications and is to be used as a display weight only.

#### Web products and services

When using IBM Plex for digital products, you can use [Google Fonts](https://fonts.google.com/featured/Plex) to serve the fonts directly. The font stacks are as follows:

##### Sans Serif font stack

```
font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
```

##### Mono font stack

```
font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
```

#### Microsoft Office

We cannot embed IBM Plex into our distributable Microsoft Office templates such as Powerpoint and Word. For this case, we will use a typeface that looks close to IBM Plex but is distributed as part of the Microsoft Office installation. This typeface is *Franklin Gothic*.

#### Mailchimp

Mailchimp is used for our email newsletter distributions. The template builder includes some webfonts, but not IBM Plex currently. Therefore we are substituting IBM Plex for *Source Sans Pro*.

<style>
.vf-swatch {
  grid-column: 2 / -2 !important;
}
</style>

{% for item in styles.typography.properties %}
<article class="vf-swatch">
    <h3 class="vf-swatch__colour-name">
      {{ item.meta.friendlyName }}
    </h3>
    <p
      class="vf-body--r"
      style="font-size: {{ item.value.fontSize }};
             font-weight: {{ item.value.fontWeight }};
            line-height: {{ item.value.lineHeight }}
    ">
      {{ item.meta.alphabet }}
    </p>
    <p
      class="vf-body--r"
      style="font-size: {{ item.value.fontSize }};
             font-weight: {{ item.value.fontWeight }};
            line-height: {{ item.value.lineHeight }}
    ">
      {{ item.meta.pangram }}
    </p>

    {% if item.meta.comment %}
    {{ item.meta.comment }}
    {% endif %}


- Font Size: {{ item.value.fontSize }}
- Font Weight: {{ item.value.fontWeight }}
- Ling Height: {{ item.value.lineHeight}}

</article>
{% else %}

<p>bugger</p>

{% endfor %}
