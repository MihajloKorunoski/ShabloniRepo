$(document).ready(function() {
    $(".social li a strong").css("opacity", "0");

    $(".social li").hover(function(){
        $(this).stop()
            .fadeTo(500, 1)
            .siblings()
            .stop()
            .fadeTo(500, 0.5);
        $("a strong", this)
            .stop()
            .animate({
                opacity: 1,
                top: "60px"
            }, 300);
    },
        function(){
        $(this).stop()
            .fadeTo(500, 1)
            .siblings()
            .stop()
            .fadeTo(500, 1);
        $("a strong", this)
            .stop()
            .animate({
                opacity: 0,
                top: "80px"
            },300);
    });
});