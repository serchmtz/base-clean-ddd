module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [options.defaultLoaders.babel, { loader: "ts-loader" }],
        exclude: /(node_modules|src\/apps)/,
    });
    return config;
  },
};
