//start page
//create timer
//high score page

var firstButton = document.getElementById("question-1-button")
var secondButton = document.getElementById("question-2-button")
var thirdButton = document.getElementById("question-3-button")

//

firstButton.onclick = function () {
    document.getElementById("first-page").setAttribute("class", "hide")
    document.getElementById("second-page").removeAttribute("class")
}

secondButton.onclick = function () {
    document.getElementById("second-page").setAttribute("class", "hide")
    document.getElementById("third-page").removeAttribute("class")
}

thirdButton.onclick = function () {
    document.getElementById("third-page").setAttribute("class", "hide")
    document.getElementById("fourth-page").removeAttribute("class")
}


