module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'src/vendor/**',
    'src/solid/**',
    'src/opus-recorder/**',
    'public/**'
  ],
  overrides: [{
    files: ['*.ts'],

    parserOptions: {
      project: ['./tsconfig.json'],
    },
  }],
  rules: {
    'max-len': 'off',
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'error',
    // 'valid-jsdoc': 'off',
    // 'require-jsdoc': 'off',
    // 'camelcase': 'off',
    // 'guard-for-in': 'off',
    // 'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
    'prefer-promise-reject-errors': 'off',
    'curly': 'off',
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'space-before-blocks': ['error', 'always'],
    'spaced-comment': ['error', 'always'],
    'prefer-spread': 'off',
    'prefer-const': ['error', {destructuring: 'all'}],
    'switch-colon-spacing': 'error',
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    // 'new-cap': 'error',
    // 'no-unused-vars': 'off',
    'no-useless-call': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-tabs': 'error',
    // 'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-unexpected-multiline': 'error',
    // '@typescript-eslint/no-misused-promises': 'error'
    // '@typescript-eslint/no-misused-promises': ['error', {checksConditionals: true, checksVoidReturn: true, checksSpreads: true}]
  }
};
