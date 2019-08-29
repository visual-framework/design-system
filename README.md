# EMBL Design System documentation

The EMBL Design System (EDS) is the laboratory's design system for communications in all media. The system contains basic information about EMBL branding including colours, typography, and guidelines for the use of the EMBL logo. You will find onboarding tools, design templates and practical resources on the EMBL Design System website.

See it at https://beta.embl.org/guidelines/design/

## How this integrates with other sites

See the [sitemap](
https://docs.google.com/drawings/d/1YeOy417worJ1aNxtsbDLoch8X8OwDitZT2i-ZThwAlM/edit?ts=5ce66269).

## Local development

You'll need to [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then:

1. If you don't have `yarn`, install it
   - https://yarnpkg.com/lang/en/docs/install/
2. Install all the things
   - `yarn install`
3. Generate the site in `/build`
   - `gulp dev` renders and serves
   - `gulp build` build static assets

## Adding Visual Framework components

To add a component you can use npm/Yarn or install it manually.

### By package

- installation: `yarn add @visual-framework/embl-logo`
- updating components: `yarn upgrade-interactive --latest`
  - alias: `npm run update-components`

### Manual installation for customisation

1. Download a pattern
2. Copy it to `./src/components/vf-component-name`

In either case you'll need to re-run `npm run-script dev` to access the pattern.

## Footnotes

- Why `yarn` and not `npm`?
  For the particular structure of the Visual Framework components, Yarn is considerably
  faster at installing and does so more efficiently (about half the total file size). You'll
  also be able to use `yarn upgrade-interactive --latest`, which makes it easier to update
  VF components.
