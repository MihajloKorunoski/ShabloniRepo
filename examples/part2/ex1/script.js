$(document).ready(function(){
    let pull = $('#pull');
    let menu = $('nav ul');

    $(pull).on('click',function (e){
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function (){
       let w = $(window).width();
       if(w > 600 && menu.is(':hidden')){
           menu.removeAttr('style');
       }
    });

    $('nav a').click(function (event){
        event.preventDefault();
        let targetPage = $(this).attr('href');

        $('#items').fadeOut(300, function (){
            $(this).load(targetPage + " #items").fadeIn(300);
        });
    });

    $("nav a").hover(function (){
        $(this).toggleClass("active");
    });

    $(".content").hover(function (){
        $(this).effect("bounce", { times: 3}, 300);
    });
});