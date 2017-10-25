// Asking to play game
function startGame () {
  var playGame = prompt ("Would you like to play a game?");
  if (playGame === "yes") {
    var username = prompt ("Please enter your name");
    startCombat(username);
  }
}

startGame(); // Starts Game

function startCombat(playerName) {
    var username = {
      health = 40; //health for user
      heal = 2;
      name = Playername;
      gamesWon: 0;
      playerAttackDamage: function(){
          return Math.floor(Math.random() *3) + 1;

      healing: function(){
          return Math.floor(Math.random() *10) + 1;
      }
    }
}
};


// for the computer
var computer = {
  Lives= 10; //health for computer
  name: "The all Mighty Grant"
  gamesWon: 0;
  grantAttackDamage: function(){
      return Math.floor(Math.random() *5) + 1;
 }
};

    //Games is being played
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

    // this will end the game if the user types quit
      } else if (fightAgain.toLowerCase() === "quit") {
         console.log("Come back when your ready!");
         break;
       }
     }
   }
