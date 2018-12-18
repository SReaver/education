const path = require('path');

module.exports = {
  "mode": "production",
  "entry": "./src/js/modules.js",
  "output": {
    path: path.resolve(__dirname, "dist/js"),
    "filename": "modulesbundle.js"
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