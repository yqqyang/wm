/**
 * 全局行为
 */

var pop_login;  //登录弹窗对象

/*登录弹窗*/
function open_login() {
    pop_login = layer.open({
        type: 1,
        title: false,
        closeBtn: false,
        area: ['90%', '500'],
        shade: 0.8, //遮罩透明度
        shadeClose: true,
        content: $('#pop_home'),
        
        });
}

/*模态弹窗*/
function open_mode_login() {
    pop_login = layer.open({
        type: 1,
        title: false,
        closeBtn: false,
        area: ['90%', '500'],
        shade: 0.8, //遮罩透明度
        shadeClose: true,
        content: $('#pop_home'),
        shadeClose: false
        });
}

/*关闭弹窗*/
function close_login() {
    layer.close(pop_login);
}



/*复选框*/
$(function(){
	$('.goods_order_list li .radiobox, .sum_total label,.goods1').find('i').on('click',function(){
		if($(this).attr('class') == 'radio_pic'){
			$(this).removeClass('radio_pic').addClass('radio_active');
		}else{
			$(this).removeClass('radio_active').addClass('radio_pic');
		}	
	})	
})



$(function(){
	$('.money label,.way label, .default label').find('span').on('click',function(){
		if($(this).attr('class') == 'check_pic'){
			$(this).removeClass('check_pic').addClass('check_active');
		}else{
			$(this).removeClass('check_active').addClass('check_pic');
		}	
	})	
})


$(function(){
    $('.Pay label').find('tt').on('click',function(){
        if($(this).attr('class') == 'check_pic'){
            $(this).removeClass('check_pic').addClass('check_active');
        }else{
            $(this).removeClass('check_active').addClass('check_pic');
        }   
    })  
})