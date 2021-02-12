const cardUrl = 'http://localhost:3000/cards/'

const searchButton = document.getElementById('submit')
searchButton.addEventListener('click', function(){
    fetchCards();
})

function cardLists() {
    const query = document.querySelector(`#themes`)
    return query.value
}
function fetchCards() {
    
    fetch(cardUrl + cardLists())
        .then(resp => resp.json())
        .then(cardData => addCardsToDom(cardData))
        
}

const cardList = document.querySelector("#card-list");

function addCardsToDom(cardData){

    const faces = cardData.faces
    for(let i = 0; i < faces.length; i++){
        cardList.innerHTML += `<li>${faces[i]}</li>`;
    }
}
    

