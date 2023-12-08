$(document).ready(function () {
    $('#list').children().addClass('urlBold');

    $('#change').click(function () {
        $('#list ol').toggleClass('urlBold');
    });
});