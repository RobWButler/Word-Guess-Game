
var answer = ["C", "O", "N", "G", "R", "A", "T", "U", "L", "A", "T", "I", "O", "N", "S"]
var blank = ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"]

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

//    if(wordChoice[i].toLowerCase() == n.toLowerCase()){
//    hiddenWord = setCharAt(hiddenWord,i,n);

document.getElementById("blank").textContent = blank.join(" ")


document.onkeyup = function(event) {

    var letter = event.key.toUpperCase();

    var n = answer.includes(letter);

    if (n) {

        guesses.rightGuess();
        document.getElementById("right").innerHTML = guesses.correct;

        for(i = 0; i < blank.length; i++) {
            if (n) {
                blank.splice(0, 1, letter)
                document.getElementById("blank").innerHTML = blank.join(" ")
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