/*
In this challenge, we will be building a function that determines the last index of an item in an array.

When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

For example:

code	                                    output
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	            3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	            4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	            -1
lastIndexOf([ 5, 5, 5 ], 5);	                2
lastIndexOf([], 3);	                            -1

You may paste the following code after your function definition to help you verify it works correctly:
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/
function lastIndexOf(array, value) {
	for (let i = array.length; 0 < i; i--) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);