# Hybrid Cloud Web Component "Widgets"

> Widget Registry and Widget Repository combined in one.

This project generates Storybook catalogs for _development_ and _production_ to search, and explore widgets.

[![](https://img.shields.io/badge/development-catalog-success?style=flat-square&logo=storybook)](https://hybrid-cloud-widgets-development.s3.us.cloud-object-storage.appdomain.cloud/storybook/index.html) [![](https://img.shields.io/badge/production-catalog-success?style=flat-square&logo=storybook)](https://hybrid-cloud-widgets-production.s3.us.cloud-object-storage.appdomain.cloud/storybook/index.html)

Below you will find the URL for the registry containing the JSON feed with the
widget information. This is necessary when you are integrating the widgets with
your CMS (like Drupal).

[![](https://img.shields.io/badge/development-registry-success?style=flat-square&logo=json)](https://hybrid-cloud-widgets-development.s3.us.cloud-object-storage.appdomain.cloud/registry.json) [![](https://img.shields.io/badge/production-registry-success?style=flat-square&logo=json)](https://hybrid-cloud-widgets-production.s3.us.cloud-object-storage.appdomain.cloud/registry.json)

This project represents a single widget registry. This project, also, contains
the code for all the widgets in the registry. Widgets are created from
components using
the [JS Widgets Webpack CLI](https://github.com/js-widgets/webpack-cli#readme).

## Contribute

Check [the documentation](./CONTRIBUTING.md) on how to contribute widgets to
this registry.

## Set Up

Create a `.env.local` file in your local environment with the following
contents:

```ini
PUBLIC_ASSETS_URL = /static
```
