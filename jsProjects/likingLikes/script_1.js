var i = 3;
var likeAmountElement = document.querySelector('#likeAmount');
likeAmountElement.innerText = i;

function addLikes() {
    var likeAmountElement = document.querySelector('#likeAmount');
    i += 1;
    likeAmountElement.innerText = i;
}