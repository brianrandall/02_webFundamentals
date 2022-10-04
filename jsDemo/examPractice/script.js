function newPostAlert () {
    alert("You must be logged in to make a new post");
}

function removeSubscribe(element) {
    element.remove();
}

function likeKeyboard(keyboardID) {
    var keyboardLikes = document.querySelector
    (`#keyboardLikes-${keyboardID}`);

    keyboardLikes.innerHTML = parseInt
    (keyboardLikes.innerHTML) + 1;
}