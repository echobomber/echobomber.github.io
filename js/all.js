//scroll top btn
//Get the button
var mybutton = document.getElementById("scrollTopBtn");
window.onscroll = function() {scrollFunction()};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 &&document.body.clientWidth > 768) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//
//openNav
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginright = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginright= "0";
}
//https://www.astralweb.com.tw/css-ellipsis/
//text-wllipsis carousel
$(function(){
    var len = 70; // 超過70個字以"..."取代
    $(".JQellipsis-header").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
//text-wllipsis
$(function(){
    var len = 50; // 超過50個字以"..."取代
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});
//news-ellipsis
$(function(){
    var len = 50; // 超過50個字以"..."取代
    $(".JQellipsis-article").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});




