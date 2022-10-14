import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../redux/user/user-selector";
import { removeUser } from "../redux/user/user-actions";

const Navbar = ({ cart }) => {
  let isLogged;
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  const a=useSelector(selectCurrentUser);
  if(a){
    if(a.length==0){
      isLogged=false;
    }else{
      isLogged=true;
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link
              to="/cart"
              type="button"
              class="btn btn-dark position-relative"
            >
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            </Link>
            {!isLogged&&<Link className="nav-link" aria-current="page" to="/register">
              Register
            </Link>}            
            {!isLogged&&<Link className="nav-link" aria-current="page" to="/login">
              Login
            </Link>}
            {isLogged&&<Link className="nav-link" aria-current="page" onClick={()=>dispatch(removeUser)}>
              Logout
            </Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
