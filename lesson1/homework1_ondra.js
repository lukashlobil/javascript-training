/** there will be a final array called result looking like this [a, b, c, d], where:

 * a = sum of all elements' values in the array
 * b = lowest value of element in the array
 * c = approximate of array's element's values
 * d = index of the array's highest value */

var array = [3, 5, 8, 2, 1, 0, 0, 4];

var a = 0;
var b = array[0];
var c = 0;
var d = array[0];

for (var i = 0; i < array.length; i++) {
	var j = array[i];
	a = j + a; // a = value in the field + a. After 1st iteration: a = 3 + 0 -> a = 3. After second iteration: a = 5 + 3 -> a = 8.

	if (b > j) { // b = value of index 0, if it's higher than value of index in current iteration -> b = new index value
		b = j;
	}

	c = j + c; // see a

	if (array[d] < j) { // d = maxd = 0, if it's lower than value of the iteration -> d = index i, maxd = new index value
		d = i;
	}
}

console.log('a = ' + a); // list added values from all indexes
console.log('b = ' + b); // list lowest value from all indexes
console.log('c = ' + c / array.length); // list average of all values from all indexes in array
console.log('d = ' + d); // list an index withthe highest value
