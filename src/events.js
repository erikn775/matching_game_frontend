const cardList = document.querySelector(".grid-container");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes');
let card = document.getElementsByClassName(".card");
let openedCards = document.getElementsByClassName(".open");
let theme = document.querySelector('#themes');
let flippedCard = document.getElementsByClassName('flipped');
let matchedCard = document.getElementsByClassName('matched');
const endModal = document.getElementById('endModal');
const openModal = document.getElementById('openModal');
const replayButton = document.getElementById('replay');
const moveDiv = document.getElementById("move-counter");
const moveHeader = document.getElementById("end-move");
const topTimer = document.getElementById("top-timer");
const endTimer = document.getElementById("end-timer");
const endScore = document.getElementById("end-score");
const matchedDiv = document.getElementsByClassName("matched");

function eventListeners(){
    searchButton.addEventListener('click', function(event){
        event.preventDefault();
        fetchBacks();
        fetchCards();
        timer();
        
    });
    
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        Leaderboard.addToLeaderboard();
        window.alert("Score Posted")
        form.style.display = 'none'
    });

    cardList.addEventListener('click', function(event){
        if(event.target.classList.value === "matched"){
            
        }
        else {
            clickCount += 1;
            let clickedDiv = document.getElementById(`${event.target.id}`)
            if(clickCount === 1){
                flipCardOne(event, clickedDiv);
            }
            if(clickCount >= 2){
                if(firstEvent != event.target.id){
                    flipCardTwo(event, clickedDiv);
                }
                else{
                clickCount = 1
                }
            }
        }
    });

    replayButton.addEventListener('click', function(){
        openModal.style.display = 'block'
        endModal.style.display = 'none'
        stopTimer();
        clearBoard();
    });

    searchButton.addEventListener('click', function(){
        openModal.style.display = 'none'
    })
}