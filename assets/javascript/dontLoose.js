function start() {


	for (var i = 0; i < characters.length; i ++) {

		choices += $("<div id=" + characters[i].name + "> <img src=" + characters[i].avatar + " alt=" + characters[i].name + "><br> HP: " + characters[i].hp +
			"<br> Damage: " + characters[i].damage + " </div>");

	}

	$("#chose").html(choices);

	$("#instructions").html("Pick your Character");




}




//take out the chosen character and place it in the "player" div



function userChoice() {

    $(player).detach();

    $("#player").html("Your Player");

    $("#player").append(player);

    $("#instructions").html("Pick your Opponent");



}



//take out the chosen character and place it in the "player" div


function userOpponent() {

    $(opponent).detach();

    $("#opponent").html("Your Opponent");

    $("#opponent").append(opponent);

    $("#instructions").html("ATTACK!");

}
