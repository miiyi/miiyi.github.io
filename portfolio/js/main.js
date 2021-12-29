if( $(window).width() < 720 ){	
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow'); 
        return false;
    });
}else{
    $('#gotop').click(function(){
        $('.container').animate({ scrollTop: 0 }, 'slow'); 
        return false;
    });
}              
setTimeout(function(){
    $(".cover").hide()
   },1500);