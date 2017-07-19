// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<p>Wrap things in ca$h</p>
// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>

$("#new-item-button").on("click", function() {
// console.log("Test");
var input = $("#new-item-text").val();
// console.log(input);
var li = $("<li/>").text(input);
console.log(li.text());
var toDoUl = $(".todo-list");
li.appendTo(toDoUl);
});



var addNewItem = function(item) {

};

// Move all items from "Todo" to "Done"

var completeAll = function() {

};

// Remove all items from "Done"

var clearAll = function() {

};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var renderAllItems = function(itemsToRender) {

};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};
