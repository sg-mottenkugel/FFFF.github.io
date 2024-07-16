document.getElementById('generate-button').addEventListener('click', generateRandomImage);

function generateRandomImage() {
  fetch('https://source.unsplash.com/random')
    .then(response => {
      document.getElementById('random-image').src = response.url;
    })
    .catch(error => console.error('Error fetching image:', error));
}
