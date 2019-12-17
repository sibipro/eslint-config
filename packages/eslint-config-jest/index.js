module.exports = {
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.{js,jsx,ts,tsx}'],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/expect-expect': [
          'error',
          {
            assertFunctionNames: [
              'expect',
              'getByLabelText',
              'getByPlaceholderText',
              'getByText',
              'getByAltText',
              'getByTitle',
              'getByDisplayValue',
              'getByRole',
              'getByTestId',
            ],
          },
        ],
        'jest/valid-title': 'error',
        'jest/no-export': 'error',
        'jest/no-if': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/no-truthy-falsy': 'warn',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/require-top-level-describe': 'warn',
      },
    },
  ],
};
