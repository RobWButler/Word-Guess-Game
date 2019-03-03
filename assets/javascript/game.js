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

document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();

    var n = answer.includes(letter);

    if (n) {
        guesses.rightGuess();
    }

    else {
        guesses.wrongGuess();
    };

    guesses.total();

    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}