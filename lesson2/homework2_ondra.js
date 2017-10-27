/** Implement Selection sort for [49, 9, 24, 62, 81, 38, 6, 17, 45, 76, 14, 16, 7, 31, 44, 1, 89, 8, 39, 55, 50, 18, 94, 73, 23]

 Description: how does it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
 Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.
 thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element. */

var arr = [49, 9, 24, 62, 81, 38, 6, 17, 45, 76, 14, 16, 7, 31, 44, 1, 89, 8, 39, 55, 50, 18, 94, 73, 23];

var minG = 0;
var maxG = 0;

for (var i = 0; i < arr.length; i++) {
	minG = i; //stores index

	for (var j = i + 1; j < arr.length; j++) {
		if (arr[j] < arr[minG]) // compares values on i and next index
			minG = j; // if next alue of index is lower -> minG stores value on i + 1 index
	}
	maxG = arr[i]; // if previous condition is not met -> maxG value of the index is now stored as maxG
	arr[i] = arr[minG]; // swaps those values
	arr[minG] = maxG;
}

console.log('Sum of indexes = ' + i);
console.log('Sorted array = ' + arr);
