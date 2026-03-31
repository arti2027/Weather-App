// Weather App Configuration
// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
// Get your free API key at: https://openweathermap.org/api

const CONFIG = {
    API_KEY: 'c973dc5a0574e77f476b6dd73f96d08f', // Replace this with your actual API key
    API_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    UNITS: 'metric', // Use 'metric' for Celsius, 'imperial' for Fahrenheit
    LANG: 'en' // Language for weather descriptions
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}