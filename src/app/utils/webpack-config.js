module.exports = {
    mode: 'development',  // or 'development'
    devtool: 'source-map',  // This generates the .map file
    entry: './src/index.js', // your entry file (adjust as needed)
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),  // where the bundled file will go
    },
  };
  