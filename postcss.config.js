module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 36,
      propWhiteList: [],
      selectorBlackList: ['.el-', '.yidun_'],
      minPixelValue: 2
    }
  }
}
