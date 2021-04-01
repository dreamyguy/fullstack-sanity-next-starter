module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    babelOptions: {
      // This path is set one step above from where the file actually is
      // because the reference is made from 'backend' and 'frontend' folders
      configFile: './../babel.config.json',
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  rules: {
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
    'react/button-has-type': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': 'error',
  },
};
