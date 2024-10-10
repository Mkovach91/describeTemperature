const fahrenheitTemp = () => {
  let anwser = prompt (`What is the temprature outside in Fahrenheit? We will convert it to Celsius for you!`);
  return (Number(anwser));
}

const fahrenheit = fahrenheitTemp();

const convertToCelsius = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5/9);
  
  let describeTemperature
  if (fahrenheit < 32) {describeTemperature = `very cold`;}
  else if (fahrenheit < 64) {describeTemperature = `cold`;}
  else if (fahrenheit < 86) {describeTemperature = `warm`;}
  else if (fahrenheit < 100) {describeTemperature = `hot`;}
  else if (fahrenheit >= 100) {describeTemperature = `very hot`;}
  
  alert (`You said the temprature outside was ${fahrenheit}. That means the temprature outside in Celsuis is ${celsius.toFixed(0)} and it feels ${describeTemperature}`)
}

convertToCelsius (fahrenheit)