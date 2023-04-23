import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      );
      console.log(response.data);
      alert("Login Successful");
      setLoggedIn(true);
      onLogin();
    } catch (err) {
      console.error(err);
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="container border d-flex ">
      <form onSubmit={handleSubmit} className="p-3 container-fluid">
        <h3 className="mb-3">Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
