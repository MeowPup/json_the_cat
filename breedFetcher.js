const request = require('request');

const findBreedByName = (breedId) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedId}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log("Error: request not found", error);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log("Cat not found!");
      return;
    }

    let firstEntry = data[0].description;

    console.log(firstEntry);
  });
};

const breed = process.argv[2];
findBreedByName(breed);