$(document).ready(function() {
    $("#bookDialog").dialog({
        autoOpen: false,
        modal: true,
        width: '50%',
        buttons: {
            "Add": function() {
                let title = $('#bookTitle').val().trim();
                let author = $('#bookAuthor').val().trim();
                let comment = $('#bookComment').val().trim();

                if(title && author && comment) {
                    let entry = `<div class="book-entry"><h3>${title}</h3><p>by ${author}</p><p>${comment}</p></div>`;
                    $('#bookList').append(entry);

                    $('#bookTitle').val('');
                    $('#bookAuthor').val('');
                    $('#bookComment').val('');

                    $(this).dialog("close");
                }
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addBookBtn").on("click", function() {
        $("#bookDialog").dialog("open");
    });
});
