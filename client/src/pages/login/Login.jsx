import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", credentials); 
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginForm">
          <h1 className="loginHeading">Welcome Back</h1>
          <p className="loginDesc">Do not have a account yet? <Link to="/signin"><span>Signin</span></Link></p>
          
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="loginInput"
          />
          
          <button disabled={loading} onClick={handleClick} className="loginButton">
            {loading ? "Signing In..." : "Login"}
          </button>
          {error && <span className="errorMessage">{error.message}</span>}
          
        </div>
        <div className="loginImageContainer">
          <img src="/road.png" alt="Login Visual" className="loginImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
