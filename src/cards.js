const cardUrl = 'http://localhost:3000/card_stacks/'
const cardStackUrl = '/cards'
const cardList = document.querySelector(".grid-container");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes')
let count = 0
let card = document.getElementsByClassName(".card")
let openedCards = document.getElementsByClassName(".open")
let shuffled = 0;
let theme = document.querySelector('#themes')
let flippedCard = document.getElementsByClassName('flipped')
let matchedCard = document.getElementsByClassName('matched')
let firstCard;
let secondCard;
let clickCount = 0;
let cardId;
let cardTheme;
const endModal = document.getElementById('endModal')
const openModal = document.getElementById('openModal')
const replayButton = document.getElementById('replay')

function addCardDropDown() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            let mappedId = cardData[0]["id"];
            let mappedTheme = cardData[0]["theme"];
            
            //add for loop back when multiple card stacks are created
                const newOption = document.createElement("option");
                newOption.value = `${mappedId}`;
                newOption.text = `${mappedTheme}`;
                dropDown.append(newOption);
            
        })
}

function fetchBacks() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            cardId = cardData.map(card => card.id)
            cardTheme = cardData.map(card => card.back)
            if (cardId == theme.value){
                for(let i = 0; i < 20; i++){
                   displayBacks(i); 
                }
            }
        })
}

function displayBacks(back){
    const newDiv = document.createElement("div")
    newDiv.id = `${back}`
    newDiv.classList = 'hidden'
    newDiv.innerHTML = cardTheme[0]
    cardList.append(newDiv);
}

function resetBack(card){
    if(card.classList === 'matched'){
        //don't reset back
    }
    else{
        card.innerHTML = cardTheme[0]
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
        // changed class to matched
        console.log('matched')
    }
    else{
        setTimeout(function(){
            resetBack(flippedCard[0])
            resetBack(flippedCard[0])
        }, 1000);
        resetClick();
        console.log('not matched')
    }
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
}

function gameOver(){
    if(matchedCard.length === 20){
        endModal.style.display = 'block'
        replayButton.addEventListener('click', function(event){
           console.log('clicked')
        })
        //game is over
        //end timer
        //end move count
        //display ending block
    }
}






  







