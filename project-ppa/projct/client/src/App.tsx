import { Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Home from "./components/user/Home";
import AdminHome from "./components/admin/AdminHome";
import AdminProduct from "./components/admin/AdminProduct";
import DetailProduct from "./components/user/DetailProduct";
import LoginAdmin from "./components/admin/LoginAdmin";
import AdminUser from "./components/admin/AdminUser";
import CartProduct from "./components/user/CartProduct";
import PayBill from "./components/user/PayBill";
import FavoriteProduct from "./components/user/FavoriteProduct";

export default function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cartProduct' element={<CartProduct />} />
      <Route path='/payBill' element={<PayBill />} />
      <Route path='/favorite' element={<FavoriteProduct />} />
      <Route path='/detailProduct/:id' element={<DetailProduct />} />
      <Route path='/adminProduct' element={<AdminProduct />} />
      <Route path='/adminHome' element={<AdminHome />} />
      <Route path='/login-admin' element={<LoginAdmin></LoginAdmin>}></Route>
      <Route path='/adminUser' element={<AdminUser></AdminUser>}></Route>
      <Route
        path='/adminProduct'
        element={<AdminProduct></AdminProduct>}
      ></Route>
    </Routes>
  );
}
