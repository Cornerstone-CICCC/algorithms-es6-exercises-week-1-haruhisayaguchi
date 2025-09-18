/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

const sizeRanges = [
	{ size: 'S', w: 18, l: 28, s: 8.13 },
	{ size: 'M', w: 20, l: 29, s: 8.38 },
	{ size: 'L', w: 22, l: 30, s: 8.63 },
	{ size: 'XL', w: 24, l: 31, s: 8.88 },
	{ size: '2XL', w: 26, l: 33, s: 9.63 },
	{ size: '3XL', w: 28, l: 34, s: 10.13 }
]
let sizeResult = 'N/A';

for (let i = 0; i < sizeRanges.length; i++) {
	const current = sizeRanges[i]
	const next = sizeRanges[i + 1]
	if (!next) {
		if (
			current.w <= shirtWidth &&
			current.l <= shirtLength &&
			current.s <= shirtSleeve
		) {
			sizeResult = current.size
		}
	} else {
		if (
			(current.w <= shirtWidth && shirtWidth < next.w) &&
			(current.l <= shirtLength && shirtLength < next.l) &&
			(current.s <= shirtSleeve && shirtSleeve < next.s)
		) {
			sizeResult = current.size
			break
		}
	}
}

console.log(sizeResult)