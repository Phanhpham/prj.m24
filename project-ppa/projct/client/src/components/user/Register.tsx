import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "../../interface/user";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUser } from "../../services/admin.service";
// import "../css/register.css";

function validateEmail(email: any) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default function Register() {
  const userState = useSelector((state: any) => state.users.user);
  console.log(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const [inputValue, setInputValue] = useState<User>({
    id: Math.ceil(Math.random() * 10000),
    userName: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const [error, setError] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(1234);
    let valid = true;

    if (!inputValue.userName) {
      error.userName = "Ten khong duoc de trong";
      valid = false;
    } else {
      error.userName = "";
    }

    if (!inputValue.email) {
      error.email = "Email không được để trống";
      valid = false;
    } else if (!validateEmail(inputValue.email)) {
      error.email = "Email không đúng định dạng";
      valid = false;
    } else if (userState.some((item: any) => item.email === inputValue.email)) {
      error.email = "Email đã tồn tại";
      valid = false;
    } else {
      error.email = "";
    }

    if (!inputValue.password) {
      error.password = "Mat khau khong duoc de trong";
      valid = false;
    } else {
      error.password = "";
    }

    if (!inputValue.confirmPassword) {
      error.confirmPassword = "Xac nhan mat khau khong duoc de trong";
      valid = false;
    } else if (inputValue.password !== inputValue.confirmPassword) {
      error.confirmPassword = "Mat khau khong khop";
      valid = false;
    } else {
      error.confirmPassword = "";
    }

    setError({ ...error });

    // Kiem tra dang ky thanh cong
    if (valid) {
      const newUser = {
        userName: inputValue.userName,
        email: inputValue.email,
        password: inputValue.password,
        confirmPassword: inputValue.confirmPassword,
      };
      dispatch(addUser(newUser));
      navigate("/login");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="form" style={{ display: "flex" }}>
        <form className="register" onSubmit={handleSubmit}>
          <div className="form-container">
            <h1 style={{ color: "black", fontWeight: "bold" }}>ĐĂNG KÝ</h1>
            <p style={{ color: "black", fontWeight: "bold" }}>
              Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu
              đãi tốt hơn!
            </p>
            <br />
            <label htmlFor="name">Tên</label>
            <br></br>
            <input
              className="lastname"
              name="userName"
              value={inputValue.userName}
              type="text"
              placeholder="Lastname"
              onChange={handleChange}
              id=""
            />
            <br />
            {error.userName && (
              <span style={{ color: "red", fontSize: 12 }}>
                {error.userName}
              </span>
            )}
            <br />
            <label htmlFor="name">Email</label>
            <br></br>
            <input
              className="email"
              type="text"
              placeholder="Email"
              id=""
              name="email"
              value={inputValue.email}
              onChange={handleChange}
            />
            <br />
            {error.email && (
              <span style={{ color: "red", fontSize: 12 }}>{error.email}</span>
            )}
            <br></br>
            <label htmlFor="name">Password</label>
            <br></br>
            <input
              className="password"
              name="password"
              value={inputValue.password}
              type="text"
              placeholder="Password"
              id=""
              onChange={handleChange}
            />{" "}
            <br />
            {error.password && (
              <span style={{ color: "red", fontSize: 12 }}>
                {error.password}
              </span>
            )}
            <br />
            <label htmlFor="name">Confirm Password</label>
            <br></br>
            <input
              className="password"
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={inputValue.confirmPassword}
              id=""
              onChange={handleChange}
            />{" "}
            <br />
            {error.confirmPassword && (
              <span style={{ color: "red", fontSize: 12 }}>
                {error.confirmPassword}
              </span>
            )}
            <br />
            <button className="signup" type="submit">
              Đăng ký
            </button>{" "}
            <br /> <br />
            <span style={{ color: "black" }}>
              Bạn đã có tài khoản?{" "}
              <NavLink to={"/login"} style={{ color: "red" }}>
                Đăng nhập tại đây
              </NavLink>
            </span>
          </div>

          <div className="image"></div>
        </form>

        <img
          src="https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-clothing-logo-template-bowtie-executive-ceremony-vector-png-image_38498204.png"
          style={{
            width: "600px",
            height: "500px",
            marginRight: "100px",
            marginTop: "160px",
          }}
        ></img>
      </div>
    </div>
  );
}
