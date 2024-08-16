$(document).ready(function () {
    $("#orderedList").addClass("red");

    $("#orderedList li").click(function () {
        $(this).toggleClass("blue");
    });

    $("#orderedList2").hover(
        function () {
            $(this).addClass("green");
        }, function () {
            $(this).removeClass("green");
        }
    );

    $("#orderedList2 li:has(ul)").click(function (){
        $(this).children("ul").children("li").toggleClass("highlight");
    });

    $("body").append("<button id='toggleList'>Toggle Second List</button>");
    $("#toggleList").click(function (){
        $("orderedList2").toggle("slow");
    });

    $("#orderedList").dblclick(function (){
        $(this).animate({
            opacity: 0.5,
            marginLeft: "20px"
        }, 1000).animate({
            opacity: 1,
            marginLeft: "0px"
        },1000);
    });
});sdfdsfdsfdsdsfdss