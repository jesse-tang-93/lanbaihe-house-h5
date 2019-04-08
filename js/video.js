var videoArr = ['http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm','http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4','https://video.mukewang.com/mk.mp4']
var videoIndex = 0
// 首页视频播放器
var videoObject = {
  front:'toLast',
  next:'toNext',
  container: '#video', //容器的ID或className
  variable: 'player',//播放函数名称
  poster:'../material/poster.jpg',//封面图片
  video: videoArr[videoIndex]
  
};
var player = new ckplayer(videoObject);
function toNext(){
  if(videoIndex<videoArr.length-1){
    videoIndex ++
    alert( videoIndex)
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
function toLast(){
  if(videoIndex>0){
    videoIndex --
    player.newVideo({
      front:'toLast',
      next:'toNext',
      autoplay:true,
      video:videoArr[videoIndex]
    }); 
  }else if(videoIndex === 0){
    alert('已经是第一个了')
  }
}