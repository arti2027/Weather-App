# Real-Time Weather Web App

A modern, responsive weather application that provides real-time weather information using the OpenWeatherMap API. Features a beautiful gradient design, smooth animations, and mobile-first responsive layout.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **Beautiful UI**: Modern gradient design with glassmorphism effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Weather Details**: Temperature, humidity, wind speed, pressure, and visibility
- **Error Handling**: Comprehensive error messages for various scenarios
- **Loading States**: Smooth loading animations during API calls
- **Weather Icons**: Dynamic weather icons from OpenWeatherMap

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Internet connection for API calls
- OpenWeatherMap API key (free)

### API Key Setup

1. Visit [OpenWeatherMap](https://openweathermap.org/api) and create a free account
2. Generate an API key from your dashboard
3. Open `config.js` and replace `'YOUR_API_KEY'` with your actual API key:

```javascript
const CONFIG = {
    API_KEY: 'your_actual_api_key_here', // Replace this with your actual API key
    // ... other config options
};
```

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start searching for weather information!

## 📱 Usage

1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather conditions and details
4. Search for different cities as needed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with gradients, flexbox, and animations
- **JavaScript (ES6+)**: Async/await, fetch API, DOM manipulation
- **OpenWeatherMap API**: Weather data source
- **Font Awesome**: Icons and visual elements

## 📁 Project Structure

```
Weather_App/
├── index.html      # Main HTML file
├── style.css       # CSS styles and responsive design
├── config.js       # API configuration and settings
├── script.js       # JavaScript functionality and API integration
└── README.md       # This file
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful purple-to-blue gradient
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: CSS transitions and keyframe animations
- **Mobile-First**: Responsive design that works on all devices
- **Typography**: Clean, readable fonts with proper hierarchy

## 🔧 Customization

### Styling
- Modify `style.css` to change colors, fonts, or layout
- Adjust the gradient in the `body` selector for different themes
- Change card opacity and blur effects in `.weather-card`

### Functionality
- Add more weather details by modifying the API call in `script.js`
- Implement weather forecasts by using different OpenWeatherMap endpoints
- Add geolocation for automatic city detection

## 🌐 Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you encounter any issues:
1. Check that your API key is correctly set in `script.js`
2. Ensure you have an internet connection
3. Verify the city name spelling
4. Check the browser console for error messages

## 🔗 API Reference

This app uses the OpenWeatherMap Current Weather API:
- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: `q={city}&appid={key}&units=metric`

For more information, visit the [OpenWeatherMap API documentation](https://openweathermap.org/current).