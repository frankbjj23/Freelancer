/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
function randomFreelancer() {
  const randomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const randomRate = () => {
    const range = PRICE_RANGE.max - PRICE_RANGE.min;
    return Math.floor(Math.random() * range) + PRICE_RANGE.min;
  };
  return {
    name: randomElement(NAMES),
    occupation: randomElement(OCCUPATIONS),
    rate: randomRate(),
  };
}
console.log(randomFreelancer());
