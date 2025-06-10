const start = document.querySelectorAll('fa-star-o')
const selectedRatingValueText = document.querySelector('.selected-rating-value');

let currentTotalSelectedStar = -1;

start.forEach((startItem, index) => {
    startItem.dataset.rating = index +1;
    startItem.addEventListener('mouseover', handleMouseOver);
    startItem.addEventListener('click', handleOnClick);
    startItem.addEventListener('mouseleave', handleMouseLeave);
})

function handleMouseOver(event){
    console.log(event.target.dataset);
}

handleMouseOver();