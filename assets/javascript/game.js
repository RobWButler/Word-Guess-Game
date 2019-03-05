var guesses = {
    correct: 0,
    incorrect: 0,
    totalguess: 0,

    total: function() {
        this.totalguess = this.incorrect + this.correct;
    },

    rightGuess: function() {
        this.correct = this.correct + 1;
    },
    
    wrongGuess: function() {
        this.incorrect = this.incorrect + 1;
    },
}

var answer = "Congratulations!"
var blank = "________________"

//guessing i need to somehow replace the index of the blank array with the correct letter vars, ie, answer[0] -> blank[0]
//a loop, maybe?

document.onkeyup = function(event) {

    var letter = event.key;

    var n = answer.includes(letter);

    if (n) {
        guesses.rightGuess();
        document.getElementById("right").innerHTML = guesses.correct;
        document.getElementById("word").innerHTML = letter
    }

    else {
        guesses.wrongGuess();
        document.getElementById("wrong").innerHTML = guesses.incorrect;

    };

    guesses.total();
    document.getElementById("total").innerHTML = guesses.totalguess;


    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}