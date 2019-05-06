// Create array for words 
var words = ["Hodor", "Ygritte", "Tywin", "Eddard", "Renly", "Robb", "Catelyn", "Theon", "Margaery", "Missandei"]

// Create variables to hold the number of wins, guesses, and guessed
var wins = 0

// Create variables that hold references to the places in the HTML where I want to display things: wins, current word, guesses, and guessed.
var winsText = document.getElementById("wins-text");
var wordsText = document.getElementById("words");

// Create browser events
var currentWord = words[Math.floor(Math.random() * words.length)];
    // When key pressed, reveal letter - if else statement for if letter is part of current word reveal here else reveal there...??
    

    // When key pressed, reduce number of guesses remaining by 1 unless key has already been pressed

    // When # of guesses=0 show "The Night is Dark and Full of Terrors. You Lose!"

    // When all letters in word revealed, wins=++1 and show "What do we say to the god of Death? Not Today. You Win!"

    // When Win or Lose, generate new word
    
    // Display the user guesses and wins.
    winsText.textContent = "wins: " + wins;
    wordsText.textContent = currentWord;
    