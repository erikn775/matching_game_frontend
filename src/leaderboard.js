const leaderUrl = 'http://127.0.0.1:3000/leaderboards'
const formButton = document.getElementById("leader-display")
const form = document.getElementById("leader-form")
function fetchleaderboard(){
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(leaderData => console.log(leaderData))
}

function addToLeaderboard(event){
        event.preventDefault()
        let name = document.querySelector("#name").value
        let score = document.querySelector("#score").value
        let time = document.querySelector("#time").value
        let moves = document.querySelector("#moves").value

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