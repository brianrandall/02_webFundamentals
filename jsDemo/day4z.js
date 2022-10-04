//FoH tax calc for a restaurant

function provideTotalPlusTip (subtotal, taxRate) {
    var result = subtotal + (subtotal * taxRate);
    var suggestedTip = result * .18;
    
    
    return `Your total is ${result.toFixed(2)} your suggested gratuity of 18 percent is ${suggestedTip.toFixed(2)}`;


}

console.log(provideTotalPlusTip(15, .08))