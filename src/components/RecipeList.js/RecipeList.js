import { Link } from '@reach/router';
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
        <Link to={`/recipes/${item.id}`} key = {item.id} className="recipeList__link">
        <RecipeItem
        title = {item.title}
        cookTime = {item.cook_time}
        // image = {item.images[0]?.formats.thumbnail.url}
        />
        </Link>
      ))}
    </div>
    </>
  )
}
