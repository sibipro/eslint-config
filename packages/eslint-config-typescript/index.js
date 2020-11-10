module.exports = {
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      plugins: ['import', '@typescript-eslint'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', args: 'after-used', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/indent': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
            mjs: 'never',
          },
        ],
      },
    },
    {
      files: ['*.spec.{ts,tsx}'],
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
      },
    },
  ],
};
