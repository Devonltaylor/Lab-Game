
var hello = prompt("Would you like to play a game?");
var computer = "Almighty Grant!"
  if (hello === "yes") {
    var username = prompt ("Please enter your name");
    var userPoints = 40;
    var computerPoints = 10;
    var computerLives = 0;

    while (userPoints > 0) {
      userPoints -= Math.floor(Math.random() *2) + 1;
      computerPoints -= Math.floor(Math.random() *2) + 1;
      console.log(username + " health points " + userPoints);
      console.log(computer + " health points " + computerPoints);
        if (userPoints <= 0) {
          console.log("You Lost!")
        }  else if (computerPoints <=0 && computerLives === 2) {
          console.log("You Win!");
        } else if (computerPoints <=0) {
          computerPoints = 10;
          computerLives++;
          console.log("You've won this round " + computerLives + " rounds to go.");
        }
    }
  }
  else {
    console.log("Come back when your ready!");
  }
