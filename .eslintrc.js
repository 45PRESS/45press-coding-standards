module.exports = {
  env: {
    jest: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'wordpress',
  rules: {
    camelcase: 'off'
  }
};
