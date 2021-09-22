import React from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import History from "./History";
import RecipeDetails from "./RecipeDetails";
import Recipes from "./Recipes";
import CategoryDetails from "./CategoryDetails";

const Navbar = () => {
  return (
    <Router history={History}>
      <header class="header-section">
        <div class="container">
          <div class="logo">
            <Link to="/">
              <img
                src="../../static/frontend/img/logo.png"
                alt="homepage logo"
              />
            </Link>
          </div>
          <div class="nav-menu">
            <nav class="main-menu mobile-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/categories">Best Of Categories</Link>
                </li>
              </ul>
            </nav>
            <div class="nav-right search-switch">
              <i class="fa fa-search"></i>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/categories" component={CategoryDetails} />
        <Route path="/category/:id" component={Categories} />
        <Route path="/recipe" component={RecipeDetails} />
        <Route path="/recipes/:id" component={Recipes} />
      </Switch>
    </Router>
  );
};

export default Navbar;
