let data = [
    {
        value: "oblivion",
        label: "Oblivion",
        desc: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
        rating: "7.0/10"
    },
    {
        value: "enders-game",
        label: "Ender's Game",
        desc: "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, a genocidal alien race which nearly annihilated the human race in a previous invasion.",
        rating: "6.6/10"
    },
    {
        value: "elysium",
        label: "Elysium",
        desc: "In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth. A man takes on a mission that could bring equality to the polarized worlds.",
        rating: "6.6/10"
    },
    {
        value: "edge-of-tomorrow",
        label: "Edge of Tomorrow",
        desc: "A military officer is brought into an alien war against an extraterrestrial enemy who can reset the day and know the future. When this officer is enabled with the same power, he teams up with a Special Forces warrior to try and end the war.",
        rating: "7.9/10"
    }
];

function populateList(movies) {
    $(".selectable").empty();
    $.each(movies, function(i, item) {
        $(".selectable").append("<li class='ui-widget-content' data-index=" + i + ">" +item.label + "</li>");
    });
    $(".selectable").selectable();
}

function showData(index) {
    let item = data[index];
    $("#title").html(item.label);
    $("#desc").html(item.desc);
    $("#rating").html(item.rating);
}

function selectMovie(index) {
   $(".ui-selected").removeClass("ui-selected");
   $($('.selectable li')[index]).addClass("ui-selectable");
   showData(index);
}

$(document).ready(function(){
    $("#low-level").hide();

    let index = -1;
    populateList(data);

    $(".selectable").selectable();

    $('.selectable li').mousedown(function (){
        index = parseInt($(this).attr("data-index"));
        showData(index);

        $("#low-level").show();
        $("#high-level").hide();
    });

    $("#next").click(function (){
        index = (index + 1) % data.length;
        selectMovie(index);
    });

    $("#prev").click(function (){
        index = index - 1;
        if (index < 0)
            index = data.length - 1;
        selectMovie(index);
    });

    $("#random").click(function (){
        index = Math.floor(Math.random() * data.length);
        selectMovie(index);
    });

    $('#top').click(function (){
        $("#low-level").hide();
        $("#high-level").show();
    });

    $("#search").on("input", function (){
        let searchTerm = $(this).val().toLowerCase();
        let filteredData = data.filter(movie => movie.label.toLowerCase().includes(searchTerm));
        populateList(filteredData);
    })
});