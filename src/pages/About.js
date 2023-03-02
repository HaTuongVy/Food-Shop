import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import FooterAdd from "../components/FooterAdd";
import TopBanner from "../components/TopBanner";
import "./About.css";

const Aboutus = () => {
  return (
    <>
      <TopBanner content="GIỚI THIỆU" />
      <Container>
        <Row className="justify-content-center login-margin">
          <Col className="col-sm-12 col-xs-12 col-md-12">
            <Row>
              <div className="mt-5 mb-3">
                <h4 className="text-center">CÂU CHUYỆN VỀ CHÚNG TÔI</h4>
                <div className="line"></div>
              </div>
              <Col className="col-xs-12 col-md-6">
                <p>
                  Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                  từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật
                  nuôi đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt
                  nhất, sạch nhất cho thị trường. Các sản phẩm rau hữu cơ của
                  Michimart cung cấp đều nằm trong dự án ADDA được tổ chức Hệ
                  thống bảo đảm cùng tham gia– PGS (Participatory Guarantee
                  System) chứng nhận, đảm bảo tính hữu cơ. Thực phẩm sạch, trái
                  cây an toàn đều có giấy chứng nhận an toàn VIETGAP, GLOBAL
                  GAP, HACCP, có xuất xứ rõ ràng, không những sạch – mà còn
                  ngon.
                </p>
              </Col>
              <Col className="col-xs-12 col-md-6">
                <img
                  src={
                    process.env.PUBLIC_URL + "../img/home_custom_bigsale_01.png"
                  }
                  style={{ maxWidth: "100%" }}
                  alt="bannar"
                ></img>
              </Col>
            </Row>
            <Row>
              <div className="mt-5 mb-3">
                <h4 className="text-center">KỸ NĂNG CỦA CHÚNG TÔI</h4>
                <div className="line"></div>
              </div>
              <Col className="col-xs-12 col-md-6">
                <div className="mb-4">
                  <h6>WORDPRESS</h6>
                  <ProgressBar animated variant="warning" now={100} />
                </div>
                <div className="mb-4">
                  <h6>WORDPRESS</h6>
                  <ProgressBar animated variant="warning" now={50} />
                </div>
                <div className="mb-4">
                  <h6>WORDPRESS</h6>
                  <ProgressBar animated variant="warning" now={30} />
                </div>
                <div className="mb-4">
                  <h6>WORDPRESS</h6>
                  <ProgressBar animated variant="warning" now={75} />
                </div>
              </Col>
              <Col className="col-xs-12 col-md-6">
                <p>
                  Nhận thức được tầm quan trọng của thực phẩm sạch đối với sức
                  khỏe, chúng tôi – Công ty cổ phần thương mại và dịch vụ
                  Organic – những doanh nhân có tâm với nghề đã quyết định đầu
                  tư vào ngành cung cấp thực phẩm sạch.
                </p>
                <p>
                  Organic là nhà phân phối rau hữu cơ chính thức của tổ chức
                  ADDA – Đan Mạch hỗ trợ kỹ thuật và giám sát chất lượng. Rau
                  hữu cơ của chúng tôi là loại rau canh tác trong điều kiện hoàn
                  toàn tự nhiên.
                </p>
                <p>
                  Thịt sạch là sản phẩm không có thuốc, kháng sinh, hormon, chất
                  kích thích tăng trưởng… Gia súc, gia cầm chỉ ăn cỏ rơm hay ngũ
                  cốc có chứng nhận sinh học không thuốc trừ sâu hay phân bón
                  hóa học.
                </p>
              </Col>
            </Row>
            <Row>
              <div className="mt-5 mb-3">
                <h4 className="text-center">ĐỘI CỦA CHÚNG TÔI</h4>
                <div className="line"></div>
              </div>
              <Col>
                <div className="container-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "../img/custom-teammember-1.jpg"
                    }
                    className="rounded-circle image"
                    style={{ maxWidth: "100%" }}
                    alt="251x260"
                  ></img>
                  <div className="middle">
                    <div className="text">
                      <i className="fa-brands fa-facebook-f"></i> &ensp;&ensp;
                      <i className="fa-brands fa-linkedin-in"></i>&ensp;&ensp;
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <h6>Mr Ben</h6>
                    <h6>Nhóm Hỗ Trợ</h6>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="container-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "../img/custom-teammember-2.jpg"
                    }
                    className="rounded-circle image"
                    style={{ maxWidth: "100%" }}
                    alt="251x260"
                  ></img>
                  <div className="middle">
                    <div className="text">
                      <i className="fa-brands fa-facebook-f"></i> &ensp;&ensp;
                      <i className="fa-brands fa-linkedin-in"></i>&ensp;&ensp;
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <h6>Mr John</h6>
                    <h6>CEOC</h6>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="container-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "../img/custom-teammember-3.jpg"
                    }
                    className="rounded-circle image"
                    style={{ maxWidth: "100%" }}
                    alt="251x260"
                  ></img>
                  <div className="middle">
                    <div className="text">
                      <i className="fa-brands fa-facebook-f"></i> &ensp;&ensp;
                      <i className="fa-brands fa-linkedin-in"></i>&ensp;&ensp;
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <h6>Mr Henry</h6>
                    <h6>Nhóm Hỗ Trợ</h6>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="container-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "../img/custom-teammember-4.jpg"
                    }
                    className="rounded-circle image"
                    style={{ maxWidth: "100%" }}
                    alt="251x260"
                  ></img>
                  <div className="middle">
                    <div className="text">
                      <i className="fa-brands fa-facebook-f"></i> &ensp;&ensp;
                      <i className="fa-brands fa-linkedin-in"></i>&ensp;&ensp;
                      <i className="fa-brands fa-google-plus-g"></i>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <h6>Rokan Tech</h6>
                    <h6>Lập Trình Viên</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterAdd></FooterAdd>
    </>
  );
};

export default Aboutus;
