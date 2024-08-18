$(document).ready(function(){
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons:{
            Proceed: function (){
                let inputData = $("#input-data").val().trim();

                if(inputData === ""){
                    $("#error-message").text("Please enter your name and surname").show();
                } else if (!/^[a-zA-Z]+\s+[a-zA-Z]+$/.test(inputData)){
                    $("#error-message").text("Please enter both a valid first name and surname").show();
                } else {
                    $("#data").html(inputData);
                    $("#dialog").dialog("close");
                }
            }
        }
    });

    $("#modal").click(function(){
        $("#error-message").hide();
        $("#dialog").dialog("open");
    });

});