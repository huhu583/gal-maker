// webpack配置文件,指示webpack怎么干活,干哪些活
// 运行webpack指令时,加载配置
// 构建工具基于nodejs平台~模块化默认采用commonjs

// resolve用来拼接绝对路径
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // webpack配置
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        path: resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        // 详细loader配置,不同资源用不同loader处理
        rules: [{
            // 匹配哪些文件
            test: /\.css$/,
            // 使用哪些loader处理
            use: [
                // use数据中loader的执行顺序是从下到上依次执行
                // 创建一个style标签,将js中的样式资源插入进去,添加到head中
                'style-loader',
                // 将css文件变成commonjs模块加载js中,里面内容是样式字符串
                'css-loader'
            ]
        },{
            test: /\.less$/,
            use: [
                'style-loader',
                "css-loader?modules",
                // 将less编译成css文件
                "less-loader"
            ]
        },{
            test: /\.(jpg|png|gif)$/,
            // 需要下载url-loader和file-loaderi
            loader: "url-loader",
            options: {
                // 图片大小小于8kb,就会使用base64处理
                // 优势小图片不再请求服务器
                // 图片体积会变大（文件请求会慢）
                limit: 8 * 1024,
                // url-loader默认使用es6模块化解析,html-loader默认使用commonjs
                // 解析会出问题
                // 解决关闭url-loader的es6模块化
                esModule: false,
                // 给图片重命名
                // [hash:10]取图片hash的前10位
                // [ext]取原来的扩展名
                name: '[hash:10].[ext]'
            }
        },{
            test: /\.html$/,
            // 处理html文件的img图片,负责引入img,从而能被url-loader处理
            loader: "html-loader"
        },{
            test: /(\.js?|jsx?)$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }]
    },
    // 插件的配置
    plugins: [
        // 功能:默认会创建一个空html文件，引入打包输入的所有资源
        // 
        new HtmlWebpackPlugin({
            // 复制模版文件并引入打包的所有资源
            template: './src/index.html'
        })
    ],
    // 模式 开发模式'development' 生产模式'production'
    mode: 'development',
    resolve: {
        // 引入react组件时省略jsx后缀。从前到后,补全后缀名
        extensions: ['.js','.jsx','.json'],
        alias: {
            // 配置@来表示根目录
            '@': resolve(__dirname, './src') 
        }
    }
}