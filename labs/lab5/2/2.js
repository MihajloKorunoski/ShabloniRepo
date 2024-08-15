$(document).ready(function() {
    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2012"
    });

    $("#selectable").selectable();

    $("#submit").click(function() {
        validateAndSubmit();
    });
});

function validateAndSubmit() {
    const fields = ['#name', '#surname', '#password', '#birthday'];
    let allValid = true;

    // Validate Fields
    fields.forEach(field => {
        if (!validateField(field)) {
            allValid = false;
        }
    });

    // Process Submission if Valid
    if (allValid) {
        processSubmission();
    }
}

function validateField(field) {
    const value = $(field).val();
    const isError = value === "";
    $(`${field}Error`).toggle(isError);
    styleField(field, isError);
    return !isError;
}

function styleField(field, isError) {
    const style = isError ? {"border": "2px solid red"} : {"border": "1px solid darkgrey"};
    $(field).css(style);
}

function processSubmission() {
    const hobbies = getSelectedHobbies();
    const userInfo = {
        name: $("#name").val(),
        surname: $("#surname").val(),
        password: $("#password").val(),
        birthday: $("#birthday").val(),
        hobbies: hobbies.join(', ')
    };

    displayUserInfo(userInfo);
}

function getSelectedHobbies() {
    return $("#selectable > .ui-selected").map(function() {
        return $(this).text();
    }).get();
}

function displayUserInfo(userInfo) {
    const infoHtml = `Name: ${userInfo.name}<br><br>
                      Surname: ${userInfo.surname}<br><br>
                      Password: ${userInfo.password}<br><br>
                      DateOfBirth: ${userInfo.birthday}<br><br>
                      Hobbies: ${userInfo.hobbies}`;

    $("#dialog").html(infoHtml).dialog({modal: true});
}
