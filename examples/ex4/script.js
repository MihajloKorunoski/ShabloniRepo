$(document).ready(function () {
    $("#orderedList").find("li").each(function (i) {
        $(this).append("<span class='numbered'> - No " + (i + 1) + "</span>");
    });

    $("#orderedList2").find("li:even").addClass("blue");
    $("#orderedList2").find("li:odd").addClass("green");

    $("#orderedList li").hover(function () {
        $(this).find(".numbered").toggleClass("hidden");
    });

    $("#orderedList2 li").click(function () {
        $(this).toggleClass("highlight");
    });

    $("body").append("<button id='resetColors'>Reset Colors</button>");
    $("#resetColors").click(function () {
        $("#orderedList2 li").removeClass("blue green");
    });

    $("#orderedList").dblclick(function() {
        $(this).fadeOut("slow", function() {
            $(this).fadeIn("slow");
        });
    });
});