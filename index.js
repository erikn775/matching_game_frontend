
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    addCardDropDown();
    displayForm();
    fetchleaderboard();
})

searchButton.addEventListener('click', function(event){
    event.preventDefault();
    fetchBacks();
    fetchCards();
    timer();
    handleCardClick();
})

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    addToLeaderboard();
    fetchleaderboard();
    form.style.display = 'none'
    leaderModal.style.display = 'block'
})

leaderHome.addEventListener('click', function(event){
    event.preventDefault();
    leaderModal.style.display = 'block'
    
})

homeButton.addEventListener('click', function(event){
    event.preventDefault();
    leaderModal.style.display = 'none'
})
