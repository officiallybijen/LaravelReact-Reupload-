import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentUser } from "../redux/user/user-actions";

const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  //for form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //end for form

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((a) => a.json())
      .then((data) => {
        dispatch(setCurrentUser(data));
        alert("user logged in");
        navigate("/");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container-fluid w-50">
        <legend>Login Form</legend>
        <input
          type="email"
          className=" mt-3 form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          className=" mt-3 form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <input type="submit" className=" mt-3 btn btn-md btn-dark" />
      </form>
    </div>
  );
};

export default LoginForm;
