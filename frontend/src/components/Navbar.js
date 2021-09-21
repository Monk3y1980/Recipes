import React from 'react'
import { Link, Route, Switch, Router} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import History from './History';
import RecipeDetails from './RecipeDetails';
import Recipes from './Recipes';
// import logo from '../img/logo.png'
import CategoryDetails from './CategoryDetails';


const Navbar = () => {
    return (
        <Router history={History}>
        <header className="header-section">
        <div className="container">
            <div className="logo">
                <Link to="/"><img src="" alt="hompage logo" /></Link>
            </div>
            <div className="nav-menu">
                <nav className="main-menu mobile-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                    </ul>
                </nav>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/categories" component={CategoryDetails} />
            <Route path="/category/:id" component={Categories} />
            <Route path="/recipe" component={RecipeDetails} />
            <Route path="/recipes/:id" component={Recipes}/>
    </Switch>
    </header>
    </Router>
    )
}


export default Navbar;