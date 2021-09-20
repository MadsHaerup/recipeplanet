import React from 'react';
import { Login } from '../components/login/Login';
import Navbar from '../components/nav/Navbar';
import RecipeList from '../components/RecipeList.js/RecipeList';
import RecipeContainer from '../components/recipeView/RecipeContainer';
import './MainPage.scss';

export default function MainPage({id}) {
  
  return (
    <div className="mainPage">
      <Login />
      <h1>Recipe Planet</h1>
      <Navbar/>
      <RecipeContainer params={id} />
      <RecipeList/>
    </div>
  )
}
