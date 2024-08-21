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

    $(".tile").hover(function(){
        $(this).toggleClass("active");
    });

    $('.tile').click(function(){
        const tileId = $(this).attr('id');
        alert(`You clicked on ${tileId.toUpperCase()}!`);
    });
});