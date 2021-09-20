import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecipeItem from '../recipeItem/RecipeItem';
import './RecipeList.scss';

export default function RecipeList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://roskilde-recipe-api.herokuapp.com/recipes')
    .then((response)=>{ 
      console.log("recipelist response",response.data)
      setItems(response.data)
    })
  }, [setItems])

  return (
    <>
    <h2>More recipes</h2>
    <div className="recipeList">
      {items.map((item) => (
        <RecipeItem
        key = {item.id}
        title = {item.title}
        cookTime = {item.cook_time}
        // image = {item.images[0]?.formats.thumbnail.url}
        />
      ))}
    </div>
    </>
  )
}
