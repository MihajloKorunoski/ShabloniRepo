function showStep(index) {
    $("#example-form div:visible").hide();
    $($("#example-form div")[index]).show();

    $("#status span").removeClass('passed active pending');
    $.each($("#status span"), function (i, item){
        if(i<index){
            $(item).addClass('passed');
        } else if(i === index){
            $(item).addClass('active');
        } else {
            $(item).addClass('pending');
        }
    });
}

function updateProgressBar(index) {
    let totalSteps = $("#example-form div").length;
    let progressValue = (index + 1) / totalSteps * 100;
    $("#progressbar").progressbar("value",progressValue);
}

function validateStep(index) {
    let isValid = true;
    let currentStep = $($('#example-form div')[index]);

    currentStep.find('.required').each(function (){
        if($(this).val() === ''){
            $(this).css('border-color', 'red');
            isValid = false;
        } else {
            $(this).css('border-color', '#cccccc');
        }

    });
    if(index === 0){
        let password = $('#password').val();
        let confirmPassword = $('#confirm').val();

        if(password !== confirmPassword){
            $('#password, #confirm').css('border-color', 'red');
            isValid = false;
            alert("Passwords do not match! Please re-enter.");
        } else {
            $('#password, #confirm').css('border-color', '#cccccc');
        }
    }
    return isValid;
}

$(document).ready(function () {

    let index = 0;

    $.each($("#example-form div"), function (i, item) {
        let current = $(item);
        if (i === 0) {
            $("#status").append("<span class ='active'>" + current.find('h3').html() + "</span>");
        } else {
            $("#status").append("<span class ='pending'>" + current.find('h3').html() + "</span>")
        }
    });

    $("#example-form div").hide();
    $("#example-form div:first-child").show();

    $("#progressbar").progressbar({
        value: 0
    });

    $("#completion-dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });

    $("input, li").tooltip();

    $("#next").click(function () {
        if (index < $("#example-form div").length - 1) {
            if (validateStep(index)) {
                index++;
                showStep(index);
                updateProgressBar(index);
            }
        } else {
            if (validateStep(index)) {
                $("#completion-dialog").dialog("open");
            }
        }
    });

    $("#prev").click(function () {
        if (index > 0) {
            index--;
            showStep(index);
            updateProgressBar(index);
        }
    });
});