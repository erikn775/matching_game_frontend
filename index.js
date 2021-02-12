window.addEventListener('DOMContentLoaded', function() {
    Card.addCardDropDown();
})

searchButton.addEventListener('click', function(){
    Card.fetchCards();
    
})


