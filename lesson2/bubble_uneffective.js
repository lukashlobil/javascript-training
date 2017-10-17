/**
 * bubble sort uneffective
 */

var array = [8, 0, 1, 3, 3, 4, 5, 6, 7, 2, 3, 5, 4, 3, 2, 7, 8, 0, 1, 3];

var swap;
var sorted = false;
var k = 0;

for (var j = 0; j < array.length; j++) {
    sorted = true;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            swap = array[i];
            array[i] = array[i + 1];
            array[i + 1] = swap;
            sorted = false;

        }
        k++;
    }
}

console.log('array length: '+ array.length + ', ran ' + k + ' times');
