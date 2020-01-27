module.exports = {
  overrides: [
    {
      files: ['cypress/**/*.{js,ts}'],
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
      env: {
        'cypress/globals': true,
      },
      rules: {
        'cypress/assertion-before-screenshot': 'error',
      },
    },
  ],
};
