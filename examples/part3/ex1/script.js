$(document).ready(function(){

    $("#dialog").dialog({
        autoOpen: true,
        modal: true,
        buttons: {
            "Got it!": function(){
                $(this).dialog("close");
            }
        }
    });

    $("button.navigation").click(function(){
        let divId = $(this).attr('title');

        $('.tab-content').hide();
        $('#' +divId).fadeIn();

        $('button.navigation').removeClass('active');
        $(this).addClass('active');
    });

    $('button.navigation').button();

    $('button.navigation').on('keydown', function(e){
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
            let currentIndex = $('button.navigation').index(this);
            let newIndex = (e.key === 'ArrowRight') ? currentIndex + 1 : currentIndex - 1;
            newIndex = (newIndex + $('button.navigation').length) % $('button.navigation').length;
            $('button.navigation').eq(newIndex).focus().click();
        }
    })
});