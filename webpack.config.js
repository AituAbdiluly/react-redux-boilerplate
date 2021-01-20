const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const optimization = () => {
  const config = {
    minimize: true,
    splitChunks: { chunks: 'all' }
  };

  if (!devMode) {
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }

  return config;
};

const cssLoader = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'public/assets/img/favicon.ico'),
        to: path.resolve(__dirname, 'build', 'assets/img')
      },
      {
        from: path.resolve(__dirname, 'public/assets/img/favicon-32x32.png'),
        to: path.resolve(__dirname, 'build', 'assets/img')
      },
      {
        from: path.resolve(__dirname, 'public/assets/img/favicon-16x16.png'),
        to: path.resolve(__dirname, 'build', 'assets/img')
      },
      {
        from: path.resolve(__dirname, 'public/assets/img/apple-touch-icon.png'),
        to: path.resolve(__dirname, 'build', 'assets/img')
      }
    ]
  })
];
if (!devMode) {
  // enable in production only
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  );
}

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: cssLoader()
      },
      {
        test: /\.s(c|a)ss$/,
        use: cssLoader('sass-loader')
      },
      {
        test: /\.less$/,
        use: cssLoader('less-loader')
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img'
            }
          }
        ]
      }
    ]
  },
  optimization: optimization(),
  plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'build'), 'node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    hot: devMode,
    stats: 'minimal',
    historyApiFallback: true
  },
  target: 'web'
};
