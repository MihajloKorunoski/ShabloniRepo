$(document).ready(function(){
    let isFlippedTile = false;
    let firstTile, secondTile;
    let matches = 0;
    let guesses = 0;
    let lockBoard = false;  // This will prevent clicking when two tiles are already open

    function initializeGame() {
        const teamNames = ['Lakers', 'Celtics', 'Bulls', 'Heat', 'Warriors', 'Nets', 'Raptors', 'Spurs'];
        let tiles = [];
        teamNames.forEach(function(team) {
            tiles.push({ name: team }, { name: team });
        });
        shuffle(tiles);

        $('#game-board').empty();
        tiles.forEach(function(tile, index) {
            $('#game-board').append(`<div class="memory-tile" data-team="${tile.name}"><span>${tile.name}</span></div>`);
        });

        resetGame();  // Ensure everything is reset
        attachTileClickHandlers();
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function attachTileClickHandlers() {
        $('.memory-tile').off('click').on('click', function(){
            if (lockBoard) return;  // Prevent further clicks
            let $this = $(this);
            if($this.hasClass('flipped')) return;

            $this.addClass('flipped');

            if(!isFlippedTile) {
                isFlippedTile = true;
                firstTile = $this;
            } else {
                secondTile = $this;
                lockBoard = true;  // Lock the board until checking is done
                guesses++;
                $('#click-counter').text(guesses);
                checkForMatch();
            }
        });
    }

    function checkForMatch() {
        if (firstTile.data('team') === secondTile.data('team')) {
            matches++;
            resetBoard();

            if(matches === 8) {
                alert('Game over! You found all matches!');
            }
        } else {
            setTimeout(function() {
                firstTile.removeClass('flipped');
                secondTile.removeClass('flipped');
                resetBoard();
            }, 1000);
        }
    }

    function resetBoard() {
        [isFlippedTile, lockBoard] = [false, false];
        [firstTile, secondTile] = [null, null];
    }

    function resetGame() {
        matches = 0;
        guesses = 0;
        $('#click-counter').text(guesses);
        $('.memory-tile').removeClass('flipped');
        resetBoard();
    }

    $('#reset-game').click(function() {
        initializeGame();
    });

    initializeGame();
});
