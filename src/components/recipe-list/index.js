import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipes }) {
  console.log(recipes);
  return (
    <div className="w-full min-h-screen">
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold mb-4">Recipes</h2>
        <div className="mb-4 ">
          <Link href={"/"} className="hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="inline-block mr-1 relative -top-0.5"
              viewBox="0 0 16 16"
            >
              <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
            </svg>{" "}
            Go back
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {recipes && recipes.length > 0
            ? recipes.map((recipe) => (
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                  <Card key={recipe.id}>
                    <CardHeader>
                      <CardTitle
                        className={`${
                          recipe.name.length > 28
                            ? "text-lg"
                            : recipe.name.length > 20
                            ? "text-xl"
                            : "text-2xl"
                        }`}
                      >
                        {recipe.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="hover:px-0.5 transition-padding duration-300 ease-in-out">
                      <img src={recipe.image} alt={recipe.name} />
                    </CardContent>

                    <CardFooter className="flex justify-center">
                      <p className="text-sm text-gray-500 ">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="inline-block mr-0.5  relative -top-0.5"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>{" "}
                          {recipe.rating}
                        </span>
                        <span className="mx-2">•</span>
                        <span>Serving: {recipe.servings}</span>
                        <span className="mx-2">•</span>
                        <span>
                          Time:{" "}
                          {recipe.prepTimeMinutes + recipe.cookTimeMinutes}m
                        </span>
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            : "No recipes found"}
        </div>
      </div>
    </div>
  );
}
