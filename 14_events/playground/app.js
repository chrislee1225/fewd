console.log("Loaded,bro");

$(".potato-generator").click(function () {
 var potatoList = $(".potatoes");

 var newPotato = $("<li/>");
 newPotato.html("Potato");

 newPotato.appendTo(potatoList);
});

$(".disappear").click(function() {
  $(this).remove();
});

$(".alert-button").click(function() {
  var userInput = $(".alert-input").val();
  alert(userInput);
});

$(".alert-form").submit(function(event) {
  event.preventDefault();
  var formInput = $(".alert-form-input").val();
  alert(formInput);
});

$("#change-input").change(function(){
  alert("Oh no, you touched the golden egg!");
});

$(".pokemon").click(function(){
  var pokemon = $(this);
  var pokemonName = pokemon.html();
  console.log(pokemonName);
});

$(".capital-button").click(function() {
  var userInput = $("#capital-input").val();
  var capitalizedInput = userInput.toUpperCase();
  console.log(capitalizedInput); 
});
