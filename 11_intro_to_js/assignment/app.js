var price = parseInt(prompt ("What is the price of the product you are buying?"));
var number = parseInt(prompt ("How many items of the product are in inventory"));
var money = parseInt(prompt ("How much money do you have?"));
var wish = parseInt(prompt (" how many items they wish to buy?"));

if (money >= price && number > 0 && wish < number) {
  console.log ("Purchase complete");
} else if (money < price && number > 0) {
  console.log ("Not enough money");
} else if (money >= price && wish > number) {
  console.log ("Not enough inventory");
}
