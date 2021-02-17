const leaderUrl = 'http://127.0.0.1:3000/leaderboards'
const formButton = document.getElementById("leader-display")
const form = document.getElementById("leader-form")
const submitButton = document.getElementById("leader-submit")
let scoreForm = document.getElementById("score").value
let timerForm = document.getElementById("time").value
let moveForm = document.getElementById("moves").value
let nameForm = document.getElementById("name")




function fetchleaderboard(){
    fetch(leaderUrl)
        .then(resp => resp.json())
        .then(leaderData => console.log(leaderData))
}

function addToLeaderboard(){
    let name = nameForm.value;
    let score = scoreForm;
    let time = timerForm;
    let moves = moveForm;

        let leaderObj = {
            name, score, time, moves
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

