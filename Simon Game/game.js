//completed exercise for the Simon Game

var buttonColours = ["red", "blue", "green", "yellow"]; //Array with colours
var gamePattern = []; // empty Array
var userClickedPattern = []; // empty array

var started = false; // to keep track of the game, if its started or not
var level = 0;

// when a keypress for the 1st time call nextSequence()
//changes h1 to the level number when the game has started
$(document).keypress(function() {
      if (!started) {
        $("#level-title").text("Level " + level );
          nextSequence();
          started = true;
        }
      });

    $(".btn").click(function() {
      var userChosenColour = $(this).attr("id"); //stores the id of the button that gets clicked
      userClickedPattern.push(userChosenColour); //adds this to back of array
      playSound(userChosenColour);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length-1); //last awnser in users selection sequence
    });

function checkAnswer(currentLevel){
  //If the most recent user anser is the same as game pattern then log success otherwise wrong
  if (gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
    // checking users sequence is finished
    if (userClickedPattern.length === gamePattern.length){
      setTimeout (function (){
        nextSequence(); // calling nextSequence after 1000 millisecond delay
      }, 1000);
      }
    } else {
      playSound("wrong"); //plays wrong sound
      //adds CSS class to whole body and removes it after 200 milliseconds
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
      startOver(); //calls the function to restart the game
    }
  }



    function nextSequence() { //new function

      userClickedPattern = []; //resetting variable to empty for next level
      level++; //increases level by 1 each time function is run
      $("#level-title").text("level " + level);
      var randomNumber = Math.floor(Math.random() * 4); //random number between 1 and 3
      var randomChosenColour = buttonColours[randomNumber]; //select a random colour to a random number
      gamePattern.push(randomChosenColour); //add random colour chosen to end of array

      //Using jQuery to select the button with the same ID as randomChosenColour
      //Then using jQuery to animate a flash of the button
      $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      //Play sound of colour pressed
      playSound(randomChosenColour);
    }

//adds CSS class pressed to buttons so when buttons are pressed they "flash"
    function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");
      setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
    }

    function playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    }

// when game is restarted because of wrong anwser this function is implimented
// game states get reverted to starting variable contents
    function startOver() {
      level = 0;
      gamePattern = [];
      started = false;
    }


