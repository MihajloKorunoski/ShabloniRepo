$(document).ready(function(){
    $("#datepicker1").datepicker();


    // $("#datepicker2").datepicker(
    //    $.datepicker.regional["mk"]);
    // od nekoja prichina ne raboti ova

    $("#datepicker2").datepicker({
        closeText: 'Затвори',
        prevText: '&#x3C',
        nextText: '&#x3CE',
        currentText: 'Денес',
        monthNames: ['Јануари','Февруари','Март','Април','Мај','Јуни',
            'Јули','Август','Септември','Октомври','Ноември','Декември'],
        monthNamesShort: ['Јан','Фев','Мар','Апр','Мај','Јун',
            'Јул','Авг','Сеп','Окт','Ное','Дек'],
        dayNames: ['Недела','Понеделник','Вторник','Среда','Четврток','Петок','Сабота'],
        dayNamesShort: ['Нед','Пон','Вто','Сре','Чет','Пет','Саб'],
        dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Са'],
        weekHeader: 'Сед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ' ЛГ'
    });

    $("#datepicker3").datepicker({
        numberOfMonths: 2,
        stepMonths:2
    });

    $("#datepicker4").datepicker({
        appendMonth: "d MM yy",
        changeMonth: true,
        changeYear: true,
        duration: "slow",
        showAnim: "fold",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
        monthNames: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули",
            "Август", "Септември", "Октомври", "Ноември", "Декември"]
    });
});