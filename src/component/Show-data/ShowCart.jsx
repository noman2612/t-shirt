import React from "react";
import './showcart.css'
const ShowCart = ({ cart,dataRemove }) => {
    let message;
    if(cart.length===0){
        message=<p>add to cart</p>
    }
    else{
        message =<p>bodo lok</p>
    }
  return (
    <div>
        {message}
        {cart.length===2? 'hello':'world'}
      <h5 className={`padding ${cart.length===2?'red':'yr'}`}>order summary: {cart.length}</h5>

      {cart.map((ca) => (
        <p>
          {ca.name}
          <button onClick={()=>dataRemove(ca._id)}>x</button>
        </p>
      ))}
      {cart.length ===1 && <p className="acv">heeee</p>}
      {cart.length ===3 || <h1 className="hello">ldhsdhdfhhsfh</h1>}
    </div>
  );
};

export default ShowCart;
