//检查手机号码是否正确
function checkmobile(mob){
    if(mob==""){
        return false;
    }
    if(mob!=""){
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if(!reg.test(mob)){
          return false;
        }
    }
    return true;
}

//检查是一个6位的数字
function checkcode(intcode){
    if(intcode==""){
        return false;
    }
    if(intcode!=""){
        var reg = /^[0-9]{6}$/;
        if(!reg.test(intcode)){
          return false;
        }
    }
    return true;
}

//弹提示框
function showalertmsg(msg,closetime,icon){
    var widths = $(window).width();
    var heights = $(window).height();
    var html = "<div id='_jsshowmsg'  style='position:fixed; left:"+(widths/2)/2+"px; top:"+(heights/2-40)+"px; width:"+widths/2+"px; padding:10px; background:#000; display:none; opacity:0.8; border-radius:8px; z-index:999999999'><p style='text-align:center; padding:10px 0;'><img src='/public/images/"+icon+".png' width='40' height='40' /></p><p style='text-align:center; color:#fff; padding:5px 0;'>"+msg+"</p></div>";
    $('body').append(html);
    $('#_jsshowmsg').fadeIn(200,function(){
        setTimeout(function(){
           $('#_jsshowmsg').fadeOut(200,function(){
                $('#_jsshowmsg').remove(); 
           }); 
        },closetime);
    })
}