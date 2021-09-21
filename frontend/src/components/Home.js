import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "../api/Api";
import Categories from "./Categories";
import Recipe from "./RecipeDetails";

const Home = () => {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    Api.getRecipes().then((data) => setRecipes(data));
  }, []);
  const recipe = recipes?.results?.map((item) => item);
  console.log(recipes)
  return (
    <>
      <section className="recipe-section spad">
        <div className="container">
          <div className="row">
            {recipe?.map((item) => (
              <div className="col-lg-4 col-sm-6">
                <div className="recipe-item" key={item.id}>
                  <Link to="">
                    <img src={item.image} alt="" />
                  </Link>
                  <div className="ri-text">
                    <Link to={"/category/" + item.category_id}>
                      <div className="cat-name">{item.category}</div>
                    </Link>
                    <Link to={"/recipes/" + item.id}>
                      <h4>{item.name}</h4>
                    </Link>
                    <p className="text-truncate">{item.description}</p>
                    <Switch>
                      <Route path="/categories" />
                      <Route path="/category/:id" component={Categories} />
                      <Route path="/recipes" />
                      <Route path="/recipe/:id" component={Recipe} />
                    </Switch>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
