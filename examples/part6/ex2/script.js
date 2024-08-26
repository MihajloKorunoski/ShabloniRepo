$(document).ready(function () {

    $("#progressbar").progressbar({
        value: 0
    });

    const progressbarValue = $("#progressbar").find(".ui-progressbar-value");

    progressbarValue.css({
        "background": "red"
    });

    $('#password-input').on('input', function(){
        const score = calculateStrength($(this).val());

        if (score === 1) {
            progressbarValue.css("background", "red");
        } else if (score === 2) {
            progressbarValue.css("background", "yellow");
        } else if (score === 3){
            progressbarValue.css("background", "green");
        }

        let progressScore = score * 33;

        if (progressScore === 99) {
            progressScore++;
        }

        $("#progressbar").progressbar({
            value: progressScore
        });

    });

    function calculateStrength(password){
        let result= 0;
        const specialChars = /[<>()@!#$%^&*[\]_+{}?|]/;

        result += /[a-zA-Z]+/.test(password) ? 1 : 0;
        result += /[0-9]+/.test(password) ? 1 : 0;
        result += specialChars.test(password) ? 1 : 0;

        return result;
    }
});