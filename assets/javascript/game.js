var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 9;
		 var guessChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		 	

			if (letters.indexOf(userGuess) < 100) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 9;
                    guessChoices = [];
                    window.alert("You guessed correctly! Well done"); 
				}

				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 9;
				losses ++;
				guessChoices = [];

				
			}

            var displayWin = 
           "<p>Wins: " + wins + "</p>"

            var displayLoss =
            "<p>Losses: " + losses + "</p>"

            var displayGuessLeft =
            "<p>Guesses Left: " + numGuesses + "</p>" 

            var displayGuessSoFar =
			"<p>Guesses So Far: " + guessChoices.join(", ") + "</p>";

            document.getElementById("wins").innerHTML = displayWin;
            
            document.getElementById("loss").innerHTML = displayLoss;

            document.getElementById("gl").innerHTML = displayGuessLeft;

            document.getElementById("gsf").innerHTML = displayGuessSoFar;

			
			}
		};