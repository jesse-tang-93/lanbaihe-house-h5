var videoArr = ['http://demo.htmleaf.com/1711/201711141522/media/240.mp4','http://demo.htmleaf.com/1810/201810171450/ckin.mp4','https://video.mukewang.com/mk.mp4']
var videoIndex = 0
// 首页视频播放器
var videoObject = {
  next:'toNext',
  container: '#video', //容器的ID或className
  variable: 'player',//播放函数名称
  poster:'../material/poster.jpg',//封面图片
  video: videoArr[videoIndex]
  
};
var player = new ckplayer(videoObject);
// 下一个
function toNext(){
  if(videoIndex<videoArr.length-1){
    videoIndex ++
    if(videoIndex===videoArr.length-1){ // 最后一个
      player.newVideo({
        front:'toLast',
        autoplay:true,
        video:videoArr[videoIndex]
      }); 
    }else{
      player.newVideo({
        front:'toLast',
        next:'toNext',
        autoplay:true,
        video:videoArr[videoIndex]
      }); 
    } 
  }else{
    alert('没有下一集了')
  }
}
// 上一个
function toLast(){
  if(videoIndex>=1){
    videoIndex -- 
    if(videoIndex===0){ // 第一个
      player.newVideo({
        next:'toNext',
        autoplay:true,
        video:videoArr[videoIndex]
      }); 
    }else{
      player.newVideo({
        front:'toLast',
        next:'toNext',
        autoplay:true,
        video:videoArr[videoIndex]
      });
    }
  }
}