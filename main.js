const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.querySelector('.number-display');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function displayNumbers(numbers) {
    numberDisplay.innerHTML = ''; // Clear previous numbers
    numbers.forEach(number => {
        const numberCircle = document.createElement('div');
        numberCircle.classList.add('number-circle');
        numberCircle.textContent = number;
        numberDisplay.appendChild(numberCircle);
    });
}

function handleGenerateClick() {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
}

generateBtn.addEventListener('click', handleGenerateClick);

// Initial generation on page load
handleGenerateClick();
