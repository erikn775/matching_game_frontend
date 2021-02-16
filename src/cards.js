const cardUrl = 'http://127.0.0.1:3000/card_stacks/';
const cardStackUrl = '/cards';
const cardList = document.querySelector(".grid-container");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes');
let moveCount = 0;
let card = document.getElementsByClassName(".card");
let openedCards = document.getElementsByClassName(".open");
let shuffled = 0;
let theme = document.querySelector('#themes');
let flippedCard = document.getElementsByClassName('flipped');
let matchedCard = document.getElementsByClassName('matched');
let firstCard;
let secondCard;
let clickCount = 0;
let cardId;
let cardTheme;
const endModal = document.getElementById('endModal');
const openModal = document.getElementById('openModal');
const replayButton = document.getElementById('replay');
const moveDiv = document.getElementById("move-counter");
const moveHeader = document.getElementById("end-move");
const topTimer = document.getElementById("top-timer");
const endTimer = document.getElementById("end-timer");
let minute = 0, second = 0;
const endScore = document.getElementById("end-score")
let score = 100000

function addCardDropDown() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            let mappedId = cardData.map(card => card.id);
            let mappedTheme = cardData.map(card => card.theme);
            for(let i = 0; i < mappedId.length && mappedTheme.length; i++){
                const newOption = document.createElement("option");
                newOption.value = mappedId[i];
                newOption.text = mappedTheme[i];
                dropDown.append(newOption);
            }
        })
}

function fetchBacks() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            cardId = cardData.map(card => card.id)
            cardTheme = cardData.map(card => card.back)
            if (cardId[theme.value - 1] == theme.value){
                for(let i = 0; i < 20; i++){
                   displayBacks(i); 
                }
            }
        })
}

function fetchCards() {
    fetch(cardUrl + theme.value + cardStackUrl)
        .then(resp => resp.json())
        .then(cardData => {  
            const cards = cardData.map(card => card.face);
            const double = doubleCards(cards);
            shuffled = shuffle(double);
        })   
}

function displayBacks(back){
    const newDiv = document.createElement("div")
    newDiv.id = `${back}`
    newDiv.classList = 'hidden'
    newDiv.innerHTML = cardTheme[theme.value - 1]
    cardList.append(newDiv);
}

function resetBack(card){
    if(card.classList === 'matched'){
        //don't reset back
    }
    else{
        card.innerHTML = cardTheme[theme.value - 1]
        card.classList = 'hidden'
    }
    
}

function resetClick(){
    clickCount = 0;
}

function handleCardClick() {
    cardList.addEventListener('click', function(event){
        clickCount += 1;
        if(clickCount === 1){
            const clickedDiv = document.getElementById(`${event.target.id}`)
            firstCard = shuffled[`${event.target.id}`];
            clickedDiv.classList = 'flipped'
            clickedDiv.innerHTML = firstCard;
        }
        if(clickCount === 2){
            const clickedDiv = document.getElementById(`${event.target.id}`)
            secondCard = shuffled[`${event.target.id}`];
            clickedDiv.classList = 'flipped'
            clickedDiv.innerHTML = secondCard;
            matched();
        }
    });
    
}

function matched(){
    if(firstCard === secondCard) {
        flippedCard[0].classList = "matched"
        flippedCard[0].classList = "matched"
        gameOver();
        resetClick();
        moveTopCounter();
    }
    else{
        setTimeout(function(){
            resetBack(flippedCard[0])
            resetBack(flippedCard[0])
        }, 1000);
        resetClick();
        moveTopCounter();
    }
}




function doubleCards(cards){
    let double = []
    for(let i = 0; i < cards.length; i++){
        double.push(cards[i])
        double.push(cards[i])
    }
    return double
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

function startGame(){
    openModal.style.display = 'block'
    searchButton.addEventListener('click', function(){
        openModal.style.display = 'none'
    })
}

function gameOver(){
    if(matchedCard.length === 20){
        endModal.style.display = 'block'
        moveEndCounter();
        endTimer.innerHTML = 'Time: ' + minute + ' min ' + second + ' sec';
        timerForm = 'Time: ' + minute + ' min ' + second + ' sec';
        moveCount = 0;
        replayButton.addEventListener('click', function(event){
           openModal.style.display = 'block'
           endModal.style.display = 'none'
        })
    }
}

function moveTopCounter(){
    moveCount++;
    moveDiv.innerHTML = `Move Count: ${moveCount}`;
}

function moveEndCounter(){
    moveHeader.innerHTML = `Number of Moves: ${moveCount}`
    moveForm = moveCount
    let newScore = score - (moveCount * 1923)
    endScore.innerHTML = `Score: ${newScore}`
}

function timer(){
    
    let interval;
    interval = setInterval(function(){
        topTimer.innerHTML = 'Timer: ' + minute + ' min ' + second + ' sec';
        second++;
        if(second === 60){
            minute++;
            second = 0;
        }
    }, 1000)
    
}













  







