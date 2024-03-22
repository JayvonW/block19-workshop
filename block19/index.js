const initialFreelancers = [
  {name: "Jayvon", price: 25, occupation: "Developer"},
  {name: "Drew", price: 35, occupation: "Plummer"},
  {name: "Shane", price: 67, occupation: "Janitor"},
  {name: "Caden", price: 18, occupation: "Construction Worker"},
];
const addedFreelancers = [
{ name: "Justin", price: 52, occupation: "Lawyer" },
{ name: "Duke", price: 70, occupation: "Programmer" },
{ name: "Jayden", price: 45, occupation: "Teacher" },
{ name: "Gerald", price: 90, occupation: "Truck Driver" },
];

const initialFrees = document.querySelector("#initial");

initialFreelancers.forEach(item => {
  const itemElement = document.createElement("li"); 
  itemElement.textContent= `Freelancer: ${item.name}  Price: $${item.price}  Occupation: ${item.occupation}`; 
  initialFrees.append(itemElement);
});

const sum = initialFreelancers.reduce((acc, item) => acc + item.price, 0);
const mean = sum / initialFreelancers.length;
console.log(mean);

const averageMessage = document.querySelector("#message");
const average1 = document.createElement("p");
average1.textContent= `The average cost of available freelancers is $${mean}.`;
averageMessage.append(average1);

let index=0;
function toBeAdded () {
 if (index < addedFreelancers.length) {
    const item =addedFreelancers[index];
    const addedElement = document.createElement("li"); 
    addedElement.textContent= `Freelancer: ${item.name}  Price: $${item.price}  Occupation: ${item.occupation}`; 
    initialFrees.append(addedElement);
    index++;
}else {
    clearInterval(addInterval);
};
}

const addInterval = setInterval(toBeAdded, 3000);

function random () {
    const randPerson = addedFreelancers[Math.floor(Math.random()*addedFreelancers.length)];
    addedFreelancers.push(randPerson);
}