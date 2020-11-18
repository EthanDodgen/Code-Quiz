//start page
//score tracker
//high score page
//timer
//end page

//push question into id from array
//push answers into id's from array
//create if/else statement for correct/incorrect answer
//save score, clear container, and continue to next question

//array of object question/answers
var questions = [
{
    age: "How old am I?",
    answer: ["33","34","89","9"]
},
{
    eye: "What Color are My Eyes?",
    answer: ["Brown", "Hazel", "Blue", "Green"]
},
{
    birth: "Where was I born?",
    answer: ["California", "Tennessee", "Texas", "France"]
},
{
    name: "Whats My Mothers Name?",
    answer: ["Susan", "Lucy", "Kyle", "Levonia"]
}
]

var startButton = document.getElementById("start-button")

var button1 = document.getElementById("question-1-button")
var button2 = document.getElementById("question-2-button")
var button3 = document.getElementById("question-3-button")
var button4 = document.getElementById("question-4-button")

function mainQuiz () {
    startButton.onclick = function () {
        document.getElementById("begin").setAttribute("class", "hide")
        document.getElementById("quiz").removeAttribute("class")
    }

    //question 1
    function start (){
        document.getElementById("question").innerHTML = questions[0].age

        document.getElementById("question-1-button").innerHTML = questions[0].answer[0]
        document.getElementById("question-2-button").innerHTML = questions[0].answer[1]
        document.getElementById("question-3-button").innerHTML = questions[0].answer[2]
        document.getElementById("question-4-button").innerHTML = questions[0].answer[3]
        
        document.getElementById("quiz-buttons").addEventListener("click", second)
    }
    start()
    
    //question 2
    function second (){
        document.getElementById("question").innerHTML = questions[1].eye

        document.getElementById("question-1-button").innerHTML = questions[1].answer[0]
        document.getElementById("question-2-button").innerHTML = questions[1].answer[1]
        document.getElementById("question-3-button").innerHTML = questions[1].answer[2]
        document.getElementById("question-4-button").innerHTML = questions[1].answer[3]

        document.getElementById("quiz-buttons").addEventListener("click", third)

    }
    
    //question 3
    function third () {
        document.getElementById("question").innerHTML = questions[2].birth

        document.getElementById("question-1-button").innerHTML = questions[2].answer[0]
        document.getElementById("question-2-button").innerHTML = questions[2].answer[1]
        document.getElementById("question-3-button").innerHTML = questions[2].answer[2]
        document.getElementById("question-4-button").innerHTML = questions[2].answer[3]

        document.getElementById("quiz-buttons").addEventListener("click", fourth)

    }

    //question 4
    function fourth () {
        document.getElementById("question").innerHTML = questions[3].name

        document.getElementById("question-1-button").innerHTML = questions[3].answer[0]
        document.getElementById("question-2-button").innerHTML = questions[3].answer[1]
        document.getElementById("question-3-button").innerHTML = questions[3].answer[2]
        document.getElementById("question-4-button").innerHTML = questions[3].answer[3]
    }
}
mainQuiz()














