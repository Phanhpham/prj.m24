// import React, { useEffect, useState } from "react";
// import { FaEye } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa6";
// import "../css/login.css";
// import { useNavigate } from "react-router-dom";
// import { Admins } from "../../interface/admin";
// const LoginAdmin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const [input, setInput] = useState<Admins>({
//     email: "",
//     password: "",
//   });
//   let adminAccount = {
//     email: "phanh@gmail.com",
//     password: "123456",
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       adminAccount.email === input.email &&
//       adminAccount.password === input.password
//     ) {
//       alert("đăng nhập thành công");
//       setTimeout(() => {
//         navigate("/adminHome");
//       }, 400);
//     } else {
//       alert("Email hoặc mật khẩu không đúng");
//     }
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="login-main">
//       <div className="login-left">
//         <img
//           src="https://noithatdepgiare.vn/upload/sanpham/large/thiet-ke-noi-that-showroom-quan-ao-sang-trong-cao-cap-095-3635-0.jpg"
//           style={{ width: "800px", height: "600px" }}
//         />
//       </div>
//       <div className="login-right">
//         <div className="login-right-container">
//           <div className="login-logo">
//             <img src="https://static.ybox.vn/2021/12/6/1639833088609-httpswww.canva.comdesignDAEyyZUaL9oRXE44PMfR_WfJquvULhFzAedit%20(5).png" />
//           </div>
//           <div className="login-center">
//             <h2>Login admin !</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={input.email}
//               />
//               <div className="pass-input-div">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   onChange={handleChange}
//                   value={input.password}
//                 />
//                 {showPassword ? (
//                   <FaEyeSlash
//                     onClick={() => {
//                       setShowPassword(!showPassword);
//                     }}
//                   />
//                 ) : (
//                   <FaEye
//                     onClick={() => {
//                       setShowPassword(!showPassword);
//                     }}
//                   />
//                 )}
//               </div>

//               <div className="login-center-options">
//                 <div className="remember-div">
//                   <input type="checkbox" id="remember-checkbox" />
//                   <label htmlFor="remember-checkbox">
//                     Remember for 30 days
//                   </label>
//                 </div>
//                 <a href="#" className="forgot-pass-link">
//                   Forgot password?
//                 </a>
//               </div>
//               <div className="login-center-buttons">
//                 <button type="button">Log In</button>
//                 <button type="button">
//                   {/* <img src={GoogleSvg} alt="" /> */}
//                   Log In with Google
//                 </button>
//               </div>
//             </form>
//           </div>

//           <p className="login-bottom-p">
//             Don't have an account? <a href="#">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginAdmin;
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const LoginAdmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const adminAccount = {
    email: "phanh@gmail.com",
    password: "123456",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminAccount.email === input.email && adminAccount.password === input.password) {
      alert("Login successful");
      setTimeout(() => {
        navigate("/adminHome");
      }, 400);
    } else {
      alert("Email or password is incorrect");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/428/014/original/nem-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg"
          alt="background"
          style={{ width: "850px", height: "770px" }}
        />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img
              src="https://static.ybox.vn/2021/12/6/1639833088609-httpswww.canva.comdesignDAEyyZUaL9oRXE44PMfR_WfJquvULhFzAedit%20(5).png"
              alt="logo"
              style={{width:"200px"}}
            />
          </div>
          <div className="login-center">
            <h2>Login admin!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={input.email}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={input.password}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Remember </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
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

export default LoginAdmin;
