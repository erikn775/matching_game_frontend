const leaderUrl = 'https://hidden-cliffs-65559.herokuapp.com/leaderboards'
const formButton = document.getElementById("leader-post")
const form = document.getElementById("leader-form")
const submitButton = document.getElementById("leader-submit")
let scoreForm = document.getElementById("score")
let timerForm = document.getElementById("time").value
let moveForm = document.getElementById("moves").value
let nameForm = document.getElementById("name")
const leaderModal = document.getElementById("leaderModal")
const homeButton = document.getElementById("home")
const leaderHome = document.getElementById("leader-show")
const endLeaderButton = document.getElementById("leader-display")
let interval;

class Leaderboard {
    static all = []
    constructor({name, score, moves, time}){
        this.name = name;
        this.score = score;
        this.moves = moves;
        this.time = time;
    
        this.element = document.createElement("td");
        this.table = document.getElementById("table-body")
        this.newRow = document.createElement("tr");
        Leaderboard.all.push(this);
    }

    static fetchleaderboard(){
        fetch(leaderUrl)
            .then(resp => resp.json())
            .then(leaderData => {
                leaderData.forEach(leader => {
                    let leaderItem = new Leaderboard(leader)
                    
                    const new1 = document.createElement("td");
                    const new2 = document.createElement("td");
                    const new3 = document.createElement("td");
                    const new4 = document.createElement("td");
                    new1.textContent = leaderItem.name
                    new2.textContent = leaderItem.score
                    new3.textContent = leaderItem.moves
                    new4.textContent = leaderItem.time

                    leaderItem.table.appendChild(leaderItem.newRow)
                    leaderItem.newRow.appendChild(new1) 
                    leaderItem.newRow.appendChild(new2)
                    leaderItem.newRow.appendChild(new3)
                    leaderItem.newRow.appendChild(new4)
                })
                
            })
            
    }

    static addToLeaderboard(){
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
    
    
    
    static eventListeners(){
        leaderHome.addEventListener('click', function(event){
            event.preventDefault();
            if(Leaderboard.all.length === 0){
                Leaderboard.fetchleaderboard();
            }
            else{
                Leaderboard.all;
            }
            leaderModal.style.display = 'block'
        })

        homeButton.addEventListener('click', function(event){
            event.preventDefault();
            leaderModal.style.display = 'none'
        })
        
        endLeaderButton.addEventListener('click', function(event){
            event.preventDefault();
            if(Leaderboard.all.length === 0){
                Leaderboard.fetchleaderboard();
            }
            else{
                Leaderboard.all;
            }
            leaderModal.style.display = 'block'
        })
        
        replayButton.addEventListener('click', function(){
            endModal.style.display = 'none'
        })

        formButton.addEventListener('click', function(){
            form.style.display = 'block';
        })
    }
}

