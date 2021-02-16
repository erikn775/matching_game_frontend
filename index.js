
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    addCardDropDown();
    displayForm();
})

searchButton.addEventListener('click', function(){
    fetchBacks();
    fetchCards();
    timer();
    handleCardClick();
})




