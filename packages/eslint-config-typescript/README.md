# @sibipro/eslint-config-typescript

Monorpo for eslint configuration for sibi projects.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/w33ble/eslint-config-sibi-web/master/LICENSE)
[![Project Status](https://img.shields.io/badge/status-stable-limegreen.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![npm](https://img.shields.io/npm/v/@sibipro/eslint-config-typescript.svg)](https://www.npmjs.com/package/@sibipro/eslint-config-typescript)

## Usage

Simply install the peer dependencies and then add this package to your eslint config's `extends` array, along with the base config.

```sh
yarn add -D @sibipro/eslint-config

npx install-peerdeps --dev @sibipro/eslint-config-typescript
```

In order for the typescript rules to work, you'll need to include parser information in your eslint config when extending this config. There may also be some addition things you want to add to `parserOptions`, but nothing else is required for this set of rules.

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": ["@sibipro/eslint-config", "@sibipro/eslint-config-typescript"]
}
```



## License

MIT © SIBI, LLC
