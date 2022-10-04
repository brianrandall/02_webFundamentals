function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

function randomPizza() {
    var pizzaChoices = []; 

    var crusts = ["deep dish", "thin", "hand tossed", "salad? ew", "tortilla", "no crust, smoothie style in a blender"];
    var sauces = ["marinara", "mustard", "bbq", "sweat", "pesto", "alfredo", "ranch dressing"];
    var cheeses = ["mozzarella", "goat", "bleu", "old", "cheddar"];
    var toppings = ["pepperoni", "black olives", "onions", "garlic", "carpet", "wood shavings", "toe nails", "beef", "a whole burrito"];
    
    var pizza = {};
    pizza['crust'] = crusts[Math.floor(Math.random() * crusts.length)];
    pizza['sauce'] = sauces[Math.floor(Math.random() * sauces.length)];
    pizza['cheese'] = cheeses[Math.floor(Math.random() * cheeses.length)];
    pizza['toppings'] = [toppings[Math.floor(Math.random() * toppings.length)], toppings[Math.floor(Math.random() * toppings.length)]] ;

    pizzaChoices.push(pizza);

    return pizza;
}




var pizza1 = pizzaOven("deep dish", "tradish", "mozzarella", ["pepperonoini", "sausage"]);
console.log("pizza1", pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olive", "onions"]);
console.log("pizza2", pizza2);

var pizza3 = pizzaOven("tortilla", "mustard", "old", ["celery", "carrots", "toenails"]);
console.log("custom 1 aka, ~garbage~", pizza3);

var pizza4 = pizzaOven("sourdough", "ranch dressing", "goat", ["bacon", "lettuce", "tomato"]);
console.log("custom 2 aka ~the BLT~", pizza4);

console.log("random pizza..... sorry", randomPizza());

