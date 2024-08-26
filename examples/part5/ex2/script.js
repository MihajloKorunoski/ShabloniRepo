$(document).ready(function (){
    let availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $("#tags").autocomplete({
        source: availableTags,
        minLength: 2,
        delay: 100,
        autoFocus: true,
        classes: {
            "ui-autocomplete": "highlight"
        }
    });
});