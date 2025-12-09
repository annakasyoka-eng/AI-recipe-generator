let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);

function generateRecipe(event) {
  event.preventDefault();

  new Typewriter('#recipe', {
  strings: ['Generating your recipe...'],
  autoStart: true,
  cursor: "",
});
}