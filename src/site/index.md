---
title: EMBL Design System
date: 2018-08-22 12:24:50
is_index: true
layout: layouts/base.njk
---

{% render '@vf-intro', {"vf_intro_phase": "alpha", "vf_intro_heading": title,
  "vf_intro_lede": siteConfig.siteInformation.short_description+".",
  "vf_intro_text": [
    "The system contains basic information about EMBL branding including colours, typography and guidelines for the use of the EMBL logo. You will find onboarding tools, design templates and practical resources on the EMBL Design System (EDS) website."
  ]
} %}

<section class="vf-content | embl-grid embl-grid--has-centered-content">
  <div><!-- empty --></div>
  <form action="{{ '/search/' | url }}" method="GET" class="vf-form | vf-search vf-search--inline">
    <div class="vf-form__item | vf-search__item">
      <label class="vf-form__label vf-sr-only | vf-search__label" for="text">
        Search
      </label>
      <input placeholder="Search the EMBL Design System documentation" type="text" id="text" name="search_query" class="vf-form__input | vf-search__input" data-vf-search-client-side-input>
    </div>
    <button type="submit" class="vf-search__button | vf-button vf-button--primary">
      Search
    </button>
  </form>
</section>


<section class="embl-grid embl-grid--has-centered-content">
  <div></div>
  <div class="vf-content">
    {# show all pages classes as sections #}
    {%- for section in collections.sections %}
      {% if section.data.is_index ==  true %}
        {% set absolutePostUrl %}{{ metadata.id }}{{ section.url }}{% endset %}

## [{{ section.data.title }}]({{ absolutePostUrl | url }})

{{ section.data.subtitle }}

      {% endif %}
    {%- endfor %}
  </div>
</section>
