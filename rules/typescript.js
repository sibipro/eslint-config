module.exports = {
  overrides: {
    files: ['**/*.{ts,tsx}'],
    plugins: ['import', '@typescript-eslint'],
    extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
      includes: ['*.(j|t)sx?'],
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
};
