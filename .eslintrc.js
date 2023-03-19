module.exports = {
  env: {
    'shared-node-browser': true,
    es2021: true,
    jest: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['config/**/*', 'dist/**/*', 'node_modules/**/*'],
};
