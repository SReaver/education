const path = require('path');

module.exports = {
  "mode": "production",
  "entry": "./src/js/index.js",
  "output": {
    path: path.resolve(__dirname, "dist/js"),
    "filename": "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          'presets': [
            [
              "@babel/preset-env",
              {
                "targets": {
                  "browsers": ['last 2 versions', "ie>=11"]
                }
              }
            ]
          ]
        }
      }
    }]
  }
}