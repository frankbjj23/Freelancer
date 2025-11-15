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
//console.log(randomFreelancer());

//2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const freelancers = Array.from({ length: NUM_FREELANCERS }, randomFreelancer);

// console.log(freelancers.length);
// console.log(freelancers[0]);

//3. Write a function that returns the average rate of all freelancers in state.
function averageRateFreelancers() {
  const totalRateSum = freelancers.reduce((sum, freelancer) => {
    return sum + freelancer.rate;
  }, 0);
  return totalRateSum / freelancers.length;
}
console.log(averageRateFreelancers());
