/*
Rewrite the following while loop as a for loop:

let x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

*/
for (let i = 9; 1 <= i; i--) {
  console.log("hello " + i);
}