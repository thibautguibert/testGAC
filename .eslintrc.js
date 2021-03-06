module.exports = {
  extends: 'airbnb',
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react', 'react-native'],
  rules: {
    'func-names': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'max-len': ['error', 180],
    'max-lines': ['warn', 400],
    'max-lines-per-function': ['warn', 50],
    'no-confusing-arrow': 0,
    'one-var': 0,
    'react-native/no-color-literals': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 2,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-uses-vars': 1,
    'react/no-string-refs': 1,
    'react/no-unused-prop-types': 1,
    strict: [2, 'global'],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'object-curly-newline': ['error', {
      ObjectPattern: { multiline: true, minProperties: 5 },
      ImportDeclaration: 'never',
      ExportDeclaration: { multiline: true, minProperties: 5 },
    },
    ],
  },
};
