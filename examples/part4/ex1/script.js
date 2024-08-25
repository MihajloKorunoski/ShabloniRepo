$(document).ready(function () {
    $(".button").hover(function () {
            $(this).attr("src", "button-hover.png");
            $(this).addClass("button-hover");
        },
        function () {
            $(this).attr("src", "button.png");
            $(this).removeClass("button-hover");
        }
    );
});