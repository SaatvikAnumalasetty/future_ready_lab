/*eslint-env browser*/
function playGame(){
    alert("First eneter a low number, then a high number. Then, guess a random number between them.");


    //get the low and high boung
    //We added parseInt() function because we would want the value as a number than string
    var from = parseInt(prompt("Enter the lower bound"));

    var to = parseInt(prompt("Enter the higher bound"));

    var target= Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a  number between" + from + " and " + to));

    var totalGuesses = 1;
    
    //loop until user guesser correct number
    while(currentGuess != target){
        if (currentGuess < target){
        currentGuess = parseInt(prompt("Enter a higher number"));
    
            totalGuesses++;
        }else if (currentGuess > target){
            currentGuess = parseInt(prompt("Enter a lower number"));
            totalGuesses++
        }
    }

    alert(" You got the right answer. The attempts it took are "  + totalGuesses
    );
}
    