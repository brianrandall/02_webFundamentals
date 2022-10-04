function byeByeCookies() {
    var cookiesDiv = document.querySelector(".cookieAlert");
    cookiesDiv.style = "display: none;";
}

function loadingAlert() {
    alert("Loading weather report....");
}



//on pageload, loop through temps, save to array called fTemp

// function farLog() {
//     var fTemp = []; 
//     for (var i = 1; i < 9; i++) {
//         var temperature = document.querySelector(`#temp${i}`).innerText
//         fTemp.push(temperature);
        
//     }
//     console.log(fTemp);
//     return fTemp;

// }
// farLog();

function farLog() {
    var fTemp = []; 
    for (var i = 1; i < 9; i++) {
        var temperature = document.querySelector(`#temp${i}`).innerText
        fTemp.push(temperature);
        
    }
    console.log(fTemp);
    return fTemp;

}
farLog();


//if "celcius" is selected, do math on innerHTML of temp and show value
//if "farenheit" is selected, show value stored in array

//what is written below is wrong, but it's a placeholder so i 
//don't forget in the morning


// function reloadFar () {
//     var temperature = document.querySelector(`#temp${i}`).innerText
//     // call function farLog()
//     // extract values from array and put them back where they came from
// }

// function celCalc () {
//     var tempArray
//     for (var i = 1; i < 9; i++) {
//         var currentTemperature = document.querySelector(`#temp${i}`).innerText
//     }
//     console.log(currentTemperature);
//     // return Math.round(5 / 9 * (currentTemperature - 32));
    
// }

// //testing stuff

function changeStuff() {
    var choice = document.getElementById("tempSelector");
    if (choice.value == "F") {
        console.log("Farenheit selected");
    } else {
        console.log("Celcius selected");
        for (var i = 1; i < 9; i++) {
            var currentTemperature = document.querySelector(`#temp${i}`).innerText
            }
            console.log(currentTemperature);
            return Math.round(5 / 9 * (currentTemperature - 32));
        }
        
    }

//didn't work -- giving up :(


// function changeTempType(element) {
//     console.log(element.value);

//     var fTemp = [];
//     for (var i = 1; i < 9; i++) {
//         var temperature = document.querySelector("#temp" + i);
//         var value = parseInt(temperature.innerText);

//         fTemp.push(i);

//         if (element.value == "C°") {
//             temperature.innerText = fToC(value);
//         } else {
//             fTemp[i];
//         }
//     }
//     console.log(fTemp);
//     return fTemp;
// }
