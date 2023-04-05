import React from 'react';
import PizzaType from './PizzaType';

function PizzaTypes() {
  return (
    <div className="container">
      <div className="row">
        <PizzaType title="Cheese Pizza" source="images/Type1.jpg" />
        <PizzaType title="Pepperoni Pizza" source="images/Type2.jpg" />
        <PizzaType title="Vegetarian Pizza" source="images/Type3.jpg" />
        <PizzaType title="Variety Pizza" source="images/Type4.jpg" />
      </div>
    </div>
  )
}

export default PizzaTypes;
