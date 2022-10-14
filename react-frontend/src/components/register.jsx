import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const navigate=useNavigate();
  //for form
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [num, setNum] = useState();
  const [address, setAddress] = useState();

  //end for form

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobile_num = num;
    const user = {
      firstname,
      lastname,
      password,
      address,
      email,
      mobile_num,
    };

    fetch("http://127.0.0.1:8000/api/create_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      alert("user created");
      navigate("/");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container-fluid w-50">
        <legend>Register Form</legend>
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
          type="password"
          className=" mt-3 form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
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
  );
};

export default RegisterForm;
