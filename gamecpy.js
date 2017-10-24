
function startGame () {
  var playGame = prompt ("Would you like to play a game?");
  if (playGame === "yes") {
    var username = prompt ("Please enter your name");
    startCombat(name);
  }
}

startGame();

function startCombat(name) {
    var username = name;
    var userPoints = 40;
    var computerPoints = 10;
    var computerLives = 0;

    function getDamage() {
      return Math.floor(Math.random() *5) + 1;


    }
    while (userPoints > 0) {
      var fightAgain = prompt ("attack or quit");

      if (fightAgain.toLowerCase() === "attack") {
        userPoints -= Math.floor(Math.random() *2) + 1;
        computerPoints -= Math.floor(Math.random() *2) + 1;
        console.log(username + " health points " + userPoints);
        console.log("Almighty Grants " + " health points " + computerPoints);

          if (userPoints <= 0) {
            console.log("You Lost!")
          } else if (computerPoints <=0 && computerLives === 2) {
            console.log("You Win!");
          } else if (computerPoints <=0) {
            computerPoints = 10;
            computerLives++;
            console.log("You've won this round " + computerLives + " rounds to go.");
          }
      } else if (fightAgain.toLowerCase() === "quit") {
         console.log("Come back when your ready!");
         break;
       }
     }
   }
