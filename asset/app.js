var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var yourGuess = [];
var letter;
var numberOfGuessLeft = 9;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];



function startGame() {
    numberOfGuessLeft = 9;
    yourGuess = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    // document.querySelector("#win").innerHTML = win;
    // document.querySelector("#lose").innerHTML = lose;
    document.querySelector("#guess-left").innerHTML = numberOfGuessLeft;
    document.querySelector("#your-guess").innerHTML = yourGuess;
}

startGame();


document.onkeyup = function(event) {
    letter = event.key.toLowerCase();
    console.log(letter);
    if (letter === computerGuess) {
        win ++;
        document.querySelector("#win").innerHTML = win;
        startGame();
    } else {
        numberOfGuessLeft--;
        if(numberOfGuessLeft < 1) {
            lose ++;
            document.querySelector("#lose").innerHTML = lose;
            startGame();
        } else {
            yourGuess.push(letter);
            document.querySelector("#guess-left").innerHTML = numberOfGuessLeft;
            document.querySelector("#your-guess").innerHTML = yourGuess;
        }
    }

}



