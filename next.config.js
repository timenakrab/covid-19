const withCSS = require('@zeit/next-css');
const { base_url: websiteUrl } = require('./constant/constantWebsite');

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  serverRuntimeConfig: {
    BASE_URL: websiteUrl,
  },
  publicRuntimeConfig: {
    BASE_URL: websiteUrl,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }
    return config;
  },
});
