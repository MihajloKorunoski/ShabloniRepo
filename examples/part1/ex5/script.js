$(document).ready(function () {

    $("li").not(":has(ul)").addClass("bordered");

    $("li").hover(function (){
        $(this).toggleClass("red");
    });

    $("body").append("<button id='hideChildren'>Hide children</button>");
    $("#hideChildren").click(function (){
        $("li:has(ul)").toggleClass("hidden");
    });

    $("#orderedList li").click(function (){
        $(this).toggleClass("blue");
    });

    $("#orderedList2 li").click(function(){
        $(this).closest("ol").toggleClass("highlight");
    });

    $("#orderedList2 li ul li").hover(function(){
        $(this).toggleClass("green");
    })
});