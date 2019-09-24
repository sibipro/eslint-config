module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    strict: 'off',

    // import
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       '**/*.spec.tsx',
    //       '**/*.spec.ts',
    //       '**/*.stories.js',
    //       'lint-staged.config.js',
    //     ],
    //   },
    // ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
  configs: {
    core: {
      extends: ['airbnb', './rules/prettier', './rules/jest'].map(require.resolve),
    },
  },
};
