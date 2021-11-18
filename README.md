# Hybrid Cloud Widgets

> Widget Registry and Widget Repository combined in one.

This project generates Storybook catalogs for _development_ and _production_ to search, and explore widgets.

[![](https://img.shields.io/badge/development-catalog-success?style=flat-square&logo=storybook)](https://hybrid-cloud-widgets-development.s3.us.cloud-object-storage.appdomain.cloud/index.html) [![](https://img.shields.io/badge/production-catalog-success?style=flat-square&logo=storybook)](https://hybrid-cloud-widgets-production.s3.us.cloud-object-storage.appdomain.cloud/index.html)

Below you will find the URL for the registry containing the JSON feed with the widget information.
This is necessary when you are integrating the widgets with your CMS (like Drupal).

[![](https://img.shields.io/badge/development-registry-success?style=flat-square&logo=json)](https://hybrid-cloud-widgets-development.s3.us.cloud-object-storage.appdomain.cloud/registry.json) [![](https://img.shields.io/badge/production-registry-success?style=flat-square&logo=json)](https://hybrid-cloud-widgets-production.s3.us.cloud-object-storage.appdomain.cloud/registry.json)

This project represents a single widget registry. This project, also, contains the code for all the widgets in the
registry. Widgets are created from components using the [JS Widgets Webpack CLI](https://github.com/js-widgets/webpack-cli#readme).

Check [the documentation](https://js-widgets.github.io/webpack-cli/) on how to create _widgets_ from components.

[![Webpack CLI](https://camo.githubusercontent.com/3693a0ff1fefe7ac31adf36125d2ad1e6be65e1eb0133841a9f0d63f7aa8c30f/68747470733a2f2f6a732d776964676574732e6769746875622e696f2f7765627061636b2d636c692f696d672f646f63756d656e746174696f6e2d736974652e706e67)](https://js-widgets.github.io/webpack-cli)

## Usage

Use the _Trust Radius_ widget as a reference implementation for your widgets. Noteworthy features:

1. Structured in small components.
2. State management using Redux. This is useful for fetching and managing API data.
3. Example of widgets using different palettes.
4. Storybook integration, including stateful components. Each component can have stories to highlight their edge cases.
5. Low effort unit testing from the Storybook stories using jest.
6. Examples for widget configuration and render files.
7. Accessibility reports integrated in Storybook.
8. Visual regression testing using Tugboat.
9. Automated release management upon commit onto `main`.
10. Internationalization (i18n) using the carbon web components patterns.

### Start a new widget

Create a new sub-directory in `/src/apps` with the name of the widget in [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case).
For instance `/src/apps/journey-ai`. Use the same name you will use for the widget's [`shortcode`](https://js-widgets.github.io/js-widgets/registry-schema/#items_shortcode).

1. The root-level component, the widget. Example: `/src/apps/journey-ai/JourneyAi.tsx`.
2. A folder with the name `components`. This will contain all the lower level components that will be ultimately used in `JourneyAi.tsx`. Example: `/src/apps/journey-ai/components/Button.tsx`.
