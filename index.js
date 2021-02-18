
window.addEventListener('DOMContentLoaded', function() {
    startGame();
    Game.addCardDropDown();
    Leaderboard.eventListeners();
})

searchButton.addEventListener('click', function(event){
    event.preventDefault();
    Game.fetchBacks();
    Game.fetchCards();
    timer();
    handleCardClick();
})

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    Leaderboard.addToLeaderboard();
    form.style.display = 'none'
    //displayLeaderboard();
})



// leaderHome.addEventListener('click', function(event){
//     event.preventDefault();
//     if(Leaderboard.all){
//         Leaderboard.fetchleaderboard();
//     }
//     leaderModal.style.display = 'block'
// })

