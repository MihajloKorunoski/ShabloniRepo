$(document).ready(function() {
    $("#date").datepicker({
        defaultDate: new Date(),
        dateFormat: "mm/dd/yy",
        beforeShowDay: function(date) {
            const numOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            const isEvenMonth = numOfDays % 2 === 0;
            const isEnabled = isEvenMonth ? date.getDate() % 2 === 0 : date.getDate() % 2 !== 0;
            return [isEnabled, ""];
        }
    });
});
