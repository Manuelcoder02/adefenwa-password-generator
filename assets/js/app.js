// storing elements in variables
let root = document.documentElement
const sliderValueEL = document.querySelector('#slider--value');
let sliderEL = document.querySelector('#range');

const btnGenerate = document.querySelector('.btnSubmit');
const passwordDisplayEL = document.querySelector('.pword')

const passwordError = document.querySelector('.error-message')
const copied = document.querySelector('.copy-text')

const upperCaseCheckBox = document.querySelector('#passwordCheckOne')
const lowerCaseCheckBox = document.querySelector('#passwordCheckTwo')
const numberCheckBox = document.querySelector('#passwordCheckThree')
const symbolCheckBox = document.querySelector('#passwordCheckFour')

let password = '';
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

// 2. Generate password

const generatePassword = function() {
const includeUppercase = upperCaseCheckBox.checked;
const length = sliderValue;
// console.log(typeof length);
const includeLowercase = lowerCaseCheckBox.checked;
const includeNumbers = numberCheckBox.checked;
const includeSymbols = symbolCheckBox.checked;

let characters = '';
if (includeUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // console.log(characters);
}
if (includeLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
}
if (includeNumbers) {
    characters += '0123456789';
}
if (includeSymbols) {
    characters += '!@#$%^&*()_+{}|;:,.<>?';
}

// console.log(characters, length);

if (!characters) {
    passwordError.textContent = 'Please select at least one character type.';
    passwordError.classList.remove('hidden')
} else{
    passwordError.classList.add('hidden')
    password = '';

    Array.from({ length }).forEach(() => {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    });
    
        passwordDisplayEL.value = password;
}


    // console.log(password);
    // return password;
    updateStrength()
}

btnGenerate.addEventListener('click', generatePassword)


const btnCopy = document.querySelector('.copy')

// 3) Copied to clipboard
const copyToClipboard = async function(){
    
    try {
        if(!password) {
            throw new Error('No password to copy')
        }
        await navigator.clipboard.writeText(password)
        copied.classList.remove('hidden')
       setTimeout(() => {
            copied.classList.add('hidden')
       }, 2000)
        
    } catch (error) {
        passwordError.classList.remove('hidden')
        passwordError.textContent = error.message
    }
}

// copyToClipboard(password)
btnCopy.addEventListener('click', copyToClipboard)
 

// 4) Update Strength bar
const barOne = document.querySelector('.bar--one')
const barTwo = document.querySelector('.bar--two')
const barThree = document.querySelector('.bar--three')
const barFour = document.querySelector('.bar--four')
const strengthValue = document.querySelector('.strength--value')

const updateStrength = function() {
    let strength = 0;
    let redColor = getComputedStyle(root).getPropertyValue('--red-color')
    let orangeColor = getComputedStyle(root).getPropertyValue('--orange-color')
    let goldColor = getComputedStyle(root).getPropertyValue('--gold-color')
    let greenColor = getComputedStyle(root).getPropertyValue('--neon-green')
    
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const hasSymbols = /[!@#$%^&*()_+{}|;:,.<>?]/.test(password)

    console.log(hasLowercase, hasNumbers);

    // 1) If password is from 1 - 5,
    // first bar will be displayed and it will be color red 
    if(password.length >= 1 && password.length <= 5) {
        barOne.style.backgroundColor = redColor;
        barOne.style.border = 'none';
        strengthValue.textContent = 'TOO WEAK!'
        strengthValue.classList.remove('hidden')
    }

    // 2) If password is from 6 - 10,
    // first and second bar will be displayed and it will be color orange

    if(password.length > 5 && password.length <= 10) {
        barOne.style.backgroundColor = orangeColor;
        barOne.style.border = 'none';
        barTwo.style.backgroundColor = orangeColor;
        barTwo.style.border = 'none'

        strengthValue.textContent = 'WEAK'
        strengthValue.classList.remove('hidden')
    }

    // 3) If password is from 11 - 15,
    // 1st, 2nd and 3rd bar will be displayed and it will be color gold
    if(password.length > 10 && password.length <= 15) {
        barOne.style.backgroundColor = goldColor;
        barOne.style.border = 'none';
        barTwo.style.backgroundColor = goldColor;
        barTwo.style.border = 'none'
        barThree.style.backgroundColor = goldColor;
        barThree.style.border = 'none'

        strengthValue.textContent = 'MEDIUM'
        strengthValue.classList.remove('hidden')
    }
    
    // 4) If password is from 16 - 20,
    // all  bar will be displayed and it will be color green 
    
    if(password.length > 15 && password.length <= 20) {
        barOne.style.backgroundColor = greenColor;
        barOne.style.border = 'none';
        barTwo.style.backgroundColor = greenColor;
        barTwo.style.border = 'none'
        barThree.style.backgroundColor = greenColor;
        barThree.style.border = 'none'
        barFour.style.backgroundColor = greenColor;
        barFour.style.border = 'none'

        strengthValue.textContent = 'STRONG'
        strengthValue.classList.remove('hidden')
    }
    
    // Character type
    // if((hasUppercase && hasLowercase && hasNumbers && hasSymbols) || (password.length > 15 && password.length <= 20) ) {
    //     barOne.style.backgroundColor = greenColor;
    //     barOne.style.border = 'none';
    //     barTwo.style.backgroundColor = greenColor;
    //     barTwo.style.border = 'none'
    //     barThree.style.backgroundColor = greenColor;
    //     barThree.style.border = 'none'
    //     barFour.style.backgroundColor = greenColor;
    //     barFour.style.border = 'none'
    // }

    
}
