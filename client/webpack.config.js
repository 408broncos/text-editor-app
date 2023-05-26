const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    install: './src/js/install.js',
    database: './src/js/database.js',
    editor: './src/js/editor.js',
    header: './src/js/header.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'jate',
    }),

    new WebpackPwaManifest({
      start_url: '/',
      publicPath: '/',
      name: 'My PWA App',
      short_name: 'jate',
      description: 'This is my Progressive Web App',
      background_color: '#ffffff',
      theme_color: '#000000',
      fingerprints: false,
      inject: true,
      icons: [
        {
          src: path.resolve(__dirname, 'src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),

    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'service-worker.js',
      include: [/\.js$/, /\.css$/],
      exclude: [/\.html$/, /\.json$/], 
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
