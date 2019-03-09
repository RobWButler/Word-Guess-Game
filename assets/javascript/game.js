
var answers = ["VAMPIRE","MEDUSA","CARMILLA","SKELETON","DRACULA","BELMONT","CASTLE"]
var word = answers[Math.floor(Math.random() * answers.length)];

var blank = [];
for (i = 0; i < word.length; i++) {
    blank[i] = "_";
}

function nextLevel() {
    location.reload();
  }

var remnant = word.length;

var guesses = {
    correct: 0,
    incorrect: 0,
    totalguess: 0,
    chances: 8,

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
                    var nextBtn = document.createElement("button");
                    var btnText = document.createTextNode("Next Level");
                    nextBtn.appendChild(btnText);
                    document.getElementById("btn").appendChild(nextBtn); 
                    
                }
            }
        }

    }

    else {
            guesses.wrongGuess();
            document.getElementById("wrong").innerHTML = guesses.incorrect; 
            guesses.chances = guesses.chances - 1

            var space = document.getElementById("used-letters");
            var guessedletters = document.createTextNode(letter + " ");
            space.appendChild(guessedletters);
            
            if (guesses.chances === 0) {
                
                document.getElementById("endmessage").textContent = "GAME OVER"; 
                var nextBtn = document.createElement("button");
                var btnText = document.createTextNode("Try Again");
                nextBtn.appendChild(btnText);
                document.getElementById("btn").appendChild(nextBtn); 
            }

    };

    guesses.total();
    document.getElementById("total").innerHTML = guesses.chances;


    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}
