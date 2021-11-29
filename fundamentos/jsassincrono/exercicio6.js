const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature() {
    setTimeout(() => {
        console.log('Mars temperature is: ' + getMarsTemperature() + ' degree Celsius')
    }, messageDelay())
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

  const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

  function sendMarsTemperature2(callback, handleError) {
    const chance = Math.random()
    if (chance >= 0.6) {
        handleError('Robot is busy')
    }
    if (chance < 0.6) {
    callback(getMarsTemperature())
}
}

sendMarsTemperature2(temperatureInFahrenheit, handleError);
sendMarsTemperature2(greet, handleError);
