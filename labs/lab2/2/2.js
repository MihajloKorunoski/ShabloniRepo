$(document).ready(function() {
    let menuLink = $('.menu-link');
    function showContent(id) {
        $('.content').addClass('hidden');
        $('#' + id).removeClass('hidden');
    }

    menuLink.click(function() {
        let contentId = $(this).data('for');
        showContent(contentId);
        menuLink.removeClass('active');
        $(this).addClass('active');
    });

    menuLink.first().trigger('click');
});
