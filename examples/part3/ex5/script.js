$(document).ready(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        animate: 200
    });

    $(".accordion-expand-all").click(function (e) {
        e.preventDefault();
        $("#accordion .ui-accordion-header").each(function (){
            if(!$(this).hasClass("ui-state-active")){
                $(this).next().slideDown();
                $(this).addClass("ui-state-active");
            }
        })
    });

    $(".accordion-collapse-all").click(function (e) {
        e.preventDefault();
        $("#accordion .ui-accordion-header").each(function (){
            if($(this).hasClass("ui-state-active")){
                $(this).next().slideUp();
                $(this).removeClass("ui-state-active");
            }
        })
    })
})