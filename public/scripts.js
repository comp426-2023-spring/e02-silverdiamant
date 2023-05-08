// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
let resultVisible;

function showHideShots() {
    let check = document.getElementById('opponent');

    if (check.checked == true) {
        $('.shots').show()
    } else {
        $('.shots').hide()
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
}

function calculateResults() {

}