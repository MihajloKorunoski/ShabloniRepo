$(document).ready(function(){
    $('#mycarousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});