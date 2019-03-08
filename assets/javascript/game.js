
var answers = ["javascript","monkey","amazing","pancake"]
var word = answers[Math.floor(Math.random() * answers.length)];

var blank = [];
for (i = 0; i < word.length; i++) {
    blank[i] = "_";
}


var guesses = {
    correct: 0,
    incorrect: 0,
    totalguess: 0,

    rightGuess: function() {
        this.correct = this.correct + 1;
    },
    
    wrongGuess: function() {
        this.incorrect = this.incorrect + 1;
    },

    total: function() {
        this.totalguess = this.incorrect + this.correct;
    },

}


//guessing i need to somehow replace the index of the blank array with the correct letter vars, ie, answer[0] -> blank[0]
//a loop, maybe?


document.getElementById("blank").textContent = blank.join(" ")


document.onkeyup = function(event) {

    var letter = event.key.toLowerCase();

    if (word.includes(letter)) {

        guesses.rightGuess();
        document.getElementById("right").innerHTML = guesses.correct;

        for(var j = 0; j < word.length; j++) {
            if (word[j] === letter) {            
                blank[j] = letter;
                document.getElementById("blank").textContent = blank.join(" ")
            }
        }

    }

    else {

        guesses.wrongGuess();
        document.getElementById("wrong").innerHTML = guesses.incorrect; 

        var space = document.getElementById("used-letters")
        var guessedletters = document.createTextNode(letter + " ");
        space.appendChild(guessedletters);                         
    
    };

    guesses.total();
    document.getElementById("total").innerHTML = guesses.totalguess;


    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}