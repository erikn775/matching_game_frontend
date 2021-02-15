
window.addEventListener('DOMContentLoaded', function() {
    addCardDropDown();
    flippedCounter();
})

searchButton.addEventListener('click', function(){
    fetchBacks();
    fetchCards();
    handleCardClick();
})




