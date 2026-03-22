// Default recipe data
const recipes = [
    {
        name: "Spaghetti Bolognese",
        ingredients: ["spaghetti", "minced meat", "tomato sauce", "onion", "garlic"],
        instructions: "Cook spaghetti. In another pan, cook onion and garlic, add meat, then sauce."
    },
    {
        name: "Chicken Curry",
        ingredients: ["chicken", "curry powder", "coconut milk", "onion", "rice"],
        instructions: "Cook rice. In a pan, cook onion and chicken, add curry powder and coconut milk."
    },
    {
        name: "Beef Tacos",
        ingredients: ["taco shells", "minced beef", "lettuce", "tomato", "cheese"],
        instructions: "Cook beef. Fill taco shells with beef and toppings."
    }
];

// Function to add a new recipe
function addRecipe(name, ingredients, instructions) {
    recipes.push({ name, ingredients, instructions });
}

// Function to remove a recipe by name
function removeRecipe(name) {
    const index = recipes.findIndex(recipe => recipe.name === name);
    if (index !== -1) {
        recipes.splice(index, 1);
    }
}

// Function to list all recipes
function listRecipes() {
    return recipes.map(recipe => recipe.name).join(", ");
}

// Function to get recipe details by name
function getRecipeDetails(name) {
    const recipe = recipes.find(recipe => recipe.name === name);
    return recipe ? recipe : "Recipe not found.";
}

// Example usage
console.log("Available Recipes: " + listRecipes());
