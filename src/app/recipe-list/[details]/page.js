import RecipeDetailsData from "@/components/recipe-details";

async function fetchListOfRecipe(recipeId) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function RecipeDetails({ params }) {
  console.log(params.details);
  const singleRecipe = await fetchListOfRecipe(params.details);
  console.log(singleRecipe);
  return (
    <div>
      <RecipeDetailsData singleRecipe={singleRecipe} />
    </div>
  );
}
