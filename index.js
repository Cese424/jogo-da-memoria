// Made by Alexandre ;)

//onload basic things
document.getElementById("winner").style.visibility = "hidden"
document.getElementById("lost").style.visibility = "hidden"

//array shuffler
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

//color array
var color_array = ["red", "red", "green", "green", "blue", "blue", "yellow", "yellow", "purple", "purple", "cyan", "cyan"]
shuffle(color_array);


//macros
function id(n) {
    return document.getElementById(n)
}

function color_check(z) {
    return document.getElementById("b" + z).style.backgroundColor
}

function button_color(x) {
    document.getElementById("b" + x).style.backgroundColor = color_array[x]
}

function visibility(x) {
    return document.getElementById("b" + x).style.visibility;
}

function disable(a) {
    document.getElementById("b" + a).disabled = true
    setTimeout(function () {
        document.getElementById("b" + a).disabled = false;
    }, 1000);
}

//game
var round = 0
var comparador_1
var comparador_2
var id_1
var id_2
var rodadas_restantes = 10

function button_disable() {
    return disable(1), disable(2), disable(3), disable(4), disable(5), disable(6), disable(7), disable(8), disable(9), disable(10), disable(11), disable(0);
}

function rodadas() {
    return id("n_rodadas").innerHTML = rodadas_restantes;
}

function perder() {
    if (rodadas_restantes == 0) {
        id("game-box").style.visibility = "hidden"
        id("lost").style.visibility = "visible"
    }
}

function comparador() {
    if (comparador_1 == comparador_2) {
        id(id_1).style.visibility = "hidden"
        id(id_2).style.visibility = "hidden"
        ganhador()
    } else {
        id(id_1).style.backgroundColor = null
        id(id_2).style.backgroundColor = null
        rodadas_restantes = rodadas_restantes - 1
        perder()
        rodadas()
    }
}

function ganhador() {
    if (visibility(1) == "hidden" && visibility(2) == "hidden" && visibility(3) == "hidden" && visibility(4) == "hidden" && visibility(5) == "hidden" && visibility(6) == "hidden" && visibility(7) == "hidden" && visibility(8) == "hidden" && visibility(9) == "hidden" && visibility(10) == "hidden" && visibility(11) == "hidden" && visibility(0) == "hidden") {
        return document.getElementById("winner").style.visibility = "visible", document.getElementById("game-box").style.visibility = "hidden";
    }
}

function game(a) {
    if (round == 0) {
        button_color(a)
        comparador_1 = color_check(a)
        id_1 = "b" + a
        round = 1
    } else if (round == 1) {
        button_color(a)
        comparador_2 = color_check(a)
        id_2 = "b" + a

        button_disable()
        setTimeout(function () {
            comparador();
        }, 1000);

        round = 0
    }
}