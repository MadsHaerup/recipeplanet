import React from 'react';
import './Nutritional.scss';

export default function Nutritional({quantity, nutrients, value }) {
  return (
        <div className="nutritional">
          <p className="nutritional__quantity">{quantity}</p>
          <p className="nutritional__nutrients">{nutrients}</p>
          <p className="nutritional__value">{value}</p>
        </div>
  )
}
