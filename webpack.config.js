// 구성옵션을 제공해야 한다. nodejs 환경에서 동작
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  //parcel index.html  파일 진입점 설정
  entry:'./js/main.js',         //js 파일을 진입점으로 설정
  

  //결과물(번들)을 반환하는 설정
  output:{
    //path filename은 따로 지정해주지 않아도 동작한다.
    // path:path.resolve(__dirname,'dist'),  //두개의 인수를 합쳐서 가져온다.__dirname 은 현재파일이 있는 경로 
    // filename:'main.js',                    //dist 폴더에 만들어질 js 파일 이름
    clean:true                            //기존에 만든거 제거
  },

  module : {
    rules:[
      {
        test:/\.s?css$/,         // .css , .scss 파일을 찾는다.
        use: [
          'style-loader',      //순서가 중요하다!
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [                    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    new HtmlPlugin({
      template:'./index.html'
    }),
    new CopyPlugin ({
      patterns : [
        {from:'static'}
      ]
    })
  ],

  devServer : {
    host:'localhost'
  }
}