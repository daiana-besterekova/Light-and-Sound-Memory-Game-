/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// global constants
var clueHoldTime; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var duration = 25; //length of screen timer in seconds
var timerset;
var timerreset;
var sel = document.getElementById("selectid");
var trials; 

function startGame() {
  //initialize game variables
  progress = 0;
  pattern = [];
  var a;
  var maximum;
  var val;
  maximum = document.getElementById("selectid").value;
  val = parseInt(maximum) + 1;
  trials = trialsnumber();
  for (let i = 0; i < trials; i++) {
    pattern.push(getRandomInt(1, val));
  }
  console.log("pattern: " + pattern);
  mistakes = 0;
  document.getElementById("strike").innerHTML = "Strikes: " + 0;
  document.getElementById("trials").innerHTML = "Trials left: " + trials;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}


// Stops the game
function stopGame() {
  // swap the Start and Stop buttons
  gamePlaying = false;
  trials = 10;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strike").innerHTML = "Strikes: " + 0;
  document.getElementById("trials").innerHTML = "Trials left: ";
  resetTimer();
}

// Playing a single clue 
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clueHoldTime = 700;
  guessCounter = 0;
  context.resume();
  disablebuttons();
  let delay = nextClueWaitTime;
  //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    console.log(clueHoldTime);
    clueHoldTime -= 40;
    console.log(clueHoldTime);
  }
  setTimeout(enablebuttons, delay);
  timerset = setTimeout(startTimer, delay);
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        resetTimer();
        progress++;
        playClueSequence();
        trials -= 1;
        document.getElementById("trials").innerHTML = "Trials left: " + trials;
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!

    mistakes += 1;
    console.log(mistakes);
    if (mistakes > 0 && mistakes < 4) {
      mistakeGame();
      document.getElementById("strike").innerHTML = "Strikes: " + mistakes;
    }
    if (mistakes >= 4) {
      loseGame();
    }
  }
}

// Alerts if a mistake was made
function mistakeGame() {
  alert("You made a mistake. Choose the correct sound again");
}

//Starts timer and returns an anonymous function
function startTimer() {
  var time = duration;
  timerset = setInterval(function () {
    time--;
    document.getElementById("para").innerHTML = "Countdown: " + time;
  }, 1000);

  timerreset = setTimeout(loseGame, duration * 1000);
  return timerset;
}

//Stops the game if lost 
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//Stops the game and shows confetti 
function winGame() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });
  alert("You won the game!");
  stopGame();
}

//Resets the countdown back to 25
function resetTimer() {
  clearTimeout(timerreset);
  clearInterval(timerset);
  document.getElementById("para").innerHTML = "Countdown: " + duration;
}

function playTone(btn, len) {
  Playalphabet(btn);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    Playalphabet(btn);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  tonePlaying = false;
}

//get a random number between min (1) and max (the number of trials chosen) 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Sound Synthesis Functions
const freqMap = {
  1: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-a.mp3?v=1649808431395",
  2: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-b.mp3?v=1649808433268",
  3: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-c.mp3?v=1649808435934",
  4: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-d.mp3?v=1649808438813",
  5: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-e.mp3?v=1649808442398",
  6: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-g.mp3?v=1649808446079",
  7: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-f.mp3?v=1649808448658",
  8: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-h.mp3?v=1649808452815",
  9: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-i.mp3?v=1649808455754",
  10: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-j.mp3?v=1649808458355",
  11: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-l.mp3?v=1649808460876",
  12: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-m.mp3?v=1649808463390",
  13: "https://cdn.glitch.global/db462597-c149-4eba-9293-cad1b539c3bd/letter-k.mp3?v=1649808466189",
};



// play audio 
function Playalphabet(btn) {
  let audio = new Audio(freqMap[btn]);
  audio.play();
}

// show the image 
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

//clear the image from the button 
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}


// declaring the difficulty of the game based on input 
// dependeing on the chose option, the buttons will be hidden or visible 
function difficulty() {
  if (document.getElementById("selectid").value == "8") {
    document.getElementById("button5").style.visibility = "visible";
    document.getElementById("button6").style.visibility = "visible";
    document.getElementById("button7").style.visibility = "visible";
    document.getElementById("button8").style.visibility = "visible";
    document.getElementById("button9").style.visibility = "hidden";
    document.getElementById("button10").style.visibility = "hidden";
    document.getElementById("button11").style.visibility = "hidden";
    document.getElementById("button12").style.visibility = "hidden";
    document.getElementById("button13").style.visibility = "hidden";
  } else if (document.getElementById("selectid").value == "4") {
    document.getElementById("button5").style.visibility = "hidden";
    document.getElementById("button6").style.visibility = "hidden";
    document.getElementById("button7").style.visibility = "hidden";
    document.getElementById("button8").style.visibility = "hidden";
    document.getElementById("button9").style.visibility = "hidden";
    document.getElementById("button10").style.visibility = "hidden";
    document.getElementById("button11").style.visibility = "hidden";
    document.getElementById("button12").style.visibility = "hidden";
    document.getElementById("button13").style.visibility = "hidden";
  } else if (document.getElementById("selectid").value == "13") {
    document.getElementById("button5").style.visibility = "visible";
    document.getElementById("button6").style.visibility = "visible";
    document.getElementById("button7").style.visibility = "visible";
    document.getElementById("button8").style.visibility = "visible";
    document.getElementById("button9").style.visibility = "visible";
    document.getElementById("button10").style.visibility = "visible";
    document.getElementById("button11").style.visibility = "visible";
    document.getElementById("button12").style.visibility = "visible";
    document.getElementById("button13").style.visibility = "visible";
  }
}

// define the number of trials based on the input 
function trialsnumber() {
  if (document.getElementById("selecttrials").value == "5") {
    return trials = 5;
  } else if (document.getElementById("selecttrials").value == "10") {
    return trials = 10;
  } else if (document.getElementById("selecttrials").value == "15") {
    return trials = 15;
  }
}


//disable all buttons in a div 
function disablebuttons() {
  var el = document.getElementById("gameButtonArea"),
    all = el.getElementsByTagName("button"),
    i;
  for (i = 0; i < all.length; i++) {
    all[i].disabled = true;
  }
}

//enable all buttons in a div 
function enablebuttons() {
  var el = document.getElementById("gameButtonArea"),
    all = el.getElementsByTagName("button"),
    i;
  for (i = 0; i < all.length; i++) {
    all[i].disabled = false;
  }
}
//Page Initialization
//Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
