const Repack = require('@callstack/repack');

module.exports = (env) => {
  const platform = env.platform || process.env.PLATFORM || 'android';

  return {
    context: __dirname,
    entry: './index.js',
    resolve: {
      ...Repack.getResolveOptions(),
    },
    output: {
      uniqueName: 'gallery',
    },
    module: {
      rules: [
        ...Repack.getJsTransformRules(),
        ...Repack.getAssetTransformRules(),
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        targetPlatform: platform,
      }),
      new Repack.plugins.ModuleFederationPluginV2({
        name: 'gallery',
        filename: 'gallery.js.bundle',
        dts: false,
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^19.0.0',
            eager: true,
          },
          'react-native': {
            singleton: true,
            requiredVersion: '^0.78.2',
            eager: true,
          },
        },
      }),
    ],
  };
};
