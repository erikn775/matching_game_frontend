const cardUrl = 'https://hidden-cliffs-65559.herokuapp.com/card_stacks/';
const cardStackUrl = '/cards';


    function fetchCards() {
        fetch(cardUrl + theme.value + cardStackUrl)
            .then(resp => resp.json())
            .then(cardData => {  
                const cards = cardData.map(card => card.face);
                const double = doubleCards(cards);
                shuffled = shuffle(double);
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

    



















  







