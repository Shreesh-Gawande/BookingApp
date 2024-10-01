import React, { useState } from 'react';
import "./signin.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: ""
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.email || !credentials.password || !credentials.phone || !credentials.city || !credentials.country) {
      alert("Please fill in all fields");
      return;
    }

    try {
       await axios.post("http://localhost:8800/api/auth/register", credentials);
      navigate("/");
      console.res("Regitration complete")
      alert("Registration complete");
    } catch (err) {
      console.log(err);
      console.error("Registration error:", err.response ? err.response.data : err.message);
      alert("Registration failed, please try again.");
    }
  };

  return (
    <div className="signIn">
      <div className="signInContainer">
        
        <div className="signInForm">
        <form onSubmit={handleClick}>
          <h1 className="signInHeading">Create an Account</h1>
          <p className="signInDesc">Alredy Registered ? <Link to="/login"><span>Login</span></Link> </p>
          
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
            className="signInInput"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={credentials.email}
            className="signInInput"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            className="signInInput"
            placeholder="Password"
          />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={credentials.phone}
            className="signInInput"
            placeholder="Phone"
          />
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={credentials.city}
            className="signInInput"
            placeholder="City"
          />
          <input
            type="text"
            name="country"
            onChange={handleChange}
            value={credentials.country}
            className="signInInput"
            placeholder="Country"
          />
          
          <button type="submit" className="signInButton">Register</button>
          </form>
        </div>
        
        
        {/* Image Container */}
        <div className="signInImageContainer">
          <img src="/road.png" alt="Signin Visual" className="signInImage" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
