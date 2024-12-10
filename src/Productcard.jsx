import React, { useState } from 'react';

function Productcard(props) {
  const [addedcard, SetAddCard] = useState(0);

  const increaseAdded = () => {
    SetAddCard(addedcard + 1);
  }

  const addtocard = () => {
    console.log(`${props.title} added to card`);
  };

  return (
    <div className='card1'>
      <img className='product-img' src={props.url} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
      
      <button  onClick ={ () => {
        addtocard();
        increaseAdded();
      }
  
      }> Add to card {addedcard} </button>
    </div>
  );
}

export default Productcard;
