import React from "react";
import RecipeDetails from "./RecipeDetails";

const Resipes = ({ match }) => {
  // получаем идентификатор из параметра URL
  const recipeId = match.params.id;
  return (
    <>
      <RecipeDetails recipeId={recipeId} />
    </>
  );
};
export default Resipes;
