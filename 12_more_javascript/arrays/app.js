var colors = ["black", "blue", "olive"];
//               0       1        2

// Print the first color
console.log(colors[0]);

// Print the last color
console.log(colors[ colors.length - 1 ]);

// Print how many colors are in the array
console.log(colors.length);

// Print a sentence for each color in your array
// console.log("I like the color " + colors[0]);
// console.log("I like the color " + colors[1]);
// console.log("I like the color " + colors[2]);
// or

for(var i = 0; i < colors.length; i++){
  console.log("I like the color " + colors[i]);
}
