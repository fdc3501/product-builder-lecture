const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.querySelector('.menu-display'); // Changed from .number-display

// List of dinner menu items
const dinnerMenuItems = [
    'Pasta Alfredo', 'Chicken Stir-fry', 'Beef Tacos', 'Vegetable Curry',
    'Grilled Salmon with Asparagus', 'Pizza (Homemade)', 'Lentil Soup with Bread',
    'Shepherd\'s Pie', 'Chicken Caesar Salad', 'Burger and Fries',
    'Sushi Rolls', 'Roast Chicken with Root Vegetables', 'Quiche Lorraine',
    'Shrimp Scampi', 'Falafel Wraps', 'Pork Chops with Applesauce',
    'Mushroom Risotto', 'Tomato Soup with Grilled Cheese', 'Steak with Baked Potato',
    'Enchiladas', 'Bibimbap', 'Fish and Chips', 'Goulash', 'Lamb Chops'
];

function getDinnerRecommendation() {
    const randomIndex = Math.floor(Math.random() * dinnerMenuItems.length);
    return dinnerMenuItems[randomIndex];
}

function displayRecommendation(recommendation) {
    menuDisplay.innerHTML = ''; // Clear previous content
    const recommendationElement = document.createElement('div');
    recommendationElement.classList.add('menu-item'); // New class for styling
    recommendationElement.textContent = recommendation;
    menuDisplay.appendChild(recommendationElement);
}

function handleGenerateClick() {
    const recommendation = getDinnerRecommendation();
    displayRecommendation(recommendation);
}

generateBtn.addEventListener('click', handleGenerateClick);

// Initial generation on page load
handleGenerateClick();

// Theme switching logic (remains the same)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

themeToggle.addEventListener('click', toggleTheme);