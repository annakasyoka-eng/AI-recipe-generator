function displayRecipe(response) {
new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  cursor: "",
  delay: 1,
});

}

function generateRecipe(event) {
  event.preventDefault();

let instructionsElement = document.querySelector("#ingredients"); 
let apiKey = "83ff5f4d2142b0ao5dc9eta527f4af13";
let prompt = `Generate a unique and delicious recipe based on the following ${instructionsElement.value}. Provide precise measurements and a step-by-step guide.`;
let context = 
"You are a world class chef that creates unique and delicious recipes based on user input. Be precise with measurements and ingredients. Focus on clarity and detail in your instructions. Follow a structured format for the recipe.The main title and all sub-headings should be BOLD and MUST be on their own separate lines.Use bullet points for ingredients, and ensure that each individual sentence/instruction in the steps is also on its own separate line for maximum readability.You MUST follow these rules strictly.FOLLOW THIS INSTRUCTIONS. DO NOT DEVIATE FROM THEM UNDER ANY CIRCUMSTANCES.";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
