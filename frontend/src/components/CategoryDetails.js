import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Api } from "../api/Api";

const CategoryDetails = ({ categoryId }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Api.getCategory(categoryId).then((data) => setRecipes(data.recipes));
  }, [categoryId]);

  return (
    <>
    {recipes.map((item) => (
      <section class="categories-feature-recipe spad">
        
        <div class="section-title">
          <h5>{item.name}</h5>
        </div>
        <div class="container po-relative">
          <div class="plus-icon">
            <i class="fa fa-plus"></i>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="cfr-item">
                <div
                  class="cfr-item-img set-bg">
                  <img src={item.image} alt={item.name}/>
                  <i class="fa fa-plus"></i>
                </div>
                <div class="cfr-item-text">
                  <div class="cat-name">Vegan</div>
                  <Link to={"/recipes/" + item.id}>
                    <h4>{item.name}</h4>
                  </Link>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ))}
    </>
  );
};

export default CategoryDetails;
