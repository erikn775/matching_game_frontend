const leaderUrl = 'http://127.0.0.1:3000/leaderboards'
const formButton = document.getElementById("leader-post")
const form = document.getElementById("leader-form")
const submitButton = document.getElementById("leader-submit")
let scoreForm = document.getElementById("score")
let timerForm = document.getElementById("time").value
let moveForm = document.getElementById("moves").value
let nameForm = document.getElementById("name")
const table = document.getElementById("table-body")
const leaderModal = document.getElementById("leaderModal")
const homeButton = document.getElementById("home")
const leaderHome = document.getElementById("leader-show")
const endLeaderButton = document.getElementById("leader-display")

function fetchleaderboard(){
    fetch(leaderUrl)
        .then(resp => resp.json())
        .then(leaderData => {
            for(let i = 0; i < leaderData.length; i++){
                const newRow = document.createElement("tr");
                let rowData = leaderData[i]
                
                const new1 = document.createElement("td");
                const new2 = document.createElement("td");
                const new3 = document.createElement("td");
                const new4 = document.createElement("td");
                new1.textContent = rowData.name
                new2.textContent = rowData.score
                new3.textContent = rowData.moves
                new4.textContent = rowData.time

                table.appendChild(newRow)
                newRow.appendChild(new1) 
                newRow.appendChild(new2)
                newRow.appendChild(new3)
                newRow.appendChild(new4)
            }
        })
        
}


function addToLeaderboard(){
    let name = nameForm.value;
    let score = `${newScore}`;
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

