// functions have inputs and outputs
var expressGratitude = function(name) {
  console.log("You have saved our lives, " + name);
  console.log("We are eternally grateful.");
};

var join = function(firstWord, secondWord) {
  var joinedWord = firstWord + " " + secondWord;

  return joinedWord;
};

var greeting = join("Hello", "there");

console.log(greeting);

var sumOfThree = function(firstNumber, secondNumber, thirdNumber) {
  var sum = firstNumber + secondNumber + thirdNumber;

  return sum;
};

var productOfThree = function(firstNumber, secondNumber, thirdNumber) {
  var product = firstNumber * secondNumber * thirdNumber;

  return product;
};
