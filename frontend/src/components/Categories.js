import React from "react";
import CategoryDetails from "./CategoryDetails"


const Categories = ({match}) => {
   // получаем идентификатор из параметра URL
   const Id = match.params.id
  return (
    <>
      <CategoryDetails categoryId={Id} />
    </>
  );
};
export default Categories;
