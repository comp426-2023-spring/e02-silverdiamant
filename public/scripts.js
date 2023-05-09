// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
let resultVisible;

function showHideShots() {
    let check = document.getElementById('opponent');
    let checkRPS = document.getElementById('rps');
    let checkRPSLS = document.getElementById('rpsls');

    if (check.checked == true) {
        $('.shots').show()
    } else {
        $('.shots').hide()
    }

    if (checkRPS.checked == true && check.checked == true) {
        document.getElementById("lizard").style.visibility = "hidden";
        document.getElementById("spock").style.visibility = "hidden";
        document.getElementById("lizard_label").style.display = 'none';
        document.getElementById("spock_label").style.display = 'none';
    }
    if (checkRPSLS.checked == true && check.checked == true) {
        document.getElementById("lizard").style.visibility = "visible";
        document.getElementById("spock").style.visibility = "visible";
        document.getElementById("lizard_label").style.display = "inline";
        document.getElementById("spock_label").style.display = "inline";
    }
}

function startOver() {                   
    $("#userinput").show();   
    document.getElementById('userinput').reset();
    showHideShots();
    resultVisible = false;
    showResults();
}

function showResults() {
    let you = document.getElementById("you");
    let opponent = document.getElementById("game_opponent");
    let result = document.getElementById("game_result");
    let reset = document.getElementById("startover2");
    if (resultVisible == true) {
        you.style.visibility = "visible";
        opponent.style.visibility = "visible";
        result.style.visibility = "visible";
        reset.style.visibility = "visible";
    } else {
        you.style.visibility = "hidden";
        opponent.style.visibility = "hidden";
        result.style.visibility = "hidden";
        reset.style.visibility = "hidden";
    }
}

async function playGame() {

    let game = $('input[type=radio][name=game]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();
    let baseurl = window.location.href + 'app/'
    console.log(baseurl)
    let url = baseurl + game + '/play/' + shot
    console.log(url)

    let response = await fetch(url)
    let result = await response.json()
    console.log(result)
    
    $("#userinput").hide();
    resultVisible = true;
    showResults();

    let you = document.getElementById("you");
    let opponent = document.getElementById("game_opponent");
    let gResult = document.getElementById("game_result");
    
    you.innerHTML = "You: " + result.player;
    opponent.innerHTML = "Opponent: " + result.opponent;
    gResult.innerHTML = "Result: " + result.result;

}
