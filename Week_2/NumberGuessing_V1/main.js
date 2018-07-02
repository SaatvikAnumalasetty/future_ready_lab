/*eslint-env browser*/
function playGame(){
    alert("First enter a low number, then a high number. Then, guess a random number between them.");


    //get the low and high bound
    //We added parseInt() function because we would want the value as a number than string
    var from = parseInt(prompt("Enter the lower bound"));
    
     while((from < 0) || (from > 1000)){
        from = parseInt(prompt("Enter a number greater than 0 and less than 1000"));
        }
    
      while(isNaN(from)){
        from = parseInt(prompt("Enter a number please"));
    }
    
    // must enter a number not letter
     var to = parseInt(prompt("Enter the higher bound"));
    
     while((to > 1000)|| (to < 0)){
        to = parseInt(prompt("Enter a number greater than 0 and less than 1000"));
                }
    
    while(isNaN(to)){
        to = parseInt(prompt("Enter a number please."));
    }
    // higher bound must be a lower bound
    while(to <= from){
        to = parseInt(prompt("Your higher bound must be greater than lower bound"));
                        }
 //get an integer between [from, to]
//Math.random() returns decimals, used Math.round() to get whole number
    var target= Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess a  number between " + from + " and " + to));
    // user may only enter guess between from 
    var totalGuesses = 1;
    
    // guesses must be only numbers
     while(isNaN(currentGuess)){
        currentGuess = parseInt(prompt("Enter a number please."));
    }
    
    //loop until user guesser correct number
    while(currentGuess != target){
        
        if(from > currentGuess || to < currentGuess){
        currentGuess = parseInt(prompt("You can only guess between your lower and higher bound."));
    }
        
        if (currentGuess < target){
        currentGuess = parseInt(prompt("Enter a higher number"));
    
            totalGuesses++;
        }else if (currentGuess > target){
            currentGuess = parseInt(prompt("Enter a lower number"));
            totalGuesses++
        }
    }

    alert(" You got the right answer. The attempts it took are "  + totalGuesses);
}   