//objects in javascript
// (generalized "key-value-pair" data structures)

var sampleObject = {
    'key1': 'sample value',
    'key2': 817, 
    'key3': [1, 6, 3, 8, 4]
}

// when do we use objects over arrays and vice versa?

// arrays are used when we care about order
// objects are used when we care about description, not order

var todaysWeather = {
    'currentTemp': 73,
    'highTemp': 92,
    'lowTemp': 65,

}

console.log(todaysWeather['currentTemp']);
console.log(todaysWeather.currentTemp);

//square bracket allows for variables to be passed in 
//when calling object

var sampleVar = 'highTemp';
console.log(todaysWeather[sampleVar]);

//add to existing object

todaysWeather['humidity'] = '78%';
console.log(todaysWeather);

