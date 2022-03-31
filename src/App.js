import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import DoneRecipes from './pages/DoneRecipes';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Foods from './pages/Foods';
import FoodIngredients from './pages/FoodIngridients';
import DrinkIngredients from './pages/DrinkIngridients';
import InProgress from './pages/InProgress';
import Login from './pages/Login';
import Nationalities from './pages/Nationalities';
import Profile from './pages/Profile';
import Provider from './context/Provider';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';

function App() {
  return (
    <Provider>
      <h1>App</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route path="/foods/:id" component={ Details } />
          <Route path="/drinks/:id" component={ Details } />
          <Route path="/foods/:id/in-progress" component={ InProgress } />
          <Route path="/drinks/:id/in-progress" component={ InProgress } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route path="/explore/foods/ingredients" component={ FoodIngredients } />
          <Route path="/explore/drinks/ingredients" component={ DrinkIngredients } />
          <Route path="/explore/foods/nationalities" component={ Nationalities } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
