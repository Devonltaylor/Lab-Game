
// Start of the game
var start = document.getElementById("start");
var userName=""
start.onclick =  function () {
    var userName = prompt("what is your name");
    hide(userName);
    function hide (userName) {
    document.getElementById("start").style.display="none";
    document.getElementById("second_page").style.display="block";
    }
}

var healButton = document.getElementById("heal");
  healButton.onclick = function () {
  player.heal();
  document.getElementById("healStatus").value = (player.healCount += 1);
};

var quitButton = document.getElementById("quit");
  quitButton.onclick = function () {
    alert("GAME OVER");
};

//characters traits

var player = {
  name: "",
  healthPoints: 40,
  wins: 0,
  healCount: 0,
  generateAttackDamage: function () {
    return Math.floor(Math.random() * 3) + 1
  },
  heal: function () {
    this.healthPoints += Math.floor(Math.random() * 10) + 1}
  };
// Grants traits
var grant = {
  name: "Almighty Grant",
  health: 10,
  generateAttackDamage: function () {
    return Math.floor(Math.random() * 3) + 1
  }
};


// attack function
var startAttack = document.getElementById("attack");
attack.onclick =  function (startCombat) {
    player.healthPoints -= grant.generateAttackDamage();
    grant.health -= player.generateAttackDamage();
    document.getElementById("playerSpan").innerHTML = player.healthPoints;
    document.getElementById("grantSpan").innerHTML = grant.health;

    document.getElementById("playerStatus").value = (player.healthPoints -= grant.generateAttackDamage());
    document.getElementById("grantStatus").value = (grant.health -= player.generateAttackDamage());


  if (grant.health <=0 && player.healthPoints > 0) {
      player.wins ++;
      grant.health=10;
      if (player.wins < 3) {
        grant.health = 10;
      }
    }

if (grant.health <= 0 && player.healthPoints>0) {
  grant.health - 10
  palyer.wins ++;
  document.getElementById("wins").value=player.wins;

}
};
