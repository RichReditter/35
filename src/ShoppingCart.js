import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import "./ShoppingCart.css"
function ShoppingCart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <div>
        <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
        <p className="mb-5 text-center">
          <i className="text-info font-weight-bold">{data.length}</i> items in your cart
        </p>
        <table id="shoppingCart" className="table table-condensed table-responsive">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Product</th>
              <th style={{ width: "12%" }}>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th style={{ width: "8%" }}></th>
              <th style={{ width: "8%" }}>Total</th>
            </tr>
          </thead>
          <tbody>
              {data.map( (item,index) => 
                    !isLoaded ? 
                    <tr><td><div class="lds-grid">{index}<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></td></tr>
                  :
                  <Item info={item} key={index}/>
              )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ShoppingCart;
