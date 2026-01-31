document.addEventListener('DOMContentLoaded', () => {
    const generateLotteryBtn = document.getElementById('generate-lottery-btn');
    const lotteryNumbersDiv = document.getElementById('lottery-numbers');

    if (generateLotteryBtn) {
        generateLotteryBtn.addEventListener('click', generateLotteryNumbers);
    }

    function generateLotteryNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        displayLotteryNumbers(Array.from(numbers).sort((a, b) => a - b));
    }

    function displayLotteryNumbers(numbers) {
        lotteryNumbersDiv.innerHTML = ''; // Clear previous numbers
        numbers.forEach(num => {
            const numSpan = document.createElement('span');
            numSpan.classList.add('lottery-number-ball');
            numSpan.textContent = num;
            lotteryNumbersDiv.appendChild(numSpan);
        });
    }
});