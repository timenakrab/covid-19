const process = require('process');

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://streetboy.netlify.com' : 'http://127.0.0.1:8080';

module.exports = {
  base_url: baseUrl,
  seoTitle: '',
  tab_selected: 'thailand',
  thailand: 'thailand',
  global: 'global',
};
