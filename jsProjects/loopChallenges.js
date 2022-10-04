function printOdds() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds();

function divisibleByThree() {
    for (var i = 100; i >= 1; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
divisibleByThree ();

function minusOnePointFive() {
    for (var i = 4; i >= -3.5; i -= 1.5) {
        console.log(i);
    }
}
minusOnePointFive();

function sigma() {
    var sum = 0;
    for (var i = 1; i <= 99; i++) {
        sum += i;
        console.log(i + " +");
    }
    console.log("100")
    sum += 100;
    console.log("=", sum);
}
sigma();



function product() {
    var product = 1;
    for (var i = 1; i <= 12; i++) {
        product *= i;
        console.log(i);
    }
    console.log(product);
}
product ();
