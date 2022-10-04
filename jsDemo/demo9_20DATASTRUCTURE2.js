var sampleObject = {
    'keyA': 29, 
    'keyB': 22, 
    'keyC': 19, 
    'keyD': 99, 
    'keyE': 63
}

//lists key values

for (key in sampleObject) {
    console.log(sampleObject[key]);
}

// 'key' can be any word or letter 
// this lists object key names

for (x in sampleObject) {
    console.log(x);
}