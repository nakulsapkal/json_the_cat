const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=";

  request((url += breedName), (error, response, body) => {
    // console.error("here:", error);
    if (error) {
      callback(error, null);
    } else if (JSON.parse(body).length > 0) {
      callback(null, JSON.parse(body)[0].description);
    } else {
      callback(null, null);
    }


  });
};

module.exports = { fetchBreedDescription };