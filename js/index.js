
/*
number
string
boolean
undefined
null

object

alert("rest")
var username = "ahmed";

console.log(username)

alert("welcome : "+username)

var x = 5;
var y = "5";

if(x === y)
    {
        console.log("sa7");
    }
else
    {
        console.log("8alat");
    }

*/







$(document).ready(function(){
    $("#loading_screen").fadeOut(3000,function(){
        $("body").css("overflow","auto")
    })
})

new WOW().init();
$(window).scroll(function(){
    var scrt = $(window).scrollTop();
    if(scrt>1000)
        {
        $(".btnup").fadeIn(200)    
        }
    else
    {
        $(".btnup").fadeOut(200)
    }
  
})

$(".btnup").click(function(){
    
    $("body,html").animate({scrollTop:0},1000)
})

 var secoff = $("#section_about").offset().top;
$(window).scroll(function(){
    var scrt = $(window).scrollTop();
   
    if(scrt>secoff)
        {
 $(".navbar").css("backgroundColor","rgba(0,0,0,0.5)")  
        }
    else
    { 
        $(".navbar").css("backgroundColor","#101010")
    }
  
})

$(".navbar a").click(function(){
    var ah=$(this).attr("href");
    var d =$(ah).offset().top-50;
    $("body").animate({scrollTop:d},2000)
    
})

$(".btn").click(function(){
    var ah=$(this).attr("href");
    var d =$(ah).offset().top-50;
    $("body").animate({scrollTop:d},2000)
    
})


new WOW().init();

//$(".prog progress-bar1").animate({width:79%},2000)

  












