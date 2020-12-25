const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = ({ file }) => {
  let rootValue
  // vant 37.5 [link](https://github.com/youzan/vant/issues/1181)
  if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
    rootValue = 37.5
  } else {
    rootValue = 75
  }
  return {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8"
        ]
      },
      'postcss-pxtorem': {
        rootValue: rootValue,
        propList: ['*']
      }
    }

  }
}