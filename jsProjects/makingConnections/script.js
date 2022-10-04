
function changeName() {    
    document.querySelector("#profileName").innerText = "Seymore Butts";
}

function acceptConnection (IDname) {
    var element = document.querySelector(IDname);
    var requestNumber = document.querySelector('#requestNumber');
    var connectionAmount = document.querySelector('#connectionAmount');

    

    element.remove();
    requestNumber.innerText--;
    connectionAmount.innerText++;
    removeConRequestAmount();
}

function denyConnection (IDname) {
    var element = document.querySelector(IDname);
    var requestNumber = document.querySelector('#requestNumber');

    

    element.remove();
    requestNumber.innerText--;
    removeConRequestAmount();
}

function removeConRequestAmount () {
    var element = document.querySelector('#requestNumber');
    console.log(element.innerText);
    if (element.innerText == 0) {
        
        console.log("no more connection requests");
        
        element.remove();

    }
}