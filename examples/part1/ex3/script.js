$(document).ready(function(){

    $("#orderedList li:last").hover(function(){
        $(this).addClass("green");
    }, function(){
        $(this).removeClass("green");
    });

    $("#orderedList li:first").click(function(){
        $(this).addClass("red");
    });

    $("#orderedList").dblclick(function (){
        $(this).toggleClass("glow");
    });

    $("#orderedList2 li").click(function (){
        $(this).closest("ol").toggleClass("highlight");
    });

    $("#orderedList2 li:has(ul)").hover(function (){
        $(this).children("ul").slideToggle("slow");
    });

    $("#orderedList2").dblclick(function (){
        $(this).append("<li>New dynamically added item</li>").children("li:last").hide().fadeIn("slow");
    });
})
