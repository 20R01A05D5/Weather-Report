const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const resultElement = document.querySelector('.result');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const location = locationInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d598365f1de8f3a160a4644839a2c8b8&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      resultElement.innerHTML = `Temperature in ${location}: ${temperature}&#8451;, ${description}`;
    } else {
      resultElement.innerHTML = `Error: ${data.message}`;
    }
  } catch (error) {
    console.error(error);
    resultElement.innerHTML = 'An error occurred. Please try again later.';
  }
});

