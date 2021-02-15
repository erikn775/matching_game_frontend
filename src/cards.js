const cardUrl = 'http://localhost:3000/card_stacks/'
const cardStackUrl = '/cards'
const cardList = document.querySelector(".grid-container");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes')
let count = 0
let card = document.getElementsByClassName(".card")
//let cards = [... card]
const backCard = "&#126980"
let openedCards = document.getElementsByClassName(".open")
let shuffled = 0;
let theme = document.querySelector('#themes')
// let displayCard = function (){
//     this.classList.toggle("open");
//     this.classList.toggle("show");
//     this.classList.toggle("disabled");
// }


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

function fetchCards() {
    
    fetch(cardUrl + theme.value + cardStackUrl)
        .then(resp => resp.json())
        .then(cardData => {  
            
            
            const cards = cardData.map(card => card.face);
            const double = doubleCards(cards);
            shuffled = shuffle(double);
            
            // for(let i = 0; i < shuffled.length; i++){
            //     const newDiv = document.createElement("div")
            //     newDiv.classList = "hidden"
            //     debugger
            //     newDiv.innerHTML = `${shuffled[i]}`
            //     cardList.append(newDiv);
                
                    

                    // if (event.target.classList.value === "hidden"){
                    //     newDiv.classList = "open"
                    //     newDiv.innerHTML = 
                    // }
                    
                    
                
            //}
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

function hideCard(card){
    if (card.classList === "hidden") {
        
        card.append(backCard)
    }
}

function flipCard(card1, card2){
    window.addEventListener('click', function(event){
        card1 = event.taget
    })
}



function matched(card1, card2){
    if(card1.classList === "open" && card2.classList === "open") {
        if (card1.innerText === card2.innerText){
            
        }
    }
}

function displayBacks() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            let cardId = cardData.map(card => card.id)
            let cardTheme = cardData.map(card => card.back)
            if (cardId == theme.value){
                [20].forEach(i => Array(i).fill(i).forEach(_ => {
                    const newDiv = document.createElement("div")
                    newDiv.classList = "hidden"
                    newDiv.innerHTML = cardTheme[0]
                    cardList.append(newDiv);
                  }))
            }
        
        })
}
// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if(len === 2){
//         moveCounter();
//         if(openedCards[0].type === openedCards[1].type){
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// };

  







