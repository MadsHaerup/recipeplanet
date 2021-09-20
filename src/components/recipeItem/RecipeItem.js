import './RecipeItem.scss';
import React from 'react';

export default function RecipeItem({cookTime, image, title}) {

  return (
    <div className="recipeItem">
      {/* <img className="recipeItem__img" src={"http://localhost:1337"+image} alt="" /> */}
      <div className="recipeItem__textContainer">
        <strong className="recipeItem__title" >{title}</strong>
        <p className="recipeItem__cooktime">{cookTime + " min cooktime"} </p>
      </div>
    </div>
  )
}
