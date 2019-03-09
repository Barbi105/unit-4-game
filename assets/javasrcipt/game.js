//Game with 4 crystals and random results

$(document).ready(function(){

// Random generated number (serves as our "health level")
    var Random = Math.floor(Math.random()* 101 + 19)
    $("#randomNumber").text(Random);

// 4 crystals each with a different random number between 1 - 12

    var c1 = Math.floor(Math.random()* 11 + 1)
        console.log("The first crystal's power level is " + c1);
    var c2 = Math.floor(Math.random()* 11 + 1)
        console.log("The second crystal's power level is " + c2);
    var c3 = Math.floor(Math.random()* 11 + 1)
        console.log("The third crystal's power level is " + c3);
    var c4 = Math.floor(Math.random()* 11 + 1)
        console.log("The fourth crystal's power level is " + c4);

// clicking the crystals adds the numbers and tallies them in the html

    var wins = 0;
    var losses = 0;
    var userTotal = 0;

// resets game
    function reset(){
        Random = Math.floor(Math.random()* 101 + 19)
        $("#randomNumber").text(Random);
        c1 = Math.floor(Math.random()* 11 + 1);
        c2 = Math.floor(Math.random()* 11 + 1);
        c3 = Math.floor(Math.random()* 11 + 1);
        c4 = Math.floor(Math.random()* 11 + 1);
        userTotal = 0;
        $("#score").text(userTotal);
        console.log("The first crystal's power level is " + c1);
        console.log("The second crystal's power level is " + c2);
        console.log("The third crystal's power level is " + c3);
        console.log("The fourth crystal's power level is " + c4);
    }

// If user score = computer score then user wins
function winner(){
    //wins go up by 1
    wins++;
    // Win section in HTML is updated
    $("#wins").text(wins);
    console.log("User won: " + userTotal + " = " + Random);
    // reset game
    reset();
}
// If user score > than coputer score then user losses
function loser(){
    //losses goes up by 1
    losses++;
    // Losses section in HTML is updated
    $("#losses").text(losses);
    console.log("User lost: " + userTotal + " != " + Random);
    // reset game
    reset();
}

//click function on crystal 1

$("#c1").on("click", function(){
    userTotal = userTotal + c1;
    $("#score").text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal > Random){
            loser();
        }
})

//click function on crystal 2

$("#c2").on("click", function(){
    userTotal = userTotal + c2;
    $("#score").text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal > Random){
            loser();
        }
})

//click function on crystal 3

$("#c3").on("click", function(){
    userTotal = userTotal + c3;
    $("#score").text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal > Random){
            loser();
        }
})

//click function on crystal 4

$("#c4").on("click", function(){
    userTotal = userTotal + c4;
    $("#score").text(userTotal);
        if (userTotal == Random){
            winner();
        }
        else if (userTotal > Random){
            loser();
        }
});
});