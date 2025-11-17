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

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
function randomFreelancer() {
  return {
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    occupation: OCCUPATIONS[getRandomNumber(0, OCCUPATIONS.length - 1)],
    rate: getRandomNumber(PRICE_RANGE.min, PRICE_RANGE.max),
  };
}

//2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(randomFreelancer());
}

//3. Write a function that returns the average rate of all freelancers in state.
const avgFunction = () => {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    const freelancer = freelancers[i];
    sum += freelancer.rate;
  }
  const averageRate = sum / freelancers.length;
  return averageRate;
};

//4. Use that function to initialize a state variable which will store the average rate of all freelancers.
const averageRate = avgFunction();

//5. Write a component function to represent a single freelancer.
function renderFreelancer(name, occupation, rate) {
  return `
  <tr>
      <td>${name}</td>
      <td>${occupation}</td>
      <td>${rate}</td>
    </tr>
  `;
}
//6. Write a component function to represent an array of freelancers.
function renderFreeArrayOfFreelancers() {
  return `
  <table>
    <thead>
      <tr>
        <td>Name</td>
        <td>Occupation</td>
        <td>rate</td>
      <tr>
    </thead>
    <tbody>
      ${renderFreelancer("ana", "dancer", "50")}
      ${renderFreelancer("bob", "singer", "40")}
    </tbody>
  </table>
  `;
}
const html = renderFreeArrayOfFreelancers();
document.getElementById("app").innerHTML = html;
