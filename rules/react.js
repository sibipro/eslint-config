module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: ['plugins:react/recommended'],
  rules: {
    // react
    'react/destructuring-assignment': 'off',
    'react/display-name': 'error',
    'react/forbid-prop-types': 'error',
    'react/jsx-closing-tag-location': 'off', // defer to prettier
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': 'off', // defer to prettier
    'react/jsx-indent-props': 'off', // defer to prettier
    'react/jsx-no-target-blank': 'error',
    'react/jsx-one-expression-per-line': 'off', // defer to prettier
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'off', // defer to prettier
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-unsafe': 'warn',
    'react/static-property-placement': ['error', 'static public field'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
