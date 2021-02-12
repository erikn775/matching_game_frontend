const cardUrl = 'http://localhost:3000/cards/'
const cardList = document.querySelector("#card-list");
const searchButton = document.getElementById('submit')

class Card {
    static all = []
    constructor(id, theme, faces){
        this.id = id;
        this.theme = theme;
        this.faces = faces;
    }


    static addCardDropDown() {
        const newOption = document.createElement("option");
        newOption.id = `${this.id}`;
        newOption.text = `${this.theme}`
    }

    fetchCards() {
        fetch(cardUrl + cardLists())
            .then(resp => resp.json())
            .then(cardData => addCardsToDom(cardData))
            
    }

    addCardsToDom(cardData){
        const faces = cardData.faces
        for(let i = 0; i < faces.length; i++){
            cardList.innerHTML += `<li>${faces[i]}</li>`;
        }
    }

}
  


searchButton.addEventListener('click', function(){
    fetchCards();
})

function cardLists() {
    const query = document.querySelector(`#themes`)
    return query.value
}




