import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Header = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div class="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="hedder-up">
            <h1><a className="navbar-brand" href="index.html">Jeweler</a></h1>
          </div>

          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Sản phẩm</a>
              </li>
              <li className="nav-item">
                <a href="service.html" className="nav-link">Thương hiệu</a>
              </li>
              <li className="nav-item ">
                <a href="gallery.html" className="nav-link">Giới thiệu</a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">Liên hệ</a>
              </li>



            </ul>
            <ul className="navbar-nav ">
              <div className="sing-up-jel ">
                <a href="gallery.html" className="nav-link4">đăng nhập</a>

                /

                <a href="contact.html" className="nav-link4">đăng ký</a>
                <i class="fa-solid fa-user user"></i>
              </div>
              <div className="sing-up-jel ">
                <a href="contact.html" className="nav-link4">Giỏ hàng</a>
                <i className="fa-solid fa-bag-shopping user" />

              </div>
              <div className="sing-up-jel ">
                <i className="fa-solid fa-magnifying-glass search" onClick={() => setShow(true)} />

              </div>
            </ul>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Tìm kiếm sản phẩm"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success"     ><i className="fa-solid fa-magnifying-glass" /></Button>
              </Form>
            </Modal>


          </div>
        </nav>
      </div>

    </>
  )
}
export default Header;