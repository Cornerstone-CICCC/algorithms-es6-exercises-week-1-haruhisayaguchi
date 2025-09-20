/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/
const laugh = number => {
	let result = "";
	for (let i = 0; i < number; i++) {
		result += "ha";
	}
	return result + "!";
}

function emotions(emotion, fn) {
	console.log(`I am ${emotion}, ${fn}`)
}

emotions("happy", laugh(2));