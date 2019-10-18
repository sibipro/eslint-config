module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-use-before-define': 'off',
    'lines-between-class-members': 'off',
    // react
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'error',
    'react/forbid-prop-types': 'error',
    'react/jsx-closing-tag-location': 'off', // defer to prettier
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent-props': 'off', // defer to prettier
    'react/jsx-indent': 'off', // defer to prettier
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-one-expression-per-line': 'off', // defer to prettier
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off', // defer to prettier
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-unsafe': 'warn',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/static-property-placement': ['error', 'static public field'],
  },
};
