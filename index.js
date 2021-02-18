
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    addCardDropDown();
    //displayForm();
    //fetchleaderboard();
    Leaderboard.eventListeners();
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
    form.style.display = 'none'
    displayLeaderboard();
})



// leaderHome.addEventListener('click', function(event){
//     event.preventDefault();
//     if(Leaderboard.all){
//         Leaderboard.fetchleaderboard();
//     }
//     leaderModal.style.display = 'block'
// })

homeButton.addEventListener('click', function(event){
    event.preventDefault();
    leaderModal.style.display = 'none'
})

endLeaderButton.addEventListener('click', function(){
    displayLeaderboard();
})

replayButton.addEventListener('click', function(){
    endModal.style.display = 'none'
})