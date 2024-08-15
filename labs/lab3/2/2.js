$(document).ready(function(){
    let tab_links = $(".tab-links");
    tab_links.click(function(){
        let target = $(this).data("target");
        $(".tab-content").hide();
        $("#" + target).show();
        $(".tab-links").removeClass("active");
        $(this).addClass("active");
    });
    tab_links.first().click();
});
