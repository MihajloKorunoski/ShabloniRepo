$(document).ready(function () {

    let headerH1 = $('.header h1')
    let contentP = $('.content p')

    $('#default-size').click(function () {
        headerH1.css('font-size', '34px')
        contentP.css('font-size', '16px')
    })

    $('#increase-size').click(function () {
        changeFontSize(headerH1, 1.5)
        changeFontSize(contentP, 1.5)
    })

    $('#decrease-size').click(function () {
        changeFontSize(headerH1, 2 / 3)
        changeFontSize(contentP, 2 / 3)
    })

    function changeFontSize(element, scaleFactor) {
        let currentSize = parseFloat(element.css('font-size'))
        let newSize = currentSize * scaleFactor
        animateFontSize(element, newSize + 'px')
    }

    function animateFontSize(element, size) {
        element.animate({
            'font-size': size
        }, 300)
    }
})