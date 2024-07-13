import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

export default function CartProduct() {
  const [cart, setCart] = useState<ProductDetail[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems: ProductDetail[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCart(cartItems);
    updateTotalPrice(cartItems);
  }, []);

  const updateTotalPrice = (cartItems: ProductDetail[]) => {
    const total = cartItems.reduce((sum, item) => {
      return sum + parseFloat(item.price || "0") * (item.quantity || 1);
    }, 0);
    setTotalPrice(total);
  };

  const handleDeleteProduct = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setTotalPrice(0);
  };

  const handleIncreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity) {
      updatedCart[index].quantity! += 1;
    } else {
      updatedCart[index].quantity = 1;
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity && updatedCart[index].quantity! > 1) {
      updatedCart[index].quantity! -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateTotalPrice(updatedCart);
    } else {
      handleDeleteProduct(index);
    }
  };

  return (
    <div className='container mt-4'>
      <h1 className='mb-4'>Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Hình ảnh</th>
                <th scope='col'>Tên sản phẩm</th>
                <th scope='col'>Giá</th>
                <th scope='col'>Số lượng</th>
                <th scope='col'>Tổng</th>
                <th scope='col'>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>
                    <img
                      src={product.image}
                      alt={product.nameProduct}
                      className='img-fluid'
                      style={{ maxWidth: "100px", height: "auto" }}
                    />
                  </td>
                  <td>{product.nameProduct}</td>
                  <td> {formatPrice(parseFloat(product.price || "0"))}</td>
                  <td>
                    <div className='quantity-control'>
                      <button
                        onClick={() => handleDecreaseQuantity(index)}
                        className='btn btn-secondary btn-sm'
                      >
                        -
                      </button>
                      <span className='mx-2'>{product.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(index)}
                        className='btn btn-secondary btn-sm'
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    {formatPrice(
                      parseFloat(product.price || "0") * (product.quantity || 1)
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(index)}
                      className='btn btn-dark'
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Tổng tiền: {formatPrice(totalPrice)}</h3>
            <div
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={handleClearCart}
                style={{
                  padding: "0.7rem",
                  borderRadius: "2rem",
                  width: "8rem",
                }}
                className='btn btn-dark'
              >
                Xóa tất cả
              </button>
              <Link to={"/payBill"}>
                <button
                  type='button'
                  style={{
                    padding: "0.7rem",
                    borderRadius: "2rem",
                    width: "8rem",
                  }}
                  className='btn btn-dark'
                >
                  Thanh toán
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
