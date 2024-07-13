import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../scss/adminHome.scss";

export default function AdminHome() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    const logout = confirm("chắc chắn muốn đăng xuất?");
    if (logout) {
      navigate("/login-admin");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar-admin">
        <div className="logo">
          <h2>ADMIN</h2> <br />
          <ul className="menu">
            <li className="active">
              <NavLink to={"/adminHome"}>
                <i className="fas fa-tachometer-alt"></i>
                <span>Trang chủ</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/adminUser"}>
                <i className="fas fa-user"></i>
                <span>Quản lí tài khoản</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/adminProduct"}>
                <i className="fa-solid fa-book"></i>
                <span>Quản lí san phẩm</span>
              </NavLink>
            </li>
            <li>
              <a href="">
                <i className="fas fa-cog"></i>
                <span>Cài đặt</span>
              </a>
            </li>
            <li className="logout">
              <a onClick={handleLogOut} href="/login-admin">
                <i className="fas fa-sign-out-alt"></i>
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content-admin">
        <div className="header-wrapper">
          <div className="header-title">
            <div className="title">
              <span>Shop bán quần áo</span>
              <h2>Trang chủ</h2>
            </div>
          </div>
          <div className="user-info">
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Tìm kiếm ở đây" />
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1mHHzOnO1BG__4Ai6GlaZpfRztsrQM1fols7meZqlY6arSu0mvtlHSArvUHZRquwnA0&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="card-container">
          <h3 className="main-title">Dữ liệu hôm nay</h3>
          <div className="card-wrapper">
            <div className="payment-card light-red">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Payment amount </span>
                  <span className="amount-value">500.000</span>
                </div>
                <i className="fas fa-dollar-sign icon"></i>
              </div>
              <span className="card-detail">**** **** **** 3484</span>
            </div>
            <div className="payment-card light-purple">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Payment amount </span>
                  <span className="amount-value">500.000</span>
                </div>
                <i className="fas fa-dollar-sign icon dark-purple"></i>
              </div>
              <span className="card-detail">**** **** **** 3484</span>
            </div>

            <div className="payment-card light-green">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Payment amount </span>
                  <span className="amount-value">500.000</span>
                </div>
                <i className="fas fa-dollar-sign icon dark-green"></i>
              </div>
              <span className="card-detail">**** **** **** 3484</span>
            </div>

            <div className="payment-card light-blue">
              <div className="card-header">
                <div className="amount">
                  <span className="title">Payment amount </span>
                  <span className="amount-value">500.000</span>
                </div>
                <i className="fas fa-dollar-sign icon dark-blue"></i>
              </div>
              <span className="card-detail">**** **** **** 3484</span>
            </div>
          </div>
        </div>

        <div className="table-wrapper">
          <h3 className="main-title">Bảng thống kê</h3> <br />
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên tài khoản</th>
                  <th>Mật khẩu</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>phanh2005</td>
                  <td>phanh123</td>
                  <td>24/07/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>ha2005</td>
                  <td>ha123</td>
                  <td>21/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>hai2005</td>
                  <td>hai123</td>
                  <td>30/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>phuonga2005</td>
                  <td>phuonga123</td>
                  <td>24/08/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>trang2005</td>
                  <td>trang123</td>
                  <td>11/09/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>khanh2005</td>
                  <td>khanh123</td>
                  <td>29/10/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>tuan2005</td>
                  <td>tuan123</td>
                  <td>28/05/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>tung2005</td>
                  <td>tung123</td>
                  <td>24/12/2023</td>
                  <td>Đang hoạt động</td>
                  <td>
                    <button className="btn btn-primary">Chặn</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
