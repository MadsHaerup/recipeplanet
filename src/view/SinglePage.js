import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleRecipe from '../components/singleRecipe/SingleRecipe';

export const SinglePage = ({id}) => {

  const [item, setItem] = useState([]);
  
useEffect(() => {
  axios.get(`https://roskilde-recipe-api.herokuapp.com/recipes/${id}` )
  .then((response)=>{
    console.log('singlepage', response.data)
    setItem(response.data)
  })
}, [setItem])
  return (
    <div>
      <SingleRecipe 
      description={item.description}
      title={item.title}
      fat={item.fat}
      carbs={item.carbs}
      protein={item.protein}
      kcal={item.kcal}
      ingredients={item.ingredients}
      procedure={item.procedure}
      
      />
    </div>
  )
}
