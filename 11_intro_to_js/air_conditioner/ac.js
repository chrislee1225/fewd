var currTemp = parseInt(prompt ("What is the current temperature?"));
var desTemp = parseInt(prompt ("What is your desired temperature?"));

if (desTemp > currTemp) {
  console.log ("Turning off the A/C! It's too cold!");
} else if (desTemp < currTemp) {
  console.log ("Turning on the A/C! It's boiling in here!");
} else if (desTemp == currTemp) {
  console.log ("A perfect temperature. Keep the cool!");
}
