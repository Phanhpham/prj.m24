import React, { useEffect } from "react";
import Menu from "../Menu";
import "../scss/adminHome.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { User } from "../../interface/user";
import { AddUser, Users } from "../../interface/admin";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getAllUser, searchUser } from "../../services/admin.service";
import { format } from "date-fns";

function AdminUser() {
  const userState = useSelector((state: any) => state.users.user);
  console.log(userState);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<AddUser>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [shows, setShows] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloses = () => setShows(false);
  const handleShows = (id: number) => {
    const showInfo = userState.find((user: Users) => user.id === id);
    if (showInfo) {
      setSelectedUser(showInfo);
      setShows(true);
    }
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    const logout = confirm("chắc chắn muốn đăng xuất?");
    if (logout) {
      navigate("");
    }
  };
  const handleAdd = async () => {
    let valid = true;
    if (!inputValue.userName) {
      error.userName = "Tên tài khoản không duoc de trong";
      valid = false;
    } else {
      error.userName = "";
    }

    if (!inputValue.email) {
      error.email = "Email không duoc de trong";
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
      error.confirmPassword = "Xác nhận mat khau khong duoc de trong";
      valid = false;
    } else {
      error.confirmPassword = "";
    }

    setError({ ...error });

    if (valid) {
      // Khởi tạo mới 1 đối tượng
      const newUser = {
        userName: inputValue.userName,
        email: inputValue.email,
        password: inputValue.password,
        confirmPassword: inputValue.confirmPassword,
        created_at: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
        status: 0,
      };
      await dispatch(addUser(newUser));
      setShow(false);
      setInputValue({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    await dispatch(searchUser(e.target.value));
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
              <a onClick={handleLogOut} href="">
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
              <h2>Quản lí tài khoản</h2>
            </div>
            <Button variant="primary" onClick={handleShow}>
              + Thêm tài khoản
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thêm tài khoản</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập tên"
                      name="userName"
                      value={inputValue.userName}
                      onChange={handleChange}
                    />
                    {error.userName && (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {error.userName}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập email"
                      name="email"
                      value={inputValue.email}
                      onChange={handleChange}
                    />
                    {error.email && (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {error.email}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nhập mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu"
                      name="password"
                      value={inputValue.password}
                      onChange={handleChange}
                    />
                    {error.password && (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {error.password}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Xác nhận mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập xác nhận mật khẩu"
                      name="confirmPassword"
                      value={inputValue.confirmPassword}
                      onChange={handleChange}
                    />
                    {error.confirmPassword && (
                      <span style={{ color: "red", fontSize: 12 }}>
                        {error.confirmPassword}
                      </span>
                    )}
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="user-info">
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input
                type="text"
                placeholder="Tìm kiếm ở đây"
                onChange={handleSearch}
              />
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1mHHzOnO1BG__4Ai6GlaZpfRztsrQM1fols7meZqlY6arSu0mvtlHSArvUHZRquwnA0&usqp=CAU"
              alt=""
            />
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
                  <th>Email</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {userState.map((user: Users, index: number) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at}</td>
                    <td>Đang hoạt động</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleShows(user.id)}
                      >
                        Xem
                      </Button>
                      <button className="btn btn-danger">Chặn</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal show={shows} onHide={handleCloses}>
              <Modal.Header closeButton>
                <Modal.Title>Thông tin chi tiết</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedUser && (
                  <div style={{ display: "flex", gap: 50 }}>
                    <div>
                      <p>Tên tài khoản: {selectedUser?.userName}</p>
                      <p>Email: {selectedUser.email}</p>
                      <p>
                        Trạng thái:{" "}
                        {selectedUser.status === 0 ? "Hoạt động" : "Bị chặn"}
                      </p>
                      <p>Ngày đăng ký: {selectedUser.created_at}</p>
                    </div>
                    <div>
                      <img
                        src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                        alt=""
                        style={{ width: 200, height: 200 }}
                      />
                    </div>
                  </div>
                )}
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloses}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUser;
