/*
Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line

row: 0 - seat: 0
row: 0 - seat: 1
row: 0 - seat: 2
. . .
row: 25 - seat: 97
row: 25 - seat: 98
row: 25 - seat: 99
*/
for (let i = 0; i < 26; i++) {
	for (let k = 0; k < 100; k++) {
		console.log(`row: ${i} - seat: ${k}`)
	}
}