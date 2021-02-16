
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    addCardDropDown();
})

searchButton.addEventListener('click', function(){
    fetchBacks();
    fetchCards();
    handleCardClick();
})




