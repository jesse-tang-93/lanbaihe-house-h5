
import DPlayer from 'dplayer'
// http://clappr.io/highline.mp4
const dp = new DPlayer({
  container: document.getElementById('dplayer'), // 播放器容器
  theme: '#E9709B', //  主题色
  //screenshot: true, // 是否开启截图
  //lang: 可选值: 'en', 'zh-cn', 'zh-tw'  默认系统语言
  video: {
      url: 'http://clappr.io/highline.mp4',
      pic: '', // 封面
      thumbnails: '' // 缩略图
  },
  highlight: [ // 自定义进度条提示点
    {
        time: 20,
        text: '这是第 20 秒'
    },
    {
        time: 120,
        text: '这是 2 分钟'
    }
  ],
  contextmenu: [] // 自定义右键菜单],
});

function nextPlayer(){
  dp.switchVideo({
      url: 'http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v',
      pic: '',
      thumbnails: ''
  }, {
      id: 'test',
      api: 'https://api.prprpr.me/dplayer/',
      maximum: 3000,
      user: 'DIYgod'
  });
}