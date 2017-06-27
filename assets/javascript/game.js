
//set my list of characters
var char1 = {

        id: 0,
		name: "Batman",
		life: 120,
		damage: 15,
		avatar: "assets/images/batmannn.png"

	}

var char2 = {

        id: 1,
		name: "Robin",
		life: 100,
		damage: 10,
		avatar: "assets/images/robin.png"

	}

var char3 = {

        id: 2,
		name: "Catwoman",
		life: 150,
		damage: 25,
		avatar: "assets/images/catwoman.png"

	}

var char4 = {

        id: 3,
		name: "Bane",
		life: 180,
		damage: 28,
		avatar: "assets/images/bane.png"

	}


var characters = [char1, char2, char3, char4];

var player ;

var opponent ;

var choices ;

var damageBoost = 20;

//----------------------------------------- function area --------------------------------------------------------


//creates characters and displays the screen and tells them to chose a character

function start() {


    for (var i = 0; i < characters.length; i ++) {

        choices = $("<div class='userPick' id=" + characters[i].id + "> <img src=' " + characters[i].avatar + " ' alt=" + characters[i].name + "><br> Life: <span class= 'life'>" + characters[i].life + 
            "</span> <br> Damage: <span class= 'damage'> " + characters[i].damage + " </span> </div>");

        $("#chose").append(choices);

    }

    

    $("#instructions").html("PICK YOUR PLAYER");


}



// once you have your opponent and your character:

function attackBtn () {

    opponent.life = opponent.life - player.damage;

    player.life = player.life - opponent.damage;

    player.damage = player.damage + damageBoost;

    $(".playerChoice .life").text(player.life);

    $(".playerChoice .damage").text(player.damage);

    $(".opponentChoice .life").text(opponent.life);


}




// Take out the dead opponent and make the player chose a different one

function changeOpponent () {

    $("#opponent").empty();

    $("#instructions").html("PICK YOUR NEXT VICTIM");

    if (typeof opponent == "undefined"){

            var c = $(this).attr("id");

            opponent = characters[c];

            $(this).detach();

            $(this).addClass("opponentChoice");

        };


}


// Make a you die function

function youDied() {


    $("#instructions").html("YOU DIED");

    

    $("#chose").empty();

    $("#player").empty();

    $("#opponent").empty();

    $("#attack").empty();

    var $loseGif = $('#loseGif');

        grow = function (size) {
            if (size < 50) {
                console.log(size);
                $loseGif.css('width', size + '%');
                $loseGif.css('height', size + '%');
                size++;
                setTimeout(grow, 10, size);
            }
        }

        grow(0);


}



// Make a you win function

function youWin() {


     $("#instructions").html("YOU ARISE AGAIN");

}







//----------------------------------------- game area --------------------------------------------------------



$(document).ready(function() {

    start();


    $(".userPick").click(function(){

        if (typeof player == "undefined") {

            var c = $(this).attr("id");

            player = characters[c];

            $(this).detach();

            $(this).addClass("playerChoice");

            $("#player").html("Your Player");

            $("#player").append(this);

            $("#instructions").html("Pick your Opponent");
            //console.log(player.name);

        }

        else if (typeof opponent == "undefined"){

            var c = $(this).attr("id");

            opponent = characters[c];

            $(this).detach();

            $(this).addClass("opponentChoice");

            $("#opponent").html("Your Opponent");

            $("#opponent").append(this);

            $("#instructions").html("ATTACK!!");

            $("#attack").html("<button id='clickAttack'>ATTACK</button>");
            //console.log(opponent.name);

        }


    }); //end user pick on click


    $("#attack").click(function() {

           opponent.life = opponent.life - player.damage;

           player.life = player.life - opponent.damage;

           player.damage = player.damage + damageBoost;

           $(".playerChoice .life").text(player.life);

           $(".playerChoice .damage").text(player.damage);

           $(".opponentChoice .life").text(opponent.life);


        if (player.life <= 0) {

            youDied()

        }

        if (opponent.life <= 0) {

            opponent = undefined;

            changeOpponent()


        }


        if (player.life <= 0) {

            youDied()

        }

        if (opponent.life <= 0) {

            opponent = undefined;

            changeOpponent()

            console.log(opponent);

        }





    });


$("#restart").click(function(){

    location.reload();

});

    


}); //end document ready


