class Game {

    constructor({face}){
        this.face = face;
    }

    static addCardDropDown() {
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
    

    static eventListeners(){
        searchButton.addEventListener('click', function(event){
            event.preventDefault();
            Card.fetchBacks();
            Card.fetchCards();
            Game.timer();
            Card.handleCardClick();
        })
        
        submitButton.addEventListener('click', function(event){
            event.preventDefault();
            Leaderboard.addToLeaderboard();
            window.alert("Score Posted")
            form.style.display = 'none'
        })
    }

    static startGame(){
        openModal.style.display = 'block'
        searchButton.addEventListener('click', function(){
            openModal.style.display = 'none'
        })
    }

    static gameOver(){
        if(matchedCard.length === 20){
            endModal.style.display = 'block'
            Game.moveEndCounter();
            endTimer.innerHTML = 'Time: ' + minute + ' min ' + second + ' sec';
            timerForm = 'Time: ' + minute + ' min ' + second + ' sec';
            moveCount = 0;
            replayButton.addEventListener('click', function(event){
               openModal.style.display = 'block'
               endModal.style.display = 'none'
            })
        }
    }
    
    static moveTopCounter(){
        moveCount++;
        moveDiv.innerHTML = `Move Count: ${moveCount}`;
    }
    
    static moveEndCounter(){
        moveHeader.innerHTML = `Number of Moves: ${moveCount}`
        moveForm = moveCount
        newScore = score - (moveCount * 1654) - (minute * 7320) - (second * 122)
        endScore.innerHTML = `Score: ${newScore}`
    }
    
    static timer(){
        
        let interval;
        interval = setInterval(function(){
            topTimer.innerHTML = 'Timer: ' + minute + ' min ' + second + ' sec';
            second++;
            if(second === 60){
                minute++;
                second = 0;
            }
        }, 1000)
        
    }
}