module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'jest'],
  globals: {
    document: 'readonly',
    window: 'readonly',
    process: 'readonly',
    fetch: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': [0],
    'class-methods-use-this': 0,
    'jsx-a11y/label-has-for': 0,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
