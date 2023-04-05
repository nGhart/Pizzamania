import React from 'react';

function PizzaType(props) {
  return (
    <div className="col-xs-3">
      <div className="thumbnail">
        <img src={props.source} alt="Variety pizza" width="100%"/>
        <div className="caption">
          <h3>{props.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec libero imperdiet, tempus mi a, volutpat elit. Duis tristique pretium neque ut pharetra. Vestibulum turpis sem, ornare laoreet molestie ac, accumsan in tellus.</p>
        </div>
      </div>
    </div>
  )
}

export default PizzaType;