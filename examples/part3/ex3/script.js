$(document).ready(function(){
    $("#dialog").dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "Got it!": function() {
                $(this).dialog('close');
            }
        }
    });

    $(".tab-title").click(function(){
        const tabId = $(this).attr("id").replace("-tab", "");
        $(".tab-content").removeClass("active");
        $(`#${tabId}-content`).addClass("active");
    });

    $(".menu").menu();

    $('.menu li a').on('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' '){
            $(this).click();
        }
    });
});