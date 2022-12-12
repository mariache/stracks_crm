module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/quotes": 0,
    "react/function-component-definition": 0,
    "import/prefer-default-export": 0,
    "react/require-default-props" :0,
    "no-restricted-globals": 0,
    "react/no-unstable-nested-components": 0,
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  },
};
