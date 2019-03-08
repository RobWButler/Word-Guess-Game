
var answer = ["C", "O", "N", "G", "R", "A", "T", "U", "L", "A", "T", "I", "O", "N", "S"]
var blank = ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"]

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

        for(index = 0; index < blank.length; index++) {
            if (blank[index] === letter) {
                blank[index] = letter
                document.getElementById("blank").innerHTML = letter
            }
        }

    }

    else {
        guesses.wrongGuess();
        document.getElementById("wrong").innerHTML = guesses.incorrect;

    };

    guesses.total();
    document.getElementById("total").innerHTML = guesses.totalguess;


    console.log(guesses.correct, guesses.incorrect, guesses.totalguess);

}