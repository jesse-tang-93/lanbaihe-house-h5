let path = require('path')
module.exports = {
  mode:'development', // 模式  production 和development
  entry: './js/index.js', // 入口
  output: {
    filename:'bound.js', // 打包后的文件名
    path:path.resolve(__dirname,'dist'), // 路径必须是一个绝对路径
  }
} 