---
title: EMBL Design System
date: 2018-08-22 12:24:50
is_index: true
layout: layouts/base.njk
---


<div class="vf-grid vf-content">

{% render '@vf-intro', {"vf_intro_phase": "alpha", "vf_intro_heading": title,
  "vf_intro_lede": siteConfig.siteInformation.short_description+".",
  "vf_intro_text": [
    "The system contains basic information about EMBL branding including colours, typography, and guidelines for the use of the EMBL logo. You will find onboarding tools, design templates and practical resources on the EMBL Design System (EDS) website.",
    "[Sitemap for upcoming site](https://docs.google.com/drawings/d/1YeOy417worJ1aNxtsbDLoch8X8OwDitZT2i-ZThwAlM/edit?ts=5ce66269)" | markdown
  ]
} %}

</div>



<section class="embl-grid embl-grid--has-centered-content">
  <div></div>
  <div class="vf-content">
    {# show all pages classes as sections #}
    {%- for section in collections.sections %}
      {% if section.data.is_index ==  true %}
        {% set absolutePostUrl %}{{ metadata.id }}{{ section.url }}{% endset %}

## [{{ section.data.title }}]({{ absolutePostUrl }})

{{ section.data.subtitle }}

      {% endif %}
    {%- endfor %}
  </div>
</section>
