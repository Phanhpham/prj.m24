import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../css/adminlogin.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left"><img src="https://static.vecteezy.com/system/resources/previews/027/428/014/original/nem-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" style={{width:"750px",height:"700px"}} /></div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo"><img src="https://static.ybox.vn/2021/12/6/1639833088609-httpswww.canva.comdesignDAEyyZUaL9oRXE44PMfR_WfJquvULhFzAedit%20(5).png" style={{width:"200px"}} /></div>
          <div className="login-center">
            <h2>Welcome to NEM !</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" onChange={handleChange}/>
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
            
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

