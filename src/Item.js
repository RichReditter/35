import React, { useState } from "react";

function Item(props) {
  const [count, setCount] = useState(1);
  return (
    <React.Fragment>
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img
                src={props.info.image}
                alt=""
                className="img-fluid d-none d-md-block rounded mb-2 shadow "
              />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h4>{props.info.name}</h4>
              <p className="font-weight-light">Brand &amp; Name</p>
            </div>
          </div>
        </td>
        <td data-th="Price">{props.info.price}$</td>
        <td data-th="Quantity">
          <input
            type="number"
            className="form-control form-control-lg text-center"
            value={count}
            onChange={(event) => setCount(event.target.value) }
          />
        </td>
        <td className="actions" data-th="">
          <div className="text-right">
            <button className="btn btn-white border-secondary bg-white btn-md mb-2">
              <i className="fas fa-sync">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                >
                  <path d="M 20 4 C 14.507813 4 10 8.507813 10 14 L 10 31.75 L 7.125 28.875 L 4.3125 31.71875 L 12 39.40625 L 19.6875 31.71875 L 16.875 28.90625 L 14 31.75 L 14 14 C 14 10.691406 16.691406 8 20 8 L 31 8 L 31 4 Z M 38 10.59375 L 30.28125 18.3125 L 33.125 21.125 L 36 18.25 L 36 36 C 36 39.308594 33.308594 42 30 42 L 19 42 L 19 46 L 30 46 C 35.492188 46 40 41.492188 40 36 L 40 18.25 L 42.875 21.125 L 45.6875 18.28125 Z" />
                </svg>
              </i>
            </button>
            <button className="btn btn-white border-secondary bg-white btn-md mb-2">
              <i className="fas fa-trash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z" />
                </svg>
              </i>
            </button>
          </div>
        </td>
        <td>
          <p>{count > 0 ? props.info.price * count: props.info.price * 0}$</p>
        </td>
      </tr>
    </React.Fragment>
  );
}
export default Item;
