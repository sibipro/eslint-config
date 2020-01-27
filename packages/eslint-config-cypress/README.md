# @sibipro/eslint-config-cypress

Monorepo for eslint configuration for sibi projects.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/w33ble/eslint-config-sibi-web/master/LICENSE)
[![Project Status](https://img.shields.io/badge/status-stable-limegreen.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![npm](https://img.shields.io/npm/v/@sibipro/eslint-config-cypress.svg)](https://www.npmjs.com/package/@sibipro/eslint-config-cypress)

## Usage

Simply install the peer dependencies and then add this package to your eslint config's `extends` array, along with the base config.

```sh
yarn add -D @sibipro/eslint-config-cypress

npx install-peerdeps --dev @sibipro/eslint-config-cypress
```

```json
{
  "extends": ["@sibipro/eslint-config", "@sibipro/eslint-config-cypress"]
}
```

## License

MIT © SIBI, LLC
