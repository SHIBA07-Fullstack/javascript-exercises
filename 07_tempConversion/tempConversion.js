const convertToCelsius = function(deg) { 
      let result = Number((deg-32)*5/9).toFixed(1);
      return parseFloat(result);
};

const convertToFahrenheit = function(deg) {
      let result = Number(deg*(9/5)+32).toFixed(1);
      return parseFloat(result);
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToCelsius(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
