$(document).ready(function(){

	TouchSlide({ 
		slideCell:"#focus",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"left", 
		interTime:_interTime,
		autoPlay:true,//自动播放
		autoPage:true, //自动分页
		switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	});

	
	
	/*验证按钮点击后*/
	// $('#btn_get_yzm').on('click', function(){
	//     $(this).addClass('btn_forbidden').text("请等待60秒");
	// });

	/*底部伸缩菜单暂时屏蔽*/
	/*$('.side_bar_open').on('click', function(){
	    TweenMax.to( $(".sidebar"), 0.4, { "left": 0 } );
	});
	$('.side_bar_close').on('click', function(){
	    TweenMax.to( $(".sidebar"), 0.4, { "left": "-100%" } );
	});*/

	/*底部菜单上的LOGO变化效果*/
	//TweenMax.to( $(".logo2"), 0.9, { "scale": "1.2","alpha":"0.6",repeat:-1,yoyo:true } );

});