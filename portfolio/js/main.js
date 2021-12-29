$('#gotop').click(function(){
    $('.container').animate({ scrollTop: 0 }, 'slow'); 
    return false;
});                    
setTimeout(function(){
    $(".cover").hide()
   },1500);