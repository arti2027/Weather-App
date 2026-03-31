// Weather App JavaScript
// Configuration is loaded from config.js

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const loadingElement = document.querySelector('.loading');
const errorElement = document.querySelector('.error-message');
const weatherCard = document.querySelector('.weather-card');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Handle search functionality
async function handleSearch() {
    const city = cityInput.value.trim();

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    // Show loading state
    showLoading();

    try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData);
        hideError();
    } catch (error) {
        showError(error.message);
        hideWeatherCard();
    } finally {
        hideLoading();
    }
}

// Fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
    const url = `${CONFIG.API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${CONFIG.API_KEY}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
            } else {
                throw new Error(`Failed to fetch weather data: ${response.statusText}`);
            }
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('Network error. Please check your internet connection.');
        }
        throw error;
    }
}

// Display weather data in the UI
function displayWeatherData(data) {
    // Update city information
    document.querySelector('.city-info h2').textContent = `${data.name}, ${data.sys.country}`;
    document.querySelector('.city-info p').textContent = formatDate(new Date());

    // Update weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector('.weather-icon img').src = iconUrl;
    document.querySelector('.weather-icon img').alt = data.weather[0].description;

    // Update temperature and condition
    document.querySelector('.temperature .value').textContent = Math.round(data.main.temp);
    document.querySelector('.condition p').textContent = data.weather[0].description;
    document.querySelector('.feels-like').textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;

    // Update weather details
    updateWeatherDetail('humidity', `${data.main.humidity}%`, 'Humidity');
    updateWeatherDetail('wind-speed', `${data.wind.speed} m/s`, 'Wind Speed');
    updateWeatherDetail('pressure', `${data.main.pressure} hPa`, 'Pressure');
    updateWeatherDetail('visibility', `${(data.visibility / 1000).toFixed(1)} km`, 'Visibility');

    // Update last updated time
    document.querySelector('.last-updated p').textContent = `Last updated: ${formatTime(new Date())}`;

    // Show weather card
    showWeatherCard();
}

// Update individual weather detail
function updateWeatherDetail(iconClass, value, label) {
    const detail = document.querySelector(`.${iconClass}`).closest('.detail');
    detail.querySelector('.value').textContent = value;
    detail.querySelector('.label').textContent = label;
}

// Utility functions for UI state management
function showLoading() {
    loadingElement.style.display = 'block';
    hideWeatherCard();
    hideError();
}

function hideLoading() {
    loadingElement.style.display = 'none';
}

function showError(message) {
    errorElement.querySelector('p').textContent = message;
    errorElement.style.display = 'block';
    hideWeatherCard();
}

function hideError() {
    errorElement.style.display = 'none';
}

function showWeatherCard() {
    weatherCard.style.display = 'block';
}

function hideWeatherCard() {
    weatherCard.style.display = 'none';
}

// Date and time formatting utilities
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(date) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    return date.toLocaleTimeString('en-US', options);
}

// Initialize app
function init() {
    // Clear input on page load
    cityInput.value = '';

    // Focus on input field
    cityInput.focus();

    // Add some example cities for testing
    console.log('Weather App initialized. Replace YOUR_API_KEY with your actual OpenWeatherMap API key.');
    console.log('Example cities to test: London, New York, Tokyo, Paris, Sydney');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);