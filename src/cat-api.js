function fetchBreeds() {
  const apiKey =
    'live_HLGUWzvJuiE1VeRTHvkYTULgbOt3ZxZUoaMKzGLipoZIjD44aDqiQjedexU2gF5X';
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey,
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching cat breeds:', error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  const apiKey =
    'live_HLGUWzvJuiE1VeRTHvkYTULgbOt3ZxZUoaMKzGLipoZIjD44aDqiQjedexU2gF5X';
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  )
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
      throw error;
    });
}

export { fetchBreeds, fetchCatByBreed };
