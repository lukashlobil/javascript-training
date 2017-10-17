/**
 * bubble sort effective
 */

var array = [8, 0, 1, 3, 3, 4, 5, 6, 7, 2, 3, 5, 4, 3, 2, 7, 8, 0, 1, 3];
var swap;
var sorted = false;

while (sorted === false) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            swap = array[i];
            array[i] = array[i + 1];
            array[i + 1] = swap;
        }
    }

}

console.log(array);