import { Carousel, OverlayTrigger, Popover, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/product.service";
import { Product } from "../../interface/admin";
import { Link } from "react-router-dom";
import "../css/home.css";

const formatPrice = (price: number): string => {
  // Đảm bảo là số tiền không có phần thập phân
  const formattedPrice = price.toFixed(0);
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(parseFloat(formattedPrice));
};

export default function Home() {
  const productState = useSelector((state: any) => state.products.product);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());

    const favoritesFromStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(favoritesFromStorage.map((favorite: any) => favorite.id));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(
        favorites.map((id) => ({
          id,
          name:
            productState.find((product: Product) => product.id === id)
              ?.nameProduct || "",
          image:
            productState.find((product: Product) => product.id === id)?.image ||
            "",
        }))
      )
    );
  }, [favorites, productState]);

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      const updatedFavorites = favorites.filter((id) => id !== productId);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, productId];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <>
      <div>
        <header className="header-container">
          <div className="left-container">
            <img
              src="https://theme.hstatic.net/200000182297/1000887316/14/logo.png?v=1342"
              alt=""
            />
          </div>
          <nav className="center-container">
            <ul className="navbar">
              <li>
                <a href="">Sản phẩm</a>
              </li>
              <li>
                <a href="">Sản phẩm mới</a>
              </li>
              <li>
                <a href="">Bộ sưu tập</a>
              </li>
              <li>
                <a href="">Sản phẩm giá tốt</a>
              </li>
              <li>
                <a href="">Sale</a>
              </li>
            </ul>
          </nav>
          <div className="right-container">
            <div className="search">
              <input type="text" placeholder="Tìm kiếm sản phẩm" />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="account">
              <OverlayTrigger
                trigger="hover"
                placement="bottom"
                show={showFavorites}
                onToggle={(show) => setShowFavorites(show)}
                overlay={
                  <Popover id="popover-favorites" style={{ maxWidth: "800px" }}>
                    <Popover.Body>
                      <Table responsive>
                        <tbody>
                          <tr>
                            {favorites.map((productId) => (
                              <td key={productId} style={{ padding: "10px" }}>
                                <div style={{ textAlign: "center" }}>
                                  <img
                                    src={
                                      productState.find(
                                        (product: Product) =>
                                          product.id === productId
                                      )?.image || ""
                                    }
                                    alt={`photo`}
                                    style={{
                                      width: "100px",
                                      height: "auto",
                                      marginBottom: "10px",
                                    }}
                                  />
                                  <div>
                                    {productState.find(
                                      (product: Product) =>
                                        product.id === productId
                                    )?.nameProduct || ""}
                                  </div>
                                </div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </Table>
                    </Popover.Body>
                  </Popover>
                }
              >
                <div style={{ color: "black", cursor: "pointer" }}>
                  <i
                    className="fa-solid fa-heart"
                    style={{ paddingRight: "5px" }}
                  ></i>
                  Yêu thích
                </div>
              </OverlayTrigger>
            </div>
            <div className="account">
              <i className="fa-solid fa-user"></i>
              <Link to={"/register"} style={{ color: "black" }}>
                Tài khoản
              </Link>
            </div>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <Link to={"/cartProduct"} style={{ color: "black" }}>
                Giỏ hàng
              </Link>
            </div>
          </div>
        </header>
      </div>
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3.jpg?v=1369"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2.jpg?v=1369"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img1.jpg?v=1369"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <h1 style={{ textAlign: "center" }}>SẢN PHẨM NỔI BẬT</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {productState.map((product: Product) => (
          <div
            key={product.id}
            className="product-item"
            style={{ position: "relative" }}
          >
            <Link
              to={`/detailProduct/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                src={product.image}
                alt={product.nameProduct}
                style={{ width: "300px", paddingLeft: "50px" }}
              />
              <div className="product-info">
                <p style={{ color: "grey", marginLeft: "50px" }}>
                  {product.nameProduct}
                </p>
                <b style={{ marginLeft: "80px", color: "black" }}>
                  {formatPrice(parseFloat(product.price || "0"))}
                </b>
              </div>
            </Link>
            <div className="overlay" onClick={() => toggleFavorite(product.id)}>
              <i
                className={
                  favorites.includes(product.id)
                    ? "fa-solid fa-heart text-danger"
                    : "fa-solid fa-heart text-white"
                }
              ></i>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div>
        <img
          src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1.jpg?v=1369"
          style={{ width: "1300px", height: "500px" }}
        ></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <br></br>
        <b style={{ fontSize: "40px" }}>NEM'S BLOG</b>
        <br></br>
        <b>ĐÓN ĐẦU XU HƯỚNG, ĐỊNH HÌNH PHONG CÁCH</b>
        <br></br>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/342544079_185591394364106_3474506149512152400_n__1__7b5ebc8e82e84130a3effdf0c7599fa1_large.jpg"
            style={{ width: "400px", height: "240px", paddingLeft: "50px" }}
          ></img>
          <br></br>
          <b style={{ marginLeft: "160px" }}>MINIMAL CHIC</b>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/web_6fb6ad7b835f456aba636f2a29c0eaf8_large.jpg"
            style={{ width: "400px", height: "240px", paddingLeft: "10px" }}
          ></img>
          <br></br>
          <b style={{ marginLeft: "60px" }}>3 CÁCH DIỆN SƠ MI ĐẸP ĐÚNG CHUẨN</b>
        </div>
        <div>
          <img
            src="https://file.hstatic.net/200000182297/article/315854475_2623148267823058_3203710229884569157_n_3baa02b3ee4348339faec98be869be0d_large.jpg"
            style={{ width: "440px", height: "240px", paddingLeft: "10px" }}
          ></img>
          <b style={{ marginLeft: "20px" }}>
            KHÁM PHÁ 4 HỌA TIẾT THỒNG LĨNH MÙA XUÂN - HÈ
          </b>
        </div>
      </div>{" "}
      <br /> <br />
      <div className="flex text-center">
        <b style={{ fontSize: "30px", width: "800px" }}>ĐĂNG KÝ BẢN TIN</b>
        <p>
          Đăng ký nhận bản tin Nem để được cập nhật những mẫu thiết kế mới nhất
        </p>
        <input
          style={{ width: "550px", height: "50px" }}
          type="text"
          placeholder="Vui long nhap email..."
        ></input>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "200px",
            height: "50px",
          }}
        >
          ĐĂNG KÝ
        </button>
      </div>
      <br></br>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <img
          src="https://mewxu.net/wp-content/uploads/2017/03/fb_icon.png"
          style={{ width: "25px", borderRadius: "8px" }}
        ></img>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
          style={{ width: "25px", borderRadius: "8px" }}
        ></img>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s"
          style={{ width: "25px", borderRadius: "8px" }}
        ></img>
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          color: "white",
          gap: "40px",
        }}
      >
        <div>
          <b>NEM FASHION - THỜI TRANG CÔNG SỞ</b>
          <br></br>
          <br></br>
          <p>
            Công ty TNHH Dịch vụ và Thương mại An Thành.<br></br>
            Số ĐKKD 0107861393, Sở KHĐT Tp. Hà Nội cấp ngày 04/10/2017
          </p>
          <p>
            Địa chỉ: Lô 1+2, Ô quy hoạch E.2/NO7 đường Lâm Hạ<br></br> phường Bồ
            Đề, quận Long Biên, Hà Nội <br></br>Chăm sóc khách hàng:
            0246.2591551 Mua hàng online: 0246.2909098<br></br> Email:
            nemcskh@stripe-vn.com
          </p>
        </div>
        <div>
          <p style={{ display: "flex" }}>
            Giới thiệu <br></br>Triết lý kinh doanh tại NEM Fashion <br></br>
            NEM's Blog <br></br>Hệ thống showroom <br></br>Liên hệ
          </p>
        </div>
        <div>
          <p>
            Chính sách giao nhận - Vận chuyển <br></br>Hướng dẫn thanh toán{" "}
            <br></br>Tra cứu đơn hàng<br></br> Hướng dẫn chọn Size <br></br>Quy
            định đổi hàng<br></br> Quy định bảo hành và sửa chữa <br></br>Khách
            hàng thân thiết
          </p>
        </div>
        <div>
          <p>Phương thức thanh toán</p>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-netbanking-credit-debit-card-bank-transaction-32302.png"
            style={{ width: "80px" }}
          ></img>
          <br></br>
          <img
            src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png"
            style={{ width: "100px" }}
          ></img>
        </div>
      </div>
    </>
  );
}
