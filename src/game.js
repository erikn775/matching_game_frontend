
let moveCount = 0;
let shuffled = 0;
let firstCard;
let secondCard;
let clickCount = 0;
let cardId;
let cardTheme;
let minute = 0, second = 0;
let score = 100000;
let newScore;
let firstEvent;


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

function flipCardOne(event, clickedDiv){
    firstEvent = event.target.id
    firstCard = shuffled[`${firstEvent}`];
    clickedDiv.classList = 'flipped'
    clickedDiv.innerHTML = firstCard;
}

function flipCardTwo(event, clickedDiv){
        secondCard = shuffled[`${event.target.id}`];  
        clickedDiv.classList = 'flipped'
        clickedDiv.innerHTML = secondCard;
    if(flippedCard.length === 2){
        matched();
    }
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
        }, 500);
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
    
}

function gameOver(){
    if(matchedCard.length === 20){
        endModal.style.display = 'block'
        moveEndCounter();
        endTimer.innerHTML = 'Time: ' + minute + ' min ' + second + ' sec';
        timerForm = 'Time: ' + minute + ' min ' + second + ' sec';
        moveCount = 0;
    }
}

function moveTopCounter(){
    moveCount++;
    moveDiv.innerHTML = `Move Count: ${moveCount}`;
}

function moveEndCounter(){
    moveHeader.innerHTML = `Number of Moves: ${moveCount}`
    moveForm = moveCount
    newScore = score - (moveCount * 1654) - (minute * 7320) - (second * 122)
    endScore.innerHTML = `Score: ${newScore}`
}

function timer(){
    
    interval = setInterval(function(){
        topTimer.innerHTML = 'Timer: ' + minute + ' min ' + second + ' sec';
        second++;
        if(second === 60){
            minute++;
            second = 0;
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval)
    minute = 0;
    second = 0;
}

function clearBoard(){
    for(let i = 0; i < 20; i++){
        matchedDiv[0].remove()
    }
    shuffled = 0;
}