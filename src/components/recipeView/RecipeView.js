import './RecipeView.scss';
import React, { useState } from 'react';
import Nutritional from '../Nutritional/Nutritional';
import { Modal } from '../modal/Modal';
import  {Link} from '@reach/router';

export default function RecipeView({fat,carbs, protein, ingredients, kcal,title, description, id}) {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
		setShowModal((prev) => !prev);
	};
  return (
    <div className="recipeView">
      <h2 className="recipeView__title">{title}</h2>
      <p>{description}</p>
    <h3 className="recipeView__title">Ingredients</h3>
    <div className="recipeView__ingredients">
        {ingredients?.slice(0, 3).map((ingredient)=>(
          <div className="recipeView__ingredients__ingredient" key={ingredient.name}>
            <p className="recipeView__ingredients__ingredient__name">{ingredient.name}</p>
            <span className="recipeView__ingredients__ingredient__amount">{ingredient.amount}</span>
          </div>
        ))}
    </div>
    <Modal
      id={id}
      showModal={showModal}
      setShowModal={setShowModal}
      ingredients={ingredients}
    />
    <div className="recipeView__buttons" >
      <button onClick={openModal} className="recipeView__btn">View all ingredients</button>
      <Link className="recipeView__btn"  to={`/recipes/${id}`}>Show recipe</Link>
    </div>

      <h3>Nutritional Values</h3>
      <div className="recipeView__nutritional">
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
