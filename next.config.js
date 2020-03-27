const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
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
