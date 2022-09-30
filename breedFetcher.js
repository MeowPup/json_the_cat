const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`Request not found`,null);
    }

    const data = JSON.parse(body);

    let firstEntry = data[0];
    if (firstEntry) {
      callback(null,firstEntry.description);
    } else {
      callback(`Cat not found!`,null);
    }
  });
};

module.exports = { fetchBreedDescription };

