const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.querySelector('.menu-display');

// List of dinner menu items with image URLs
const dinnerMenuItems = [
    { name: 'Pasta Alfredo', imageUrl: 'https://images.unsplash.com/photo-1621996346565-ace36c607a97?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Stir-fry', imageUrl: 'https://images.unsplash.com/photo-1599382103342-99079f8b4198?auto=format&fit=crop&w=400&q=80' },
    { name: 'Beef Tacos', imageUrl: 'https://images.unsplash.com/photo-1599974579688-8cead5a4c9f1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Vegetable Curry', imageUrl: 'https://images.unsplash.com/photo-1518818556680-e37803e05a5a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Grilled Salmon with Asparagus', imageUrl: 'https://images.unsplash.com/photo-1519708227418-a6fa138c0367?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pizza (Homemade)', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749655e5bb?auto=format&fit=crop&w=400&q=80' },
    { name: 'Lentil Soup with Bread', imageUrl: 'https://images.unsplash.com/photo-1596773229712-42111d4e0b2e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Shepherd\'s Pie', imageUrl: 'https://images.unsplash.com/photo-1601051512803-b0544f808779?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chicken Caesar Salad', imageUrl: 'https://images.unsplash.com/photo-1512850974577-03615403565e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Burger and Fries', imageUrl: 'https://images.unsplash.com/photo-1568901346379-847ffd8e263d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sushi Rolls', imageUrl: 'https://images.unsplash.com/photo-1579871788220-c75c754d580f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Roast Chicken with Root Vegetables', imageUrl: 'https://images.unsplash.com/photo-1550965377-f273010ec048?auto=format&fit=crop&w=400&q=80' },
    { name: 'Quiche Lorraine', imageUrl: 'https://images.unsplash.com/photo-1582697859345-d85c8e3e4a2a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Shrimp Scampi', imageUrl: 'https://images.unsplash.com/photo-1518818556680-e37803e05a5a?auto=format&fit=crop&w=400&q=80' }, // Reusing image
    { name: 'Falafel Wraps', imageUrl: 'https://images.unsplash.com/photo-1573033282496-c65158a14b30?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pork Chops with Applesauce', imageUrl: 'https://images.unsplash.com/photo-1610444319401-447551025a77?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mushroom Risotto', imageUrl: 'https://images.unsplash.com/photo-1563821731671-bf17b07548a3?auto=format&fit=crop&w=400&q=80' },
    { name: 'Tomato Soup with Grilled Cheese', imageUrl: 'https://images.unsplash.com/photo-1543339397-65775f0f3531?auto=format&fit=crop&w=400&q=80' },
    { name: 'Steak with Baked Potato', imageUrl: 'https://images.unsplash.com/photo-1551884170-0941914972e4?auto=format&fit=crop&w=400&q=80' },
    { name: 'Enchiladas', imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0c201?auto=format&fit=crop&w=400&q=80' }, // Similar Mexican dish
    { name: 'Bibimbap', imageUrl: 'https://images.unsplash.com/photo-1592661858607-b27b3d3d63b2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Fish and Chips', imageUrl: 'https://images.unsplash.com/photo-1579730623000-f925b4104990?auto=format&fit=crop&w=400&q=80' },
    { name: 'Goulash', imageUrl: 'https://images.unsplash.com/photo-1579730623000-f925b4104990?auto=format&fit=crop&w=400&q=80' }, // Similar stew image
    { name: 'Lamb Chops', imageUrl: 'https://images.unsplash.com/photo-1614059081223-b18a3a0e0e0e?auto=format&fit=crop&w=400&q=80' } // Similar meat dish image
];

function getDinnerRecommendation() {
    const randomIndex = Math.floor(Math.random() * dinnerMenuItems.length);
    return dinnerMenuItems[randomIndex]; // Returns an object { name, imageUrl }
}

function displayRecommendation(recommendation) {
    menuDisplay.innerHTML = ''; // Clear previous content

    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-item');

    const imageElement = document.createElement('img');
    imageElement.src = recommendation.imageUrl;
    imageElement.alt = recommendation.name;
    imageElement.classList.add('menu-image');

    const nameElement = document.createElement('div');
    nameElement.classList.add('menu-name');
    nameElement.textContent = recommendation.name;

    menuCard.appendChild(imageElement);
    menuCard.appendChild(nameElement);
    menuDisplay.appendChild(menuCard);
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