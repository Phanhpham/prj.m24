export default function PayBill() {
  return (
    <div className='card'>
      <div className='card-body mx-4'>
        <div className='container'>
          <p className='my-5 mx-5' style={{ fontSize: 30 }}>
            Cảm ơn bạn đã mua hàng !!!
          </p>
          <div className='row'>
            <ul className='list-unstyled'>
              <li className='text-black'>Quốc Hai</li>
              <li className='text-muted mt-1'>
                <span className='text-black'>Mã đơn hàng</span> #12345
              </li>
              <li className='text-black mt-1'>14/07/2024</li>
            </ul>
            <hr />
            <div className='col-xl-10'>
              <p>Áo Croptop</p>
            </div>
            <div className='col-xl-2'>
              <p className='float-end'>200.000 ₫</p>
            </div>
            <hr />
          </div>
          <div className='row'>
            <div className='col-xl-10'>
              <p>Áo Da Beo</p>
            </div>
            <div className='col-xl-2'>
              <p className='float-end'>1.200.000 ₫</p>
            </div>
            <hr />
          </div>

          <div className='row text-black'>
            <div className='col-xl-12'>
              <p className='float-end fw-bold'>Total: 1.400.000 ₫</p>
            </div>
            <hr style={{ border: "2px solid black" }} />
          </div>
          <div className='text-center' style={{ marginTop: 90 }}>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "initial",
              }}
            >
              &#128584; Phương Anh Phạm &#128585;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
