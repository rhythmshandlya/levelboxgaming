module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = {
  exportTrailingSlash: true,
};

// next.config.js
module.exports = {
  experimental: {
    concurrentFeatures: true,
  },
};
