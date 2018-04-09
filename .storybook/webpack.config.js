const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: false,
    fix: true,
  },
});

const syleLintOptions = {
  configFile: resolve('.stylelintrc.js'),
};

module.exports = baseConfig => {
  baseConfig.module.rules.push(createLintingRule());
  baseConfig.plugins.push(new StyleLintPlugin(syleLintOptions));
  baseConfig.resolve.extensions.push('.vue');

  baseConfig.resolve.alias = {
    '@src': path.resolve(__dirname, '../src'),
    '@design': path.resolve(__dirname, '../src/design/index.scss'),
  };

  return baseConfig;
};
