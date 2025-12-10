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

  let prompt = `
Generate a unique and delicious recipe based on the following: ${instructionsElement.value}.
Provide precise measurements and a step-by-step guide.
`;

  let context = `
You are a recipe generator. Always follow this exact format:

Recipe Name

Ingredients:
- Ingredient 1
- Ingredient 2
- Ingredient 3

Instructions:
1. Step 1
2. Step 2
3. Step 3

Formatting rules:
- Use bullet points for ingredients.
- Use numbered steps for instructions.
- Always include both sections: Ingredients and Instructions.
- Never write the recipe as one paragraph.
- Use clean spacing and clear line breaks.
- Do NOT add markdown or code blocks.
- Do NOT mix ingredients and instructions together.
`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "<div class='loading'>Generating your recipe...</div>";

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
