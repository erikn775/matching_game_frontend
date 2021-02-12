const cardUrl = 'http://localhost:3000/cards/'
const cardList = document.querySelector("#card-list");
const searchButton = document.getElementById('submit');
const dropDown = document.getElementById('themes')

class Card {
    static all = []
    constructor(id, theme, faces){
        this.id = id;
        this.theme = theme;
        this.faces = faces;
    }


    static addCardDropDown() {
        fetch(cardUrl)
            .then(resp => resp.json())
            .then(cardData => {
                let mappedId = cardData.map(card => card.id)
                let mappedTheme = cardData.map(card => card.theme)
                for(let i = 0; i < mappedId.length && i < mappedTheme.length; i++){
                    const newOption = document.createElement("option");
                    newOption.id = `${mappedId[i]}`;
                    newOption.text = `${mappedTheme[i]}`;
                    dropDown.append(newOption);
                }
            })
            
        
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






