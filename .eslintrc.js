module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': [1],
    'space-before-function-paren': [0],
    'react/prop-types': [0],
    camelcase: [0],
  }
}
