const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.error('Error details:\n', error);
  } else if (breedName === undefined) {
    console.log(`Please give Breed Name in input`);
  } else if (desc === undefined || desc === null) {
    console.log(`${breedName} breed is not found!`);
  } else {
    console.log(desc);
  }

});