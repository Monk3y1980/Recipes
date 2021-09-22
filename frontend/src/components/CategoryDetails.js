import React from "react";
import { useState, useEffect } from "react";
import { Link, Router, Route } from "react-router-dom";
import { Api } from "../api/Api";



const CategoryDetails = ({ categoryId }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Api.getCategory(categoryId).then((data) => setRecipes(data.recipes));
  }, [categoryId]);

  return (
    <>
      {recipes.map((item) => (
        <section className="categories-feature-recipe spad">
          <div className="container po-relative">
            <div className="row">
              <div className="col-lg-7">
                <div className="cfr-item">
                  <div className="section-title">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="cfr-item-img set-bg">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cfr-item-text">
                    <Link to={"/recipes/" + item.id}>
                      <h4>{item.name}</h4>
                    </Link>
                    <p>{item.description}</p>
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
