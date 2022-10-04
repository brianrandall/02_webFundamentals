function addToCart() {
    var cartAmount = document.querySelector('#cartNum');

    cartAmount.innerText++;
}

function contactInfo() {
    alert("We can be reached at 1-800-PLU-SHYY");
}

function sortBy() {
    var choice = document.getElementById("selector");
    if (choice.value == "bestSelling") {
        document.querySelector('#boldText').innerText = "Best Selling";
    } else {
        document.querySelector('#boldText').innerText = "Price";
    }
}