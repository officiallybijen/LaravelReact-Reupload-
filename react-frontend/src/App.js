import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./components/detail";
import AllCard from "./components/allCard";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import RegisterForm from "./components/register";
import LoginForm from "./components/login";
import { selectCurrentUser } from "./redux/user/user-selector";
import { useSelector } from "react-redux";
function App() {
  // const [pro, setPro] = useState(0);
  // fetch("http://127.0.0.1:8000/api/product")
  //   .then((response) => response.json())
  //   .then((data) => setPro(data));

  // console.log("start to fetch");
  // fetch('http://127.0.0.1:8000/api/list')
  // .then(data=>data.json())
  // .then((json)=>{
  //   json.map((j)=>console.log(j.name))
  // });
  // console.log("end of fetch");
 const a=useSelector(selectCurrentUser);
 console.warn(a);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllCard />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
