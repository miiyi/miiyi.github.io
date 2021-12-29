$("#about").click( function(){
	$(".about").addClass("visible").siblings().removeClass("visible"),
    $(".work .main").hide(500),
    $(".about .main").show(300)
});
$("#work").click( function(){
	$(".work").addClass("visible").siblings().removeClass("visible"),
    $(".about .main").hide(500),
    $(".work .main").show(300)
});

setTimeout(function(){
 $(".cover").hide()
},1500);

$(".nav li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    var sort = $(this).attr("id")
    var classname ="." + sort 
    $(".all").hide()
    $(classname).show(10)
});