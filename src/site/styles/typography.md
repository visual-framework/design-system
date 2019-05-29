---
title: Styles
subtitle:
date: 2018-08-22 12:24:50
layout: layouts/base.njk
---

<nav class="vf-navigation vf-navigation--main">
<ul class="vf-navigation__list | vf-list--inline">
<li class="vf-navigation__item vf-navigation__item--active"><a href="/styles/typography/" class="vf-navigation__link">Typography</a></li>
<li class="vf-navigation__item"><a href="/styles/colour/" class="vf-navigation__link">Colour</a></li>
<li class="vf-navigation__item"><a href="/styles/images/" class="vf-navigation__link">Images</a></li>
<li class="vf-navigation__item"><a href="/styles/illustration-and-infographics/" class="vf-navigation__link">Illustration and Infographics</a></li>
</ul>
</nav>

<nav class="vf-breadcrumbs" aria-label="Breadcrumb">
  <ul class="vf-breadcrumbs__list | vf-list vf-list--inline">
    <li class="vf-breadcrumbs__item">
      <a href="/" class="vf-breadcrumbs__link">Home</a>
    </li>
    <li class="vf-breadcrumbs__item">
      <a href="/styles/" class="vf-breadcrumbs__link">Styles</a>
    </li>
    <li class="vf-breadcrumbs__item">
      Typography
    </li>
  </ul>
</nav>

<section class="vf-intro | embl-grid embl-grid--has-centered-content">
<div><!-- empty --></div>
<div>
<h1 class="vf-intro__heading vf-intro__heading--has-tag">Typography<a href="" class="vf-badge vf-badge--primary vf-badge--phases">Alpha</a></h1>
<p class="vf-lede">EMBL communications materials and services have broad typographic needs: from rich and engaging editorial content, to information-dense scientific figures and web applications. Any typeface EMBL uses has to be able to work hard to meet these requirements.</p>
</div>
</section>


<section class="embl-grid embl-grid--has-centered-content">

<div></div>
<div class="vf-content">
<h3>Typeface: IBM Plex</h3>
<p>EMBL uses open-source typeface [IBM Plex](https://github.com/ibm/plex). IBM Plex is a super-family typeface designed to meet the needs of a modern brand typeface:</p>

<ul class="vf-list vf-list--unordered">
<li class="vf-list__item">Adaptable: It is adaptable to many media types: projection, or print, to high and low resolution screens. </li>
<li class="vf-list__item">Legibility: Plex is designed to be legible at even the smallest sizes.</li>
<li class="vf-list__item">Active support: It is under constant improvement and was recently released in Variable Font format. </li>
<li class="vf-list__item">Ubiquitous: Plex is available to freely download from [Github](https://github.com/ibm/plex). It is also available on [Google Fonts](https://fonts.google.com/featured/Plex) for download and embedding directly in digital products</li>
</ul>

<h3>Usage</h3>


<p>EMBL uses two typefaces from the IBM Plex family; Sans and Mono. *Sans* is to be used for all communications material. *Mono* is reserved for high impact communications and is to be used as a display weight only.</p>

<h4>Web products and services</h4>

<p>When using IBM Plex for digital products, you can use Google Fonts to serve the fonts directly. The font stacks are as follows:</p>



<h5>Sans Serif font stack</h5>
<code class="vf-code-example">
  <pre class="vf-code-example__pre">
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  </pre>
</code>



<h5>Mono font stack</h5>
<code class="vf-code-example">
  <pre class="vf-code-example__pre">
    font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
  </pre>
</code>


<h4>Microsoft Office</h4>
<p>We cannot embed IBM Plex into our distributable Microsoft Office templates such as Powerpoint and Word. For this case, we will use a typeface that looks close to IBM Plex but is distributed as part of the Microsoft Office installation. This typeface is *Franklin Gothic*.</p>

<h4>Mailchimp</h4>
<p>Mailchimp is used for our email newsletter distributions. The template builder includes some webfonts, but not IBM Plex currently. Therefore we are substituting IBM Plex for *Source Sans Pro*.</p>
</div>
</section>

<section class="embl-grid embl-grid--has-centered-content">
<div></div>
<div>
<h3 class="vf-text vf-text--heading-l">Sizes</h3>

<h1 class="vf-text vf-text--heading-xl vf-text--invert">This heading size is display and inverted</h1>
<h2 class="vf-text vf-text--heading-xl">This heading size is extra large</h2>
<h3 class="vf-text vf-text--heading-l">This heading size is large</h3>
<h4 class="vf-text vf-text--heading-r">This heading size is regular</h4>
<h5 class="vf-text vf-text--heading-s">This heading size is small</h5>
<p>Lead paragraph</p>
<p>Paragraph</p>
</div>
</section>
