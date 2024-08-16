$(document).ready(function (){
    $("#orderedList").addClass("blue");

    $("#orderedList > li").click(function (){
        $(this).addClass("red");
    });

    $("#orderedList2 > li").hover(
        function(){
            $(this).addClass("green");
        }, function () {
            $(this).removeClass("green");
        }
    );

    $("#orderedList2 li:has(ul)").click(function (){
        $(this).children("ul").children("li").toggleClass("highlight").animate({
            marginLeft: "20px"
        }, 500).animate({
            marginLeft: "0px"
        }, 500);
    });

    $("body").append("<button id='fadeList'>Toggle Fade First List</button>");
    $("#fadeList").click(function (){
        $("#orderedList").toggleClass("fade");
    });

    $("#orderedList2").dblclick(function (){
        $(this).append("<li>New dynamically added item</li>");
    });
})