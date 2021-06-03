const request = require('request');
const breed = process.argv[2];


let url = "https://api.thecatapi.com/v1/breeds/search?q=";

url += breed;
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length > 0) {
    console.log(data[0].description);
  } else if (breed === undefined) {
    console.log(`Please give Breed Name in input`);
  } else {
    console.log(`${breed} breed is not found!`);
  }
});