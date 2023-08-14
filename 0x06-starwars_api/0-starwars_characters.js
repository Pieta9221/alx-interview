#!/usr/bin/node

const axios = require('axios');

const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

axios.get(url)
  .then(async (response) => {
    const charactersArray = response.data.characters;
    for (const character of charactersArray) {
      try {
        const characterResponse = await axios.get(character);
        console.log(characterResponse.data.name);
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch((error) => {
    console.error(error);
  });
