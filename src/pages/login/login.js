import React, { useState } from "react";
import logo from "./logo.png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:8080/token", user)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        
        // localStorage.setItem("role", response.data.role);
        // if (response.data.role === "admin") {
        //   navigate("/AdminAllCategories");
        // } else if (response.data.role === "customer") {
        //   navigate("/AllCategories");
        // }
<<<<<<< HEAD
        if (user.username=="admin1@gmail.com"){ 
          navigate("admin-newsfeed")
          ;}else{
            navigate("/newsfeed");}
        
=======
        if(user.username === "admin@gmail.com"){
          navigate("/admin-newsfeed")
        }else
          navigate("/newsfeed");
>>>>>>> b8609926673b23c36373f00fde5a9659e7ba9d63
      })
      .catch((error) => {
        alert("Incorrect Email Id or password ");
      });
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h5 className="title">AXIS SARAL </h5>
      </div>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
            className="input"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
