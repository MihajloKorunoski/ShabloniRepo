$(document).ready(function() {
    const movies = [
        { label: "Oblivion", desc: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself." },
        { label: "Ender's Game", desc: "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, a genocidal alien race which nearly annihilated the human race in a previous invasion." },
        { label: "Inception", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO." },
        { label: "The Matrix", desc: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence." },
        { label: "Interstellar", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
        { label: "The Dark Knight", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
        { label: "Pulp Fiction", desc: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
        { label: "Forrest Gump", desc: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75." },
        { label: "Fight Club", desc: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more." },
        { label: "The Shawshank Redemption", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
        { label: "The Godfather", desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
        { label: "Schindler's List", desc: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis." },
    ];

    $("#movie-title").autocomplete({
        source: movies,
        select: function(event, ui) {
            $("#movie-description").text(ui.item.desc);
        },
        focus: function(event, ui) {
            $("#movie-title").val(ui.item.label);
            return false;
        }
    });
});
