module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'import'],
  rules: {
    'max-lines': ['warn', { max: 800 }],
    strict: 'off',
    'no-debugger': 'error',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '*.spec.{js,jsx,ts,tsx}',
          'lint-staged.config.js',
          'jest.config.js',
          'next.config.js',
          'plopfile.js',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'prettier/prettier': 'error',
  },
};
