import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { emptyCart } from "../redux/shopping/shopping-actions";
import { selectCurrentUser } from "../redux/user/user-selector";

const Checkout = ({ cart, emptyCart }) => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  const data = useSelector(selectCurrentUser);
  let isLogged=false;
  if(data.length!==0){
    isLogged=true;
  }
  //for form
  const [firstname, setFirstname] = useState(isLogged?data.user.firstname:'');
  const [lastname, setLastname] = useState(isLogged?data.user.lastname:'');
  const [email, setEmail] = useState(isLogged?data.user.email:'');
  const [num, setNum] = useState(isLogged?data.user.mobile_num:'');
  const [address, setAddress] = useState(isLogged?data.user.address:'');
  //end for form



  //getting the info from logged in user
  // if (a) {
  //   const f=a.user.firstname;
  //   const l=a.user.lastname;
  //   const e=a.user.email;
  //   const n=a.user.mobile_num;
  //   const addr=a.user.address;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const total_price = totalPrice;
    const mobile_num = num;
    const quantity = totalItem;
    const order = {
      total_price,
      quantity,
      firstname,
      lastname,
      address,
      email,
      mobile_num,
      products: cart,
    };

    if(isLogged){
     order.user_id=data.user.id;
    }

    fetch("http://127.0.0.1:8000/api/after_checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(() => {
      emptyCart();
      alert("order placed");

      navigate("/");
    });

    console.log(order);
  };
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItem(items);
  }, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice]);
  return (
    <div className="row continer-fluid justify-content-end me-5">
      <div className="col-6">
        <table className="table">
          <thead>
            <td>Product</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total Price</td>
          </thead>
          <tbody>
            {/* start of loop */}
            {cart.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>Rs{item.price}</td>
                <td>Rs. {item.price * item.qty}</td>
              </tr>
            ))}

            <tr className="border-top border-dark bg-primary text-white">
              <td>Total:</td>
              <td></td>
              <td></td>
              <td>Rs. {totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <form onSubmit={handleSubmit}>
          <legend>Checkout Form {!isLogged&&<Link to="/login">already have an account?</Link>}</legend>
          <input
            type="text"
            className=" mt-3 form-control"
            placeholder="Enter firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            name="firstname"
          />
          <input
            type="text"
            className=" mt-3 form-control"
            placeholder="Enter lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            name="lastname"
          />
          <input
            type="email"
            className=" mt-3 form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="number"
            className=" mt-3 form-control"
            placeholder="Enter mobile"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            name="mobile_num"
          />
          <input
            type="text"
            className=" mt-3 form-control"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
          />
          <input type="submit" className=" mt-3 btn btn-md btn-dark" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
