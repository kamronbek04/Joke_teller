const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apikey = 'K992QqxN+JFa57FgY5V8bA==2IjBj82x1h3TuUAM';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apikey,
  },
};
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  try {
    jokeEl.innerText = 'Updating..';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = 'tell me a joke';

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = 'An error happens, try again later!!!';
  }
}

btnEl.addEventListener('click', getJoke);
