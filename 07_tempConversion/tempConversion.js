const convertToCelsius = function(temp) {
  // (32°F − 32) × 5/9 
  let celcius = ((temp - 32) * 5) / 9;
  
  let rounded = parseFloat(celcius.toFixed(1))
  return rounded;
};

const convertToFahrenheit = function(temp) {
  // (0°C × 9/5) + 32
  let fahrenheit = ((temp * 9) / 5) + 32;
  
  let rounded = parseFloat(fahrenheit.toFixed(1))
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
