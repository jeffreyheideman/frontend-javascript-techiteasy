// //opdracht 2a
let totalSold= 0;
for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold;
}

console.log(totalSold);

//Opdracht 2b
const tvsSold = document.getElementById("total-sold");

tvsSold.textContent = totalSold;


//opdracht 2c
let originalStock = 0
for (let i = 0; i < inventory.length; i++) {
    originalStock += inventory[i].originalStock;
}

console.log(originalStock);

//Opdracht 2d
const tvsBought = document.getElementById("original-stock");
tvsBought.textContent = originalStock

//Opdracht 2e
const stockLeft = originalStock - totalSold;

const toBeSold = document.getElementById("stock-left");
toBeSold.textContent = stockLeft
