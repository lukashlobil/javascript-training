/**
 * bubble sort effective
 */

var array1 = [8, 0, 1, 3, 3, 4, 5, 6, 7, 2, 3, 5, 4, 3, 2, 7, 8, 0, 1, 3];
var swap1;
var j = 0;
var sortedArray = false;

do {
    sortedArray = true;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] > array1[i + 1]) {
            swap1 = array1[i];
            array1[i] = array1[i + 1];
            array1[i + 1] = swap1;
            sortedArray = false;

        }
        j++;
    }
} while (sortedArray === false);
console.log('array length: ' + array1.length + ', ran ' + j + ' times');
