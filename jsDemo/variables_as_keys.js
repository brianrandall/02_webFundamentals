var sampleObject = {
    'name': 'Mike',
    'breed': 'n/a',
    'dateObtained': '01/23/99',
    'location': '0334',
    'vaccineSchedule': '01/03/99'
}

var keyList = ['name', 'breed', 'location'];

for (var i = 0; i < keyList.length; i++ ) {
    console.log(sampleObject[keyList[1]]);
}