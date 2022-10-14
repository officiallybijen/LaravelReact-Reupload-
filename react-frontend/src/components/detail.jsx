import { useParams } from "react-router";
import useFetch from "../useFetch";

import { connect } from "react-redux";
import { addToCart, adjustQty } from "../redux/shopping/shopping-actions";
import { useState } from "react";

const Detail = ({ cart, addToCart }) => {
  const { id } = useParams();
  const a=cart.filter((m)=>m.id==id);
  
    const { data: product } = useFetch("http://127.0.0.1:8000/api/product/" + id);

  const qty=a.length!=0?a[0].qty:0;
    const [input, setInput] = useState(qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(id, e.target.value);
  };

  return (
    product && (
      <div className="row container-fluid justify-content-center align-items-center mt-5">
        <div className="col-4">
          <p
            style={{
              fontSize: "35px",
              width: "20ch",
              textAlign: "center",
              margin: "0 auto",
              fontFamily: "Varela Round",
              textTransform: "uppercase",
              color: "#110d0dc9",
            }}
          >
            {product.name}
          </p>
          <div
            style={{
              height: "2px",
              backgroundColor: "black",
              width: "40px",
              margin: "8px auto",
            }}
          ></div>

          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: "0 auto",
              fontFamily: "Varela Round",
              textTransform: "uppercase",
              color: "#110d0dc9",
            }}
          >
            RS {product.price}
          </p>
          <p
            className="mt-5"
            style={{
              fontSize: "20px",
              margin: "0 auto",
              fontFamily: "Varela Round",
              color: "#110d0dc9",
            }}
          >
            {product.description}
          </p>

          {/* <input
            type="number"
            className="quantity"
            min="1"
            style={{ width: "45px" }}
            value={input}
            onChange={onChangeHandler}
          /> */}
          <button
            onClick={() => addToCart(product.id)}
            className="btn btn-md btn-dark w-75 ms-5"
          >
            Add to Cart
          </button>
        </div>
        <img
          className="col-6"
          src={product.image}
          style={{ width: "650px", height: "400px", objectFit: "cover" }}
        />
      </div>
    )
  );
};

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
