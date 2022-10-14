import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/shopping/shopping-actions";

const Cart = ({ cart, removeFromCart }) => {
    console.log(cart);
    const [totalPrice, setTotalPrice]=useState(0);
    const [totalItem, setTotalItem]=useState(0);
    useEffect(()=>{
        let items=0;
        let price=0;

        cart.forEach(item => {
            items+=item.qty;
            price+=item.qty*item.price;
        });
        setTotalPrice(price);
        setTotalItem(items);
    },[cart,totalItem,totalPrice,setTotalItem,setTotalPrice])
  return (
    <div class="row continer-fluid justify-content-end me-5">
      <div class="col-6">
        <img
          style={{ maxWidth: "100%" }}
          src="https://img.freepik.com/premium-vector/moving-house-service-flat-vector-illustration-post-office-workers-loading-cardboard-boxes-into-truck-deliverymen-planning-parcels-shipment-isolated-cartoon-character-white-background_106317-11533.jpg?w=2000"
          alt="loading into truck"
        />
      </div>
      <div class="col-6">
        <table class="table">
          <thead>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total Price</td>
          </thead>
          {/* start of loop */}
          {cart.map((item) => (
            <tr>
              <td>
                {item.name}
                <a
                    onClick={()=>{removeFromCart(item.id)}}
                  class="text-decoration-none text-danger"
                >
                  X
                </a>
              </td>
              <td>{item.qty}</td>
              <td>Rs{item.price}</td>
              <td>Rs. {item.price*item.qty}</td>
            </tr>
          ))}
          
          <tr>
            <td>Total Quantity:</td>
            <td>{totalItem}</td>
            <td></td>
            <td>Rs. {totalPrice}</td>
          </tr>
        </table>
        <div class="row justify-content-end">
          <Link to="/checkout" class="btn btn-md btn-dark w-50 mt-4">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromCart: (id)=>dispatch(removeFromCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
