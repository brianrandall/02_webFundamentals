function flatten(arr2d) {
    var flat = [];
    for (i = 0; i < arr2d.length; i++) {
        for (j = 0; j < arr2d[i].length; j++) { 
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

console.log(flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]));


