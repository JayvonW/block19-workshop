// Pseudocode
// 1. Get input of order from user
// 2. Split the input into arrays
// 3. Use a loop to go through the input of user to find the number of flavors
// 4. Use an object to return the order to the user

const froyoOrder = prompt("Hello! Please enter your order of froyo flavors in a comma-seperated format:")

const stringArray = froyoOrder.split(",");

const order = []
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  order.push(str);
}

let numVanilla = 0
let numStrawberry = 0
let numCoffee = 0

for (let i = 0; i < order.length; i++){
  if (order[i] === "vanilla"){
    numVanilla += 1;
  } else if (order[i] === "strawberry"){
    numStrawberry += 1;
  } else if (order[i] === "coffee"){
    numCoffee += 1;
  }
}
const userOrder = {
  Vanilla: numVanilla,
  Strawberry: numStrawberry,
  Coffee: numCoffee,
}
console.log(userOrder)