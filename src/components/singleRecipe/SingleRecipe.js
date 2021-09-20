import './SingleRecipe.scss';
import React from 'react';
import Nutritional from '../Nutritional/Nutritional';
import  {Link} from '@reach/router';

export default function SingleRecipe({fat,carbs, protein, ingredients, kcal,title, description, procedure}) {
  

  return (
    <div className="singleRecipe">
      <Link className="singleRecipe__btn goback" to='/'>Go back</Link>
      <h2 className="singleRecipe__title">{title}</h2>
      <p>{description}</p>
    <h3 className="singleRecipe__title">Ingredients</h3>
    <div className="singleRecipe__ingredients">
        {ingredients?.map((ingredient)=>(
          <div className="singleRecipe__ingredients__ingredient" key={ingredient.name}>
            <p className="singleRecipe__ingredients__ingredient__name">{ingredient.name}</p>
            <span className="singleRecipe__ingredients__ingredient__amount">{ingredient.amount}</span>
          </div>
        ))}
    </div>

    <div>
      <h3 className="singleRecipe__title">Procedure</h3>
      <p>{procedure} </p>
    </div>
    

      <h3>Nutritional Values</h3>
      <div className="singleRecipe__nutritional">
        <Nutritional 
        quantity={kcal}
        nutrients="Calories"
        value="Kcal"
        />
        <Nutritional 
        quantity={protein}
        nutrients="Protein"
        value="g"
        />
        <Nutritional 
        quantity={fat}
        nutrients="Fat"
        value="g"
        />
        <Nutritional 
        quantity={carbs}
        nutrients="Carbs"
        value="g"
        />
      </div>

    </div>
  )
}
