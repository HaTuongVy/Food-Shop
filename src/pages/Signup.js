import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopBanner from "../components/TopBanner";
import Footer from "../containers/Footer";
import Headers from "../containers/Header";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");

  const handleClickBtn = () => {
    let object = {
      username: username,
      fullname: fullname,
      password: password,
      repassword: repassword,
      email: email,
      phone: phone,
      street: street,
    };

    let signUpList = localStorage.getItem("signUpList");
    if (signUpList) {
      let arr = JSON.stringify(object);
      arr.push(object);
      localStorage.setItem("signUpList", JSON.stringify(arr));
    } else {
      localStorage.setItem("signUpList", JSON.stringify([object]));
    }
  };

  return (
    <>
      <Headers></Headers>
      <TopBanner content="ĐĂNG KÝ TÀI KHOẢN" />
      <Container>
        <Row className="justify-content-center signup-margin">
          <Col className="col-sm-12 col-xs-12 col-md-8">
            <div className="col-md-offset-3">
              <div className="title_style3  mt-5 pt-3">
                <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
              </div>
              <div className="box-cont">
                <Form>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalName"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Tên đăng nhập
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="signup-button-padding"
                        placeholder="Tên đăng nhập"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalFullname"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Họ và tên
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="signup-button-padding"
                        placeholder="Họ và tên"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPassword"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Mật khẩu
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-button-padding"
                        type="password"
                        placeholder="Mật khẩu"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalRepeatPassword"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Nhập lại mật khẩu
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                        className="signup-button-padding"
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Email
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-button-padding"
                        type="email"
                        placeholder="Email"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalPhone"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Số điện thoại
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="signup-button-padding"
                        placeholder="Số điện thoại"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalStreet"
                  >
                    <Form.Label column sm={3} className="signup-control-lable">
                      Địa chỉ
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="signup-button-padding"
                        placeholder="Địa chỉ"
                      />
                    </Col>
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      variant="warning"
                      type="submit"
                      className="signup-btn-submit me-2"
                      onClick={(e) => handleClickBtn()}
                    >
                      <i class="fa-regular fa-circle-check"></i>&nbsp; Đăng ký
                    </Button>
                    <Button
                      variant="warning"
                      type="submit"
                      className="signup-btn-submit ms-2"
                    >
                      <i class="fa-solid fa-xmark"></i>&nbsp; Hủy bỏ
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Signup;
