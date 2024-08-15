$(function() {
    function customAnimation(show) {
        return function() {
            let tooltip = this;
            const start = { left: 0 };
            const end = { left: 200 };
            const duration = 1000;

            if (show) {
                $(tooltip).animate(start, duration, function() {
                    $(tooltip).animate(end, duration);
                });
            } else {
                $(tooltip).stop();
                $(tooltip).css(start);
            }
        };
    }

    $("#effect").change(function(){
        $(document).tooltip({
            show: {
                effect: $(this).val() === 'myAnimation' ? customAnimation(true) : $(this).val(),
                delay: 50
            },
            hide: {
                effect: $(this).val() === 'myAnimation' ? customAnimation(false) : $(this).val(),
                delay: 50
            },
            position: {
                my: "center bottom-20",
                at: "left top",
                using: function(position, feedback) {
                    $(this).css(position);
                    $("<div>")
                        .addClass("arrow")
                        .addClass(feedback.vertical)
                        .addClass(feedback.horizontal)
                        .appendTo(this);
                }
            }
        });
    });
});
