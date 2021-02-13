const cardUrl = 'http://localhost:3000/cards/'
const cardList = document.querySelector(".grid-container");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes')
let count = 0
let card = document.getElementsByClassName(".card")
//let cards = [... card]
const backCard = "&#126980"
let openedCards = document.getElementsByClassName(".open")

// let displayCard = function (){
//     this.classList.toggle("open");
//     this.classList.toggle("show");
//     this.classList.toggle("disabled");
// }


function addCardDropDown() {
    fetch(cardUrl)
        .then(resp => resp.json())
        .then(cardData => {
            let mappedId = cardData.map(card => card.id)
            let mappedTheme = cardData.map(card => card.theme)
            for(let i = 0; i < mappedId.length && i < mappedTheme.length; i++){
                const newOption = document.createElement("option");
                newOption.value = `${mappedId[i]}`;
                newOption.text = `${mappedTheme[i]}`;
                dropDown.append(newOption);
            }
        })
}

function fetchCards() {
    let theme = document.querySelector('#themes')
    fetch(cardUrl + theme.value)
        .then(resp => resp.json())
        .then(cardData => {  
            const cards = cardData.faces;
            doubleCards(cards);
            // for(let i = 0; i < faces.length; i++){
            //     const newDiv = document.createElement("div")
            //     newDiv.classList = "hidden"
            //     newDiv.innerHTML = `${faces[i]}`
            //     cardList.append(newDiv);
            //     newDiv.addEventListener('click', function(){
            //         newDiv.classList = "open"
                    
            //     })
            //}
        })   
}

function doubleCards(cards){
    let double = cards
    for(let i = 0; i < cards.length; i++){
        double.push(cards[i])
    }
    debugger
    return double
    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
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

  







