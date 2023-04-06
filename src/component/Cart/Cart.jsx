import React from 'react';
import'./cart.css'
const Cart = ({tShirt,handelLoaderData}) => {
    const {name,picture,price,gender} = tShirt
    return (
        <div className='t-sirt-container'>
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <p>price: {price}</p>
        <p>gender : {gender}</p>
        <button onClick={()=>handelLoaderData(tShirt)}>buy now</button>
        </div>
    );
};

export default Cart;