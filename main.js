// This line of code makes kelvin constantly equal to 293.
const kelvin = 293;
// This code creates a variable called celsius, and we get the celsius value by subtracting 273 from 293.
var celsius = kelvin - 273;
// This variable converts celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
console.log(`The temperature is ${kelvin} degrees Kelvin`);
// Math.floor will round a decimal down to the nearest integer.
console.log(`The temerature is ${Math.floor(celsius)} degrees Celsius`);
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit.`);