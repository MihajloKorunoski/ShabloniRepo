$(document).ready(function (){
    let tabLinks = $('.tab-links');
    let tabContent = $('.tab-content');

    tabLinks.click(function (){
        tabLinks.removeClass('active');
        tabContent.hide();

        $(this).addClass('active');
        let tabId = $(this).data('id');
        $('#' + tabId).show();
    })

    tabLinks.first().click();
})