//Pseudocode
//Figure out which keys are needed to play game
//List those keys in a variable array as a "master list" aka computerChoices
//Create variables for wins, losses, number of guesses and guess choices
//Create a function that says "when a user presses a key", (onkeyup) something happens
//What happens? The computer picks a random letter from computerChoices
//To get a random letter, build an equation: "computerChoices" = "math.floor(Math.random()" x the length of "computerChoices" array
//Stick THAT equation into its own variable called "ComputerGuess"
//Create a variable for the user's guess, signaling an event listener, (key) 
//Create an array identical to "master list" that is used to make comparisons (aka, your letter vs the computer's letter)
//Give it a different name to tell the difference
//Create if statements to prepare the conditions for the function to run
//Write it so that any letter pressed within the length of "letters" array will trigger the function to run
//Create another if statement inside the first one. What will happen if an event key is activated?
//Answer: if activated, compare the key of the user's guess to ComputerGuess. If they are an exact match, add 1 win to the "wins" variable
//If user's guess and ComputerGuess are NOT an exact match:
//Subtract 1 from every number of guesses "numGuess", and tally the guesses with .push()
//When number of guesses left = 0:
//Reset the number of guesses, and add 1 loss to the "losses" variable.


    let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let wins = 0;
		 let losses = 0;
		 let numGuesses = 10;
		 let guessChoices = [];
         
         document.addEventListener("keypress", (e) => {

                let char = e.key
        
                //Regex for Valid Characters i.e. Alphabets. Only accepts lowercase letters.
                let regex = /^[a-z]+$/;
         
                //Validate TextBox value against the Regex.
                let isValid = regex.test(char)
                if (!isValid) {
                    window.alert("Invalid key press. Only lowercase letters are allowed.");
                }
                
            });
         
         document.onkeyup = function(event) {
             
            var char = event.key;
        
		 	let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		 	

			if (letters.indexOf(char) < 100) { //This will always return true

				if (char === computerGuess) {
					wins++;
					numGuesses = 10;
                    guessChoices = [];
                    window.alert("You guessed correctly! Well done!"); 
				}

				if (char != computerGuess) {
                    //This conditional checks to see if any other control buttons have been pressed and sends an error message if so
                    if (event.key === "Shift" || event.key === "Control" || event.key === "CapsLock" || event.key === "Alt" || event.key === "Meta" || event.key === "Backspace" || event.key === "Enter") {
                        window.alert("no");
                        return;
                    }
                  
					numGuesses --;
					guessChoices.push(char);
				}

				if (numGuesses === 0) {

				numGuesses = 10;
				losses ++;
				guessChoices = [];
                
			}

            //This code allows HTML to be dynamically added as the game progresses
            let displayWin = 
           "<p>Wins: " + wins + "</p>"

            let displayLoss =
            "<p>Losses: " + losses + "</p>"

            let displayGuessLeft =
            "<p>Guesses Left: " + numGuesses + "</p>" 

            let displayGuessSoFar =
			"<p>Guesses So Far: " + guessChoices.join(", ") + "</p>";
    

            document.getElementById("wins").innerHTML = displayWin;
            document.getElementById("loss").innerHTML = displayLoss;
            document.getElementById("gl").innerHTML = displayGuessLeft;
            document.getElementById("gsf").innerHTML = displayGuessSoFar;
           
        }
        
    };
    
    
    
