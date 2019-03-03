var guesses = {
    incorrect: 0,
    correct: 0,
    totalguess: 0,

    total: function() {
        this.totalguess = this.incorrect + this.correct;
    },

    rightGuess: function() {
        this.incorrect = this.incorrect + 1;
    },
    
    wrongGuess: function() {
        this.correct + this.correct + 1;
    },
}

var answer = "Congratulations!"

document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();

    if (letter === answer[-1]) {
        guesses.wrongGuess();
    }

    else {
        guesses.rightGuess();
    };

    guesses.total();

    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}



