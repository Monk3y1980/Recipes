import React from "react";
import { Api } from "../api/Api";
import { useState, useEffect } from "react";

const RecipeDetails = ({recipeId}) => {
  const [recipes, setRecipes] = useState({});
  
  useEffect(() => {
    Api.getRecipesId(recipeId).then((data) => setRecipes(data.data));
  }, [recipeId]);

  return (
    <>
      <section className="single-page-recipe spad">
        <div className="recipe-top">
          <div className="container-fluid">
            <div className="recipe-title">
              <h2>
                {recipes.category}
                <br />
              </h2>
              <ul className="tags">
                <li>Desert</li>
                <li>Asian</li>
                <li>Spicy</li>
              </ul>
            </div>
            <img src={recipes.image} alt={recipes.name} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="ingredients-item">
                <div className="intro-item">
                  <img src={recipes.image} alt={recipes.name} />
                  <h2>{recipes.name}</h2>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="reviews">4.9 from 25 reviews</div>
                  <div className="recipe-time">
                    <ul>
                      <li>
                        Prep time: <span>10 min</span>
                      </li>
                      <li>
                        Cook time: <span>10 min</span>
                      </li>
                      <li>
                        Yield: <span>5</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ingredient-list">
                  <div className="recipe-btn">
                    <a href="#">Print Recipe</a>
                    <a href="#" className="black-btn">
                      Pin Recipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="nutrition-fact">
              <div className="nutri-title">
                <h6>Nutrition Facts</h6>
                <span>Serves 4</span>
              </div>
              <ul>
                <li>Total Fat : 20.4g</li>
                <li>Cholesterol : 2%</li>
                <li>Chalories: 345</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="recipe-right">
              <div className="recipe-desc">
                <h3>Description</h3>
                <p>{recipes.description}</p>
              </div>
              <div className="instruction-list">
                <h3>Instructions</h3>
                <ul>
                  <li>
                    <span>01.</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet. Donec in sodales dui, a
                    blandit nunc. Pellentesque id eros venenatis, sollicitudin
                    neque sodales, vehicula nibh. Nam massa odio, porttitor
                    vitae efficitur non, ultricies volutpat tellus. Cras egestas
                    in lacus a finibus. Suspendisse sed urna at elit condimentum
                    viverra. Suspendisse non lobortis nisi. Maecenas accumsan
                    quam quis porta laoreet. Aliquam felis odio, aliquet
                    fermentum semper at, porttitor ac mi.
                  </li>
                  <li>
                    <span>02.</span>
                    Donec sit amet enim tortor. Sed egestas nulla nibh, vitae
                    porta velit sagittis eget. Donec vitae tellus semper, cursus
                    sem id, iaculis purus. Aenean ligula risus, maximus
                    tristique eros vel, auctor ornare tortor. Aliquam vel augue
                    sapien. Duis non auctor ante, ac vestibulum tortor. Etiam
                    quis dolor ultricies, dignissim ante a, ornare ipsum.
                    Phasellus suscipit rhoncus nulla, quis bibendum tortor
                    elementum ac. Nullam viverra tellus diam, nec accumsan orci
                    aliquam sed. Sed placerat sagittis lacus, non rutrum diam
                    volutpat id.
                  </li>
                  <li>
                    <span>03.</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet. Donec in sodales dui, a
                    blandit nunc. Pellentesque id eros venenatis, sollicitudin
                    neque sodales, vehicula nibh. Nam massa odio, porttitor
                    vitae efficitur non, ultricies volutpat tellus. Cras egestas
                    in lacus a finibus. Suspendisse sed urna at elit condimentum
                    viverra. Suspendisse non lobortis nisi. Maecenas accumsan
                    quam quis porta laoreet. Aliquam felis odio, aliquet
                    fermentum semper at, porttitor ac mi.
                  </li>
                  <li>
                    <span>04.</span>
                    Donec sit amet enim tortor. Sed egestas nulla nibh, vitae
                    porta velit sagittis eget. Donec vitae tellus semper, cursus
                    sem id, iaculis purus. Aenean ligula risus, maximus
                    tristique eros vel, auctor ornare tortor. Aliquam vel augue
                    sapien. Duis non auctor ante, ac vestibulum tortor. Etiam
                    quis dolor ultricies, dignissim ante a, ornare ipsum.
                    Phasellus suscipit rhoncus nulla, quis bibendum tortor
                    elementum ac. Nullam viverra tellus diam, nec accumsan orci
                    aliquam sed. Sed placerat sagittis lacus, non rutrum diam
                    volutpat id.
                  </li>
                </ul>
              </div>
              <div className="notes">
                <h3>Notes</h3>
                <div className="notes-item">
                  <span>i</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet. Donec in sodales dui, a
                    blandit nunc. Pellentesque id eros venenatis, sollicitudin
                    neque sodales, vehicula nibh. Nam massa odio, porttitor
                    vitae efficitur non, ultricies volutpat tellus. Cras egestas
                    in lacus a finibus. Suspendisse sed urna at elit condimentum
                    viverra.
                  </p>
                </div>
                <div className="notes-item">
                  <span>i</span>
                  <p>
                    Donec in sodales dui, a blandit nunc. Pellentesque id eros
                    venenatis, sollicitudin neque sodales, vehicula nibh. Nam
                    massa odio, porttitor vitae efficitur non, ultricies
                    volutpat tellus. Cras egestas in lacus a finibus.
                    Suspendisse sed urna at elit condimentum viverra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetails;
