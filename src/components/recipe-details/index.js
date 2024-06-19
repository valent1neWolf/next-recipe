import Link from "next/link";

export default function RecipeDetails({ singleRecipe }) {
  return (
    <div>
      <div className="m-4">
        <Link href={"/recipe-list"} className="hover:text-blue-800">
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
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={singleRecipe?.image}
              name={singleRecipe?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {singleRecipe?.name}
            </h2>
            <div className=" gap-4 mt-5">
              <p className="text-2xl  text-gray-700">
                {singleRecipe?.mealType[0]}
              </p>
            </div>
            <div className=" mt-5">
              <p className="text-xl  text-gray-800">{singleRecipe?.cuisine}</p>
            </div>
            <div className="  mt-5">
              <p className="text-lg  text-gray-700">Ingredients</p>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {singleRecipe?.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
