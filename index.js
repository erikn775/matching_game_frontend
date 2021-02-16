
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    addCardDropDown();
    displayForm();
    newLeader();
})

searchButton.addEventListener('click', function(){
    fetchBacks();
    fetchCards();
    timer();
    handleCardClick();
})




