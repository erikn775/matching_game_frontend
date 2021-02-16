const leaderUrl = 'http://127.0.0.1:3000/leaderboards'
const formButton = document.getElementById("leader-display")
const form = document.getElementById("leader-form")
const submitButton = document.getElementById("leader-submit")
let scoreForm = document.getElementById("score").value
let timerForm = document.getElementById("time").value
let moveForm = document.getElementById("moves").value
let nameForm = document.getElementById("name")
//let nameText = document.querySelector(#)



function fetchleaderboard(){
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(leaderData => console.log(leaderData))
}

function addToLeaderboard(){
       // event.preventDefault()

        let leaderObj = {
            nameForm, scoreForm, timerForm, movesForm
        }

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(leaderObj)
        }

        fetch(leaderUrl, config)
        .then(response => response.json())
        .then(response => console.log(response))
    
}

function displayForm(){
    formButton.addEventListener('click', function(){
        form.style.display = 'block';
    })
}

function newLeader(){
    submitButton.addEventListener('click', function(event){
        event.preventDefault()
        console.log(nameForm.value)
        console.log(moveForm)
        console.log(timerForm)
    })
}