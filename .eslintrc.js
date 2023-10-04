module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] },
    ],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'max-len': ['error', { code: 200, ignoreUrls: true }],
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
  },
};
