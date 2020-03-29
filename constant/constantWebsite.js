const process = require('process');

const baseUrlDev = 'http://127.0.0.1:8080';
const baseUrlProd = 'https://streetboy.netlify.com';

const baseUrl = process.env.NODE_ENV === 'production' ? baseUrlProd : baseUrlDev;

module.exports = {
  content_lang: 'th',
  base_url: baseUrl,
  ga_tracking_id: 'UA-162103509-1',
  seoTitle: '',
  tab_selected: 'thailand',
  thailand: 'thailand',
  global: 'global',
  tabsGraph: {
    all: 'all',
    daily: 'daily',
  },
};
