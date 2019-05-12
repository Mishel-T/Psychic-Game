// Create array for words 
var words = ["HODOR", "YGRITTE", "TYWIN", "EDDARD", "RENLY", "ROBB", "CATELYN", "THEON", "MARGAERY", "MISSANDEI"]

// Create variables to hold the number of wins, guesses, and guessed
var wins = 0
var guessesRemaining = 10

// Create variables that hold references to the places in the HTML where I want to display things: wins, current word, guessesRemaining, and lettersGuessed.
var winsText = document.getElementById("wins-text");
var wordsText = document.getElementById("words");
var guessesRemainingText = document.getElementById("guessesRemaining");
var lettersGuessedText = document.getElementById("lettersGuessed");

// Create browser events
// generate random word
var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);
//hide random word with dashes 
var s;
var answerArray = [];
var incorrectArray = [];
var allGuesses = [];

for (var i = 0; i < currentWord.length; i++) {
 answerArray[i] = "_";
 s = answerArray.join(" ");
 wordsText.textContent = s;
 guessesRemainingText.textContent = guessesRemaining;

}

// When key pressed, commence function: register key pressed and check if letter has already been pressed
document.onkeyup = function(event) {
    var userKey=event.key.toUpperCase();
    var letters = allGuesses.push(userKey)
    console.log(allGuesses)
    isUsed = false;
  
    
//if else statement for if letter is part of current word reveal here else reveal there...??
for (var i=0; i<currentWord.length; i++) {
    

    //check if key has already been pressed
   
    if  (currentWord.charAt(i)===userKey) {
        answerArray[i]=userKey;
        letter = answerArray.join(" ");
        wordsText.textContent= letter;
     //and decrease gussesRemaining counter by 1 if letter not already pressed
     guessesRemaining--;
     guessesRemainingText.textContent = guessesRemaining;
        }
};

 //document wrong guesses and decrease guessesRemaining counter by 1 - need to debug: why is array picking up letter multiple times and why is it picking up letters in the word when the condition above is suppoesed to be false
   //problem, every time it runs through for loop it will register for each entry in which it does not pick up charAt
   //need to store all userKeys, correct and incorrect, somewhere so I can call them to see if they are duplicates
    
if (allGuesses.indexOf(letters)==-1) {
    incorrectArray.push(userKey);
    console.log(incorrectArray)
    letter = incorrectArray.join(" ");
    lettersGuessedText.textContent = letter;};
    guessesRemaining--;
    guessesRemainingText.textContent = guessesRemaining;

    // When # of guesses=0 alert "The Night is Dark and Full of Terrors. You Lose!"
     if (guessesRemaining === 0 ) {
        alert("The Night is Dark and Full of Terrors. You Lose!")
//reset game
    };
    

    // When all letters in word revealed, wins=++1 and alert "What do we say to the god of Death? Not Today. You Win!"

    // When Win or Lose, generate new word - loop
    
    // Display the user guesses and wins.
    winsText.textContent = "wins: " + wins;
    
   
}
