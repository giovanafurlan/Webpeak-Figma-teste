// next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

const nextTranslate = require("next-translate");

module.exports = (nextTranslate({
  webpack: (config) => {
    config.module.rules.push(
      ...[{
        test: /\.yml$/,
        type: "json",
        use: "yaml-loader",
      }, ]
    );
    config.resolve.fallback = {
      fs: false
    }
    return config;
  }
}));