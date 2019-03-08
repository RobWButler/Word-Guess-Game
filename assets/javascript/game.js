
var answers = ["VAMPIRE","MEDUSA","CARMILLA","SKELETON","DRACULA","BELMONT","CASTLE"]
var word = answers[Math.floor(Math.random() * answers.length)];

var blank = [];
for (i = 0; i < word.length; i++) {
    blank[i] = "_";
}

var remnant = word.length;

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

    var letter = event.key.toUpperCase();

    if (word.includes(letter)) {


        for(var j = 0; j < word.length; j++) {
            if (word[j] === letter) {          

                if (blank[j] === "_") {
                    remnant--;
                    guesses.rightGuess();
                    document.getElementById("right").innerHTML = guesses.correct;
                }

                blank[j] = letter;
                document.getElementById("blank").textContent = blank.join(" ");


                if (remnant <= 0) {
                    document.getElementById("endmessage").textContent = "LEVEL CLEAR!"; 
                }
            }
        }

    }

    else {

        if (blank[j] =! "_") {

            guesses.wrongGuess();
            document.getElementById("wrong").innerHTML = guesses.incorrect; 

            var space = document.getElementById("used-letters");
            var guessedletters = document.createTextNode(letter + " ");
            space.appendChild(guessedletters);                         
        };
    };

    guesses.total();
    document.getElementById("total").innerHTML = guesses.totalguess;


    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}
