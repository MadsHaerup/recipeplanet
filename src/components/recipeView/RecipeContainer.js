import './RecipeContainer.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeView from './RecipeView';

export default function RecipeContainer({params}) {
const [items, setItems] = useState([]);

useEffect(() => {
  axios.get(params !== undefined ? `https://roskilde-recipe-api.herokuapp.com/recipes?_where[categories.name]=${params}` :`https://roskilde-recipe-api.herokuapp.com/recipes` )
  .then((response)=>{
    console.log('RecipeContainer', response.data)
    setItems(response.data)
  })
}, [setItems,params])

  return (
    <div className="recipeContainer">

      {items.map((item)=>(
        <RecipeView 
        key={item.id}
        id={item.id} 
        title={item.title}
        description = {item.description}
        ingredients = {item.ingredients}
        fat={item.fat}
        carbs={item.carbs}
        protein = {item.protein}
        kcal = {item.kcal}        
        />
      ))}
    </div>
  )
}
