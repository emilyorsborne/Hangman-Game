var words = [
"horse",
"cow",
"rooster",
"donkey",
"piglet",
"goat",
"chicken",
"sheep",
"farmer"
];


document.onkeyup = function(event) {
      //Randomly chooses a word
      var wordToGuess = words[Math.floor(Math.random() * words.length)];
      // Determines which key was pressed.
      var userGuess = event.key;

      var underscore = "";

      userGuessArray = [];

      var usedChars = [];

      var numLettersMatched = 0;

      var livesLeft = 10;
      document.getElementById("lives-left").innerHTML = livesLeft;


      //print to page
      //index of
      var arr = [];
       for(i=0; i<wordToGuess.length; i++) {
        arr.push('-');
       } 
       document.getElementById("word-guess").innerHTML = arr;
       if(wordToGuess.indexOf(userGuess)){
        arr[wordToGuess.indexOf(userGuess)] = userGuess;
        document.getElementById("word-guess").innerHTML = arr;
       } 


     //creates the _ placeholders 
      for(i=0; i<wordToGuess.length; i++) {
        var underscore = underscore + "_ ";
        document.getElementById("word-guess").innerHTML = underscore.toString();
      }


//if guessed letter is wrong puts it in the letters-guessed box
      document.onkeyup = function(event) {

        var key_press = String.fromCharCode(event.keyCode);
        console.log(key_press);
        usedChars.push(key_press)
        document.getElementById('letters-guessed').innerHTML = usedChars.toString();

        }


}



