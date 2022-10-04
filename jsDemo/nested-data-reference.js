//reference for diff types of combined data

//array of arrays

var sampleNestedArray = [[4, 5, 7], [1, 13, 55], [55, 44, 11]];
console.log(sampleNestedArray[1]);
console.log(sampleNestedArray[0][2]);
//if i wanted to get the number 13 from the above data..
console.log(sampleNestedArray[1][1]);
//array as values of objects
var samplePersonData = {
    'name': 'brian',
    'age': '32',
    'hobbies': ['motorcycles', 'computers', 'small nuclear reactor maintenance']
}
console.log(samplePersonData['hobbies'])

//manipulating objects

//add key with value
samplePersonData['sign'] = 'Aries';
console.log(samplePersonData);
//remove data
delete samplePersonData['sign'];
console.log(samplePersonData);
//or set to "null"

//objects within arrays

var samplePersonA = {
    'name': 'brian',
    'age': '32',
    'hobbies': ['motorcycles', 'computers', 'small nuclear reactor maintenance']
}
var samplePersonB = {
    'name': 'person',
    'age': '24',
    'hobbies': ['hiking', 'dog training', 'model boats']
}
var samplePersonC = {
    'name': 'dude',
    'age': '26',
    'hobbies': ['meth', 'heroin', 'pcp']
}
var personArray = [
    samplePersonA,
    samplePersonB,
    samplePersonC
]

console.log(personArray[0]['hobbies'][2]);

//objects within objects

var nestedObject = {
    'employee_id': 'AJ1888',
    'first_name': 'Andrew',
    'last_name': 'Jobhaver', 
    'department': 'Sales',
    'accesses': {
        'main_office': false, 
        'breakroom': false, 
        'basement': true
    }
}
console.log(nestedObject['accesses']);
console.log(nestedObject['accesses']['breakroom']);