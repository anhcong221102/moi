
const Footer=(props)=>{
    return(
  <div className="buttom-footer py-lg-4 py-md-3 py-sm-3 py-3">
  <div className="container pt-lg-4 pt-md-5 pt-sm-4 pt-4">
    <div className="">
      <div className="row footer-agile-grids ">
      <div className="col-lg-2 col-md-6 col-sm-6 wthree-left-right">
          <nav className="border-line">
            <ul className="nav flex-column">
              <li className="nav-item active">
                <a className="nav-link1" href="index.html">TRANG CHỦ </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link1 ">SẢN PHẨM</a>
              </li>
              <li className="nav-item">
                <a href="service.html" className="nav-link1">GIỚI THIỆU</a>
              </li>
              <li className="nav-item">
                <a href="icon.html" className="nav-link1 ">LIÊN HỆ</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 wthree-left-right">
          <nav className="border-line">
            <ul className="nav flex-column">
              <li className="nav-item active">
                <a className="nav-link1" href="index.html">HƯỚNG DẪN MUA HÀNG </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link1 ">CHÍNH SÁCH ĐỔI TRẢ</a>
              </li>
              <li className="nav-item">
                <a href="service.html" className="nav-link1">CÂU HỎI THƯỜNG GẬP</a>
              </li>
              
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 ">
             
            <div className="nav-link2">
            <h6>KẾT NỐI VỚI CHÚNG TÔI</h6>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 wthree-left-right">
          <div className="mb-lg-3 mb-md-4 mb-3">
            <h4>NHẬN THÔNG BÁO SẢN PHẨM</h4>
          </div>
          <form>
          <div className="subscribe-form">
          <div className=" email-info">
          <div className="form-group fill-all-form">
          <input type="email" className="form-control" placeholder="Email" required />
          </div>
        </div>
        <div className=" email-info">
          <button type="submit" className="btn click-me btn-block">GỬI</button>
        </div>
      </div>
    </form>
        </div>
        
      </div>
    </div>
    
  </div>

</div>



    )
}
export default Footer;