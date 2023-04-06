import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./tshirt.css";
import Cart from "../Cart/Cart";
import ShowCart from "../Show-data/ShowCart";
import {  toast } from 'react-toastify';
const Home = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState([]);
  const handelLoaderData = (tShirt) => {
    const exist = cart.find(ts =>ts._id ===tShirt._id)
    if(exist){
         toast("Wow so easy!");
    }
   else{
    const newCart = [...cart, tShirt];
    setCart(newCart);
   }
  };
  const dataRemove = (id) => {
    const data = cart.filter( ts => ts._id !==id)
    console.log(id)
    setCart(data)
  };
  return (
    <div className="t-shirt-container">
      <div className="cart-container">
        {data.map((tShirt) => (
          <Cart
            key={tShirt._id}
            handelLoaderData={handelLoaderData}
            tShirt={tShirt}
          ></Cart>
        ))}
      </div>
      <div className="show-data">
        <ShowCart cart={cart}
         dataRemove={dataRemove}></ShowCart>
      </div>
    </div>
  );
};

export default Home;
