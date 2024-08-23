'use strict';
// storing elements in variables
const sliderValueEL = document.querySelector('#slider--value');
let sliderEL = document.querySelector('#range');

const btnGenerate = document.querySelector('.btnSubmit');
const passwordDisplayEL = document.querySelector('.pword')


// 1. Update the slider value

let sliderValue = 0;
// let randomNumber;
let randomUpperCaseLetter;
let randomLowerCaseLetter;
const updateSliderValue = () => {
	sliderEL.addEventListener('input', function () {
		sliderValueEL.textContent = sliderEL.value;
		sliderValue = +sliderValueEL.textContent;
	});
};
updateSliderValue();

// 2. Generate Random letter
const generateRandomUpperCaseLetter = () => {
	const randomNumber = Math.floor(Math.random() * 25)
	randomUpperCaseLetter = String.fromCharCode(97 + randomNumber).toUpperCase();
}

const generateLowerCaseLetter = () => {
	const randomNumber = Math.floor(Math.random() * 25)
	randomLowerCaseLetter = String.fromCharCode(97 + randomNumber);
}


// 3. Generate Random Number
const generateRandomNumber = function() {
	const randomNumberA = Math.floor((Math.random() * 9) + 1)
	// console.log(randomNumberA);
}
generateRandomNumber()
// 4. Generate Symbols
const generateRandomSymbol = function() {
	const symbols = ['&', '%', '^', '£', '$', '@', '#', '!', '*', '(', ')', '-', '_', '=', '+', '?', '/', '|', '<', '>'];
	const ranIn = Math.floor(Math.random() * symbols.length)
	// console.log(symbols[ranIn]);
}
generateRandomSymbol();



btnGenerate.addEventListener('click', function() {
	// console.log(sliderValue);
	generateRandomUpperCaseLetter();
	generateLowerCaseLetter()
	console.log(randomUpperCaseLetter);
	console.log(randomLowerCaseLetter);
	
	// const showPassword = `${randomUpperCaseLetter}${randomUpperCaseLetter}${randomLowerCaseLetter}`
	// passwordDisplayEL.value = showPassword;
	
	
	
})