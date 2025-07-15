const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    mode: argv.mode || 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resourcePath) => resourcePath.includes('.module.'),
                  localIdentName: isProduction 
                    ? '[hash:base64:5]' 
                    : '[name]__[local]--[hash:base64:5]',
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        minify: isProduction,
      }),
    ],
    optimization: isProduction ? {
      splitChunks: {
        chunks: 'all',
      },
    } : {},
  };
};
