let ourPoints = 2;
let theirPoints = 8;
let castleHealth = 50;
let campHealth = 50;
let gameStarted = false;

console.log("While the opposing armies are equal, each battle has a 50% chance of victory. Whichever side has an advantage receives a bonus to the battle depending on how significant the advantage is. Rolls of 50 and higher are a win while rolls below 50 are a loss. Some troops will die in every battle but the victor will have fewer deaths. The console will log each battle result, showing the natural roll (d100) followed by the final result.");

//UI Updater
function displayNums(){
  if (gameStarted == true){
  document.getElementById("ourPoints").innerHTML = "Army Strength: " + ourPoints;
  document.getElementById("theirPoints").innerHTML = "Horde Strength: " + theirPoints;
  document.getElementById("camp").innerHTML = "Siege Camp Strength: " + campHealth;
  document.getElementById("castle").innerHTML = "Castle Strength: " + castleHealth;
  }
}

function StartGame(){
    start()
    if (!gameStarted){
    gameStarted = true
    StartIntervals();
    document.getElementById("b0").style.backgroundColor = "DimGray";
    document.getElementById("b0").style.color = "black";
    document.getElementById("b0").style.pointerEvents = "none";
    document.getElementById("b4").disabled = false;
    document.getElementById("b1").style.pointerEvents = "auto";
    document.getElementById("b2").style.pointerEvents = "auto";
    document.getElementById("b3").style.pointerEvents = "auto";
    document.getElementById("b4").style.pointerEvents = "auto";
}
}

function StartIntervals(){
  if (gameStarted == true){
setInterval(incrementByOne, 1500);
setInterval(incrementByFour, 9500);
setInterval(incrementByTwelve, 16000);
setInterval(displayNums, 400);
setInterval(CheckLose, 200);
setInterval(CheckWin, 200);
}
}

function AddFighter(){
    if (gameStarted){
    ourPoints++;
    man()
document.getElementById("ourPoints").innerHTML = "Army Strength: " + ourPoints;
document.getElementById("b1").disabled = true;
document.getElementById("b1").style.backgroundColor = "DimGray";
document.getElementById("b1").style.pointerEvents = "none";
setTimeout(function() {
    document.getElementById("b1").disabled = false;
}, 1300);
setTimeout(function() {
    document.getElementById("b1").style.backgroundColor = null;
}, 1300);
setTimeout(function() {
    document.getElementById("b1").style.pointerEvents = "auto";
  }, 1300);
}}

function AddArcher(){
    if (gameStarted){
    ourPoints += 2;
    arr()
document.getElementById("ourPoints").innerHTML = "Army Strength: " + ourPoints;
document.getElementById("b2").disabled = true;
document.getElementById("b2").style.backgroundColor = "DimGray";
document.getElementById("b2").style.pointerEvents = "none";
setTimeout(function() {
    document.getElementById("b2").disabled = false;
}, 2900);
setTimeout(function() {
    document.getElementById("b2").style.backgroundColor = null;
}, 2900);
setTimeout(function() {
    document.getElementById("b2").style.pointerEvents = "auto";
  }, 2900);
}}

function AddKnight(){
    if (gameStarted){
    ourPoints += 4;
    knight()
document.getElementById("ourPoints").innerHTML = "Army Strength: " + ourPoints;
document.getElementById("b3").style.backgroundColor = "DimGray";
document.getElementById("b3").disabled = true;
document.getElementById("b3").style.pointerEvents = "none";
setTimeout(function() {
  document.getElementById("b3").disabled = false;
}, 4500);
setTimeout(function() {
    document.getElementById("b3").style.backgroundColor = null;
}, 4500);
setTimeout(function() {
    document.getElementById("b3").style.pointerEvents = "auto";
  }, 4500);
}}


//Horde Strength Multiplier
function incrementByOne() {
    theirPoints += 1;
  }
function incrementByFour() {
    theirPoints += 4;
  }
  function incrementByTwelve() {
    theirPoints += 12;
  }



  function Battle() {
    if (gameStarted) {
      document.getElementById("b4").style.backgroundColor = "DimGray";
      document.getElementById("b4").disabled = true;
      document.getElementById("b4").style.pointerEvents = "none";
      
      const pointDifference = ourPoints - theirPoints;
      let outcome = Math.random() * 100;
      console.log("Nat roll = " + outcome);
      if (ourPoints > theirPoints) {
        if (pointDifference >= 12) {
          outcome += 50;
        } else if (pointDifference >= 8) {
          outcome += 40;
        } else if (pointDifference >= 6) {
          outcome += 20;
        } else if (pointDifference >= 4) {
          outcome += 10;
        } else if (pointDifference >= 2) {
          outcome += 5;
        }
      } else if (ourPoints < theirPoints) {
        if (pointDifference <= -12) {
          outcome -= 50;
        } else if (pointDifference <= -8) {
          outcome -= 40;
        } else if (pointDifference <= -6) {
          outcome -= 20;
        } else if (pointDifference <= -4) {
          outcome -= 10;
        } else if (pointDifference <= -2) {
          outcome -= 5;
        }
      }
  
      console.log("Roll including modifiers = " + outcome);
  
      if (outcome >= 50) {
        campHealth -= 10;
        ourPoints -= 4;
        theirPoints -= 8;
        win();
      } else {
        castleHealth -= 10;
        ourPoints -= 8;
        theirPoints -= 4;
        lose();
      }
      setTimeout(function() {
        document.getElementById("b4").disabled = false;
        document.getElementById("b4").style.backgroundColor = null;
        document.getElementById("b4").style.pointerEvents = "auto";
      }, 5000);
    }
  }

  //Lose condition
  function CheckLose(){
  if (castleHealth <= 0) {
    gameStarted = false;
    document.getElementById("title").innerHTML = ("Castle Destroyed - You're dead");
    document.getElementById("title").style.color = "red";
    document.getElementById("description").innerHTML = ("The horde has overwhelmed your forces. The castle town is burning and the keep is being pillaged. Refresh the page to try again.");
    document.getElementById("b0").remove();
    document.getElementById("b1").remove();
    document.getElementById("b2").remove();
    document.getElementById("b3").remove();
    document.getElementById("b4").remove();
    document.getElementById("castle").remove();
    document.getElementById("camp").remove();
    document.getElementById("theirPoints").remove();
    document.getElementById("ourPoints").remove();
  }
}

//Win condition
function CheckWin(){
  if (campHealth <= 0) {
    gameStarted = false;
    document.getElementById("title").innerHTML = ("Siege Camp Destroyed!");
    document.getElementById("title").style.color = "green";
    document.getElementById("b0").remove();
    document.getElementById("description").innerHTML = ("The horde and its camp have been defeated. Refresh to play again.");
    document.getElementById("b1").remove();
    document.getElementById("b2").remove();
    document.getElementById("b3").remove();
    document.getElementById("b4").remove();
    document.getElementById("camp").remove();
    document.getElementById("castle").remove();
    document.getElementById("theirPoints").remove();
    document.getElementById("ourPoints").remove();
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === '1') {
    if (gameStarted){
    AddArcher();
    }
  }
});

function win() {
    var audio = new Audio('580310__colorscrimsontears__fanfare-2-rpg.wav');
    audio.play();
  }
  function lose() {
    var audio = new Audio('377571__yudena__monster2_bymondfisch89.ogg');
    audio.play();
  }
  function man() {
    var audio = new Audio('275112__jagadamba__machete_12.wav');
    audio.play();
  }
  function arr() {
    var audio = new Audio('511490__lydmakeren__fx_bowarrow.wav');
    audio.play();
  }
  function knight() {
    var audio = new Audio('522190__mblol__horse-galloping-loop.m4a');
    audio.play();
  }
  function start() {
    var audio = new Audio('40939__7c__7c-drum-roll-intro.mp3');
    audio.play();
  }
