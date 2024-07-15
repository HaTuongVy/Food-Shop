import { Col, Container, Row } from "react-bootstrap";
import TopBanner from "../components/TopBanner";
import FooterAdd from "../components/FooterAdd";
import { Link } from "react-router-dom";
import "./New.css";

const New = () => {
  return (
    <>
      <TopBanner content="TIN TỨC" />
      <Container>
        <Row className="justify-content-center mb-5 pb-5">
          <Col className="col-sm-12 col-xs-12 col-md-12 mt-5">
            <Row>
              <Col className="col-xs-2 col-md-3">
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th>DANH MỤC TIN TỨC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link
                          className="new-hover text-decoration-none text-dark"
                          as={Link}
                          to="/new"
                        >
                          Kinh nghiệm chọn thực phẩm
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link
                          className="new-hover text-decoration-none text-dark"
                          as={Link}
                          to="/new"
                        >
                          Tin khuyến mãi
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="border p-2 ">
                  <table class="table table-borderless ">
                    <thead>
                      <tr>
                        <th>
                          <h4 className="border-bottom border-3 border-success text-center">
                            TIN TỨC MỚI
                          </h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link
                            className="new-hover text-decoration-none text-dark"
                            as={Link}
                            to="/newdetail"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/banner-ngay-gia-dinh-viet-nam.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              CHÚC MỪNG NGÀY HỘI GIA ĐÌNH VIỆT NAM 28/6/2022
                            </h6>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link
                            className="new-hover text-decoration-none text-dark"
                            as={Link}
                            to="/newdetail"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/bai-di-cho-thoi-lo-thuc-pham-ban.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>NẤU ĂN NGON HƠN NHỜ THỰC PHẨM SẠCH</h6>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link
                            className="new-hover text-decoration-none text-dark"
                            as={Link}
                            to="/newdetail"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/su-kien-black-friday-2017-3.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              CHƯƠNG TRÌNH KHUYẾN MÃI SIÊU HẤP DẪN - SUPER CHEAP
                            </h6>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link
                            className="new-hover text-decoration-none text-dark"
                            as={Link}
                            to="/newdetail"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "../img/ve-sinh-an-toan-thuc-pham-benhviendetmay-4.jpg"
                              }
                              className="rounded mb-3"
                              style={{ maxWidth: "100%" }}
                              alt="bannar"
                            ></img>
                            <h6>
                              6 THỰC PHẨM BỔ NÃO, TĂNG CƯỜNG TRÍ NHỚ BẠN NÊN
                            </h6>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col className="col-xs-12 col-md-9">
                <Row>
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link href="#" as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/home_custom_bigsale_01.png"
                          }
                          style={{ maxWidth: "100%", height: "320px" }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/home_custom_bigsale_01.png"
                            }
                            className="image"
                            style={{ maxWidth: "100%", height: "320px" }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5 className="mb-4 pb-3">
                        <Link
                          href="#"
                          className="new-hover text-decoration-none text-dark"
                          as={Link}
                          to="/newdetail"
                        >
                          MẸO CHỌN THỰC PHẨM AN TOÀN
                        </Link>
                      </h5>
                      <p>
                        Vấn nạn mất vệ sinh an toàn thực phẩm đang lan dần đến
                        bữa cơm của mọi gia đình. Sau đây là những kinh nghiệm
                        thực tế về...
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/bai-di-cho-thoi-lo-thuc-pham-ban.jpg"
                          }
                          style={{ maxWidth: "100%", height: "320px" }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/bai-di-cho-thoi-lo-thuc-pham-ban.jpg"
                            }
                            className="image"
                            style={{ maxWidth: "100%", height: "320px" }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5>
                        <Link
                          className="new-hover text-decoration-none text-dark"
                          as={Link}
                          to="/newdetail"
                        >
                          6 THỰC PHẨM BỔ NÃO, TĂNG CƯỜNG TRÍ NHỚ BẠN NÊN ĂN...
                        </Link>
                      </h5>
                      <p>
                        Chúng ta đều biết rằng uống cà phê thường giúp chúng ta
                        tỉnh táo lâu hơn và linh hoạt hơn. Để tăng sự tập...
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/ve-sinh-an-toan-thuc-pham-benhviendetmay-4.jpg"
                          }
                          style={{
                            maxWidth: "100%",
                            width: "500px",
                            height: "320px",
                          }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/ve-sinh-an-toan-thuc-pham-benhviendetmay-4.jpg"
                            }
                            className="image"
                            style={{
                              maxWidth: "100%",
                              width: "500px",
                              height: "320px",
                            }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5 className="mb-4 pb-3">
                        <Link
                          as={Link}
                          to="/newdetail"
                          className="new-hover text-decoration-none text-dark"
                        >
                          NẤU ĂN NGON HƠN NHỜ THỰC PHẨM SẠCH
                        </Link>
                      </h5>
                      <p>
                        Ăn uống là chuyện muôn thuở của con người. Ngày xưa chỉ
                        cần ăn no, bây giờ chúng ta cần ăn ngon. Rồi vấn nạn
                        thực phẩm...
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/su-kien-black-friday-2017-3.jpg"
                          }
                          style={{
                            maxWidth: "100%",
                            width: "500px",
                            height: "320px",
                          }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/su-kien-black-friday-2017-3.jpg"
                            }
                            className="image"
                            style={{
                              maxWidth: "100%",
                              width: "500px",
                              height: "320px",
                            }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5>
                        <Link
                          as={Link}
                          to="/newdetail"
                          className="new-hover text-decoration-none text-dark"
                        >
                          CHƯƠNG TRÌNH KHUYẾN MÃI SIÊU HẤP DẪN - SUPER CHEAP
                          FRIDAY...
                        </Link>
                      </h5>
                      <p>
                        Một bất ngờ quá lớn và thú vị, một chương trình khuyến
                        mãi cực kì hấp dẫn và siêu khủng lần đầu...
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/cach-ket-hop-cac-thuc-pham2.jpg"
                          }
                          style={{
                            maxWidth: "100%",
                            width: "500px",
                            height: "320px",
                          }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/cach-ket-hop-cac-thuc-pham2.jpg"
                            }
                            className="image"
                            style={{
                              maxWidth: "100%",
                              width: "500px",
                              height: "320px",
                            }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5>
                        <Link
                          as={Link}
                          to="/newdetail"
                          className="new-hover text-decoration-none text-dark"
                        >
                          LỰA CHỌN THỰC PHẨM SẠCH VÀ NẤU ĂN ĐÚNG CÁCH
                        </Link>
                      </h5>
                      <p>
                        Ăn uống là nhu cầu thiết yếu của con người để duy trì sự
                        sống và phát triển. Xã hội ngày càng tiến bộ, nhận...
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="container-new-img mb-4">
                      <Link as={Link} to="/newdetail">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "../img/home_custom_blog_01.jpg"
                          }
                          style={{
                            maxWidth: "100%",
                            width: "500px",
                            height: "320px",
                          }}
                          alt="bannar"
                        ></img>
                        <div className="overlay">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../img/home_custom_blog_01.jpg"
                            }
                            className="image"
                            style={{
                              maxWidth: "100%",
                              width: "500px",
                              height: "320px",
                            }}
                            alt="bannar"
                          ></img>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h5>
                        <Link
                          as={Link}
                          to="/newdetail"
                          className="new-hover text-decoration-none text-dark"
                        >
                          CÁCH LỰA CHỌN THỰC PHẨM TƯƠI SỐNG AN TOÀN
                        </Link>
                      </h5>
                      <p>
                        Thực phẩm bẩn, nhiễm độc hiện nay đang là vấn đề nhức
                        nhối của toàn xã hội, nhất là đối với các mặt hàng
                        thực...
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterAdd></FooterAdd>
    </>
  );
};

export default New;
