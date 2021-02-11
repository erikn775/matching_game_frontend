function fetchCards() {
    fetch('http://localhost:3000/cards')
        .then(resp => resp.json())
        .then(cardData => addCardsToDom(cardData))
        
}
const currentDiv = document.getElementById("div1");
const cardList = document.querySelector("#card-list");

function addCardsToDom(cardData){

    if(cardData.error){
        alert(cardData.error.message)
    } 
    else {
        //debugger;
    const faces = cardData.map(card => card.face)
    for(let i = 0; i < faces.length; i++){
        cardList.innerHTML += `<li>${faces[i]}</li>`;
        }
    }
}

function handleError(e){
    console.log(e)
}

function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode();
  newDiv.appendChild(newContent);
  
  document.body.insertBefore(newDiv, currentDiv);
}

currentDiv.addEventListener('click', function(){
    addElement()
})