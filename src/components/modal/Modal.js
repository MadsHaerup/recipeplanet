import React from "react";
import "./Modal.scss";

export const Modal = ({ showModal, setShowModal,id,ingredients }) => {
	return (
		<>
			{showModal ? (
				<>
					<div className="modalContainer" onClick={() => setShowModal((prev) => !prev)}></div>
				<div className="modal">
        
        {ingredients?.map((ingredient)=>(
          <div className="recipeView__ingredients__ingredient" key={ingredient.name}>
            <p className="recipeView__ingredients__ingredient__name">{ingredient.name}</p>
            <span className="recipeView__ingredients__ingredient__amount">{ingredient.amount}</span>
          </div>
        ))}
        </div>
				</>
			) : null}
		</>
	);
};