function add() {
    let newItem = $("#itemInput").val();
    if (newItem === "") {
        return;
    }
    $("#itemInput").val("");
    $("#selectable").append("<li class='ui-widget-content'>" + newItem + "</li>");
}

function delet() {
    $.each($("#selectable > li"), function (index, object) {
        if ($(object).hasClass("ui-selected")) {
            $(object).remove();
        }
    });
    update();
}

function update() {
    var items = "";
    $.each($("#selectable > li"), function (index, object) {
        if ($(object).hasClass("ui-selected")) {
            items += $(object).html() + " ";
        }
    });
    $("#selectedItems").html(items);
}

$("#selectable").bind("mousedown", function(e) {
    e.metaKey = true;
}).selectable({
    selected: function(event, ui) {
        update();
    },
    unselected: function(event, ui) {
        update();
    }
});
