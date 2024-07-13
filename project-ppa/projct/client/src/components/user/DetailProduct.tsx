import { useEffect, useState } from "react";
import "../css/home.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface ProductDetail {
  image?: string;
  nameProduct?: string;
  price?: string;
  quantity?: number;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

export default function DetailProduct() {
  const [productDetail, setProductDetail] = useState<ProductDetail>({});
  const [quantity, setQuantity] = useState(1);
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(
      (item: ProductDetail) => item.nameProduct === productDetail.nameProduct
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity! += quantity;
    } else {
      cart.push({ ...productDetail, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Thêm vào giỏ hàng thành công!");
  };

  return (
    <>
      <div>
        <header className='header-container'>
          <div className='left-container'>
            <img
              src='https://theme.hstatic.net/200000182297/1000887316/14/logo.png?v=1342'
              alt=''
            />
          </div>
          <nav className='center-container'>
            <ul className='navbar'>
              <li>
                <a href=''>Sản phẩm</a>
              </li>
              <li>
                <a href=''>Sản phẩm mới</a>
              </li>
              <li>
                <a href=''>Bộ sưu tập</a>
              </li>
              <li>
                <a href=''>Sản phẩm giá tốt</a>
              </li>
              <li>
                <a href=''>Sale</a>
              </li>
            </ul>
          </nav>
          <div className='right-container'>
            <div className='search'>
              <input type='text' placeholder='Tìm kiếm sản phẩm' />
              <button>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>
            <div className='account'>
              <i className='fa-solid fa-user'></i>
              <a href=''>Tài khoản</a>
            </div>
            <div className='cart'>
              <i className='fa-solid fa-cart-shopping'></i>
              <Link to={"/cartProduct"}>Giỏ hàng</Link>
            </div>
          </div>
          <div className='line'></div>
        </header>
      </div>
      <div style={{ width: "1300px", height: "2px", background: "grey" }}></div>
      <br></br>
      <p style={{ color: "grey", fontSize: "15px", paddingLeft: "20px" }}>
        TRANG CHỦ / TẤT CẢ SẢN PHẨM / ĐẦM CỔ BẺ D01272
      </p>
      <div style={{ width: "1300px", height: "2px", background: "grey" }}></div>
      <br></br>
      <br></br>
      <div style={{ display: "flex", gap: "200px" }}>
        <img
          src={productDetail.image}
          style={{ width: "610px", paddingLeft: "50px" }}
          alt={productDetail.nameProduct}
        ></img>
        <div style={{ marginTop: "30px" }}>
          <div>
            <b style={{ fontSize: "18px" }}>{productDetail.nameProduct}</b>
            <br></br>
            <br></br>
            <p>
              Thương hiệu: NEM <br></br>Mã SP: 038121412462110401
            </p>
            <b style={{ fontSize: "22px" }}>
              {formatPrice(parseFloat(productDetail.price || "0"))}
            </b>
            <br></br>
            <br></br>
            <p>Kích thước:</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  width: "60px",
                  height: "40px",
                }}
              >
                Size 4
              </button>
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  width: "60px",
                }}
              >
                Size 6
              </button>
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  width: "60px",
                }}
              >
                Size 8
              </button>
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  width: "60px",
                }}
              >
                Size 10
              </button>
              <button
                style={{
                  background: "white",
                  borderRadius: "5px",
                  width: "60px",
                }}
              >
                Size 12
              </button>
            </div>
            <br></br>
            <p>Màu sắc</p>
            <img
              src='https://m.media-amazon.com/images/I/31DhmKeNrWL._AC_UF1000,1000_QL80_.jpg'
              style={{ width: "30px", height: "30px" }}
              alt='color'
            ></img>
            <br></br>
            <br></br>

            <p>Số lượng</p>
            <input
              style={{ width: "60px" }}
              type='number'
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            ></input>
            <br></br>
            <br></br>
            <button
              style={{
                width: "360px",
                height: "40px",
                background: "black",
                color: "white",
              }}
              onClick={addToCart}
            >
              Thêm giỏ hàng
            </button>
            <br></br>
            <br></br>
            <button
              style={{
                width: "360px",
                height: "40px",
                background: "white",
                color: "black",
              }}
            >
              Mua ngay
            </button>
            <br></br>
            <br></br>
            <p>
              Chất liệu: vải thô<br></br>
              Kiểu dáng: đầm thiết kế dáng suông dài qua gối,<br></br> tone màu
              đen, cổ đính cườm<br></br>
              Sản phẩm thuộc dòng sản phẩm: NEW NEW<br></br>
              Thông tin người mẫu: mặc sản phẩm size 2
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
