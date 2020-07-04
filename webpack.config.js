const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    // Resolve tsconfig paths
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  node: {
    fs: "empty",
    child_process: "empty",
    readline: "empty"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              transpileOnly: false
            }
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader'
          }
        ]
      }
    ]
  }
}