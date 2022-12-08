const ratingButtons = document.querySelectorAll('.rating-btns');
const submitButton = document.querySelector('.submit-btn');
const ratingComponent = document.querySelector('.component');
const displayComponent = document.querySelector('.thank-you-component');
const userRating = document.querySelector('.user-rating');

ratingButtons.forEach(button => button.addEventListener('click', (e) =>{
    let rating = e.target.textContent;
    submitButton.addEventListener('click', () =>{
        ratingComponent.classList.add('inactive');
        displayComponent.classList.remove('inactive');
        userRating.innerText = rating;
    });
    
}));

