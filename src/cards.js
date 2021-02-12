const cardUrl = 'http://localhost:3000/cards/'
const cardList = document.querySelector(".grid-container");
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
                    newOption.value = `${mappedId[i]}`;
                    newOption.text = `${mappedTheme[i]}`;
                    dropDown.append(newOption);
                }
            })
    }

    static fetchCards() {
        let theme = document.querySelector('#themes')
        fetch(cardUrl + theme.value)
            .then(resp => resp.json())
            .then(cardData => {  
                const faces = cardData.faces
                for(let i = 0; i < faces.length; i++){
                    const newDiv = document.createElement("div")
                    newDiv.innerHTML = `${faces[i]}`
                    cardList.append(newDiv);
                }
            })
    }

    
}
  









