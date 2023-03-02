import { Col, Container, Row } from "react-bootstrap";
import FooterAdd from "../components/FooterAdd";
import TopBanner from "../components/TopBanner";

const NewDetail = () => {
  return (
    <>
      <TopBanner content="MẸO CHỌN THỰC PHẨM AN TOÀN"></TopBanner>
      <Container>
        <Row className="justify-content-center mb-5 pb-5">
          <Col className="col-sm-12 col-xs-12 col-md-12 mt-5">
            <h1>MẸO CHỌN THỰC PHẨM AN TOÀN</h1>
            <small>
              <i class="fa-regular fa-clock"></i> 14:48 - 29/06/2018
            </small>
            <hr></hr>
            <h6>
              Vấn nạn mất vệ sinh an toàn thực phẩm đang lan dần đến bữa cơm của
              mọi gia đình. Sau đây là những kinh nghiệm thực tế về mẹo đi chợ
              chọn mua thực phẩm sạch.
            </h6>
            <p>
              Thực phẩm sạch đang là một trong những mối quan tâm hàng đầu của
              các gia đình. Để chọn lựa được thực thẩm an toàn, bạn cần chú ý
              tới những điều sau đây.
            </p>
            <h6>1. Chọn các loại thịt</h6>
            <p>
              Trước tiên, nên lựa chọn địa điểm bán hàng uy tín, chất lượng. Dấu
              hiệu nhận biết là dấu chứng nhận của cơ quan thú y trên sản phẩm
              và nhãn mác sản phẩm. Ngoài ra, cũng cần quan tâm đến vệ sinh của
              quầy bán thịt vì đây cũng là yếu tố ảnh hưởng đến chất lượng thịt
              và sự an toàn khi sử dụng. Nếu thịt tươi thì bề mặt khô mịn, không
              bị nhớt, khối thịt rắn chắc, có độ đàn hồi cao, ấn ngón tay vào
              thịt tạo thành vết lõm nhưng không để lại dấu vết khi nhấc ngón
              tay ra. Nếu thấy mặt thịt thô ráp, ngửi không có mùi thơm của
              thịt, đề nghị người bán rạch một lằn dao vào thớ thịt, xem bên
              trong có màu tươi hồng của thịt (thịt lợn) hoặc màu đỏ tươi (thịt
              bò) thì thịt đó vẫn còn tươi.
            </p>
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + "../img/2_1_1.jpg"}
                style={{
                  maxWidth: "100%",
                  width: "500px",
                  height: "320px",
                }}
                alt="bannar"
              ></img>
              <p>
                Nếu thịt tươi thì bề mặt khô mịn, không bị nhớt, khối thịt rắn
                chắc, có độ đàn hồi cao.
              </p>
            </div>
            <p>
              Không nên mua thịt có màu nhợt nhạt hoặc có các bọc trắng trong
              thớ thịt, đối với thịt lợn không nên mua thịt khi mỡ có màu vàng
              và mùi khét.Nếu thịt có màu sẫm, hoặc có vết bầm ở cơ hoặc các nốt
              hoặc đám xuất huyết trên da thì không nên mua vì đó là các dấu
              hiệu nghi thịt gia súc, gia cầm đã chết hoặc mắc bệnh hoặc do
              nhuộm màu. Đối với thịt đông lạnh cần xem kỹ nhãn mác xuất xứ và
              hạn sử dụng ghi trên bao bì và thiết bị bảo quản.
            </p>
            <h6>2. Chọn cá tươi ngon</h6>
            <p>
              Chọn những con cá mắt sáng, nhanh, chạm vào bơi nhanh, quẫy khỏe
              chứ không lù đù. Mua cá thì bạn cũng đừng ngại ngần việc bẩn tay,
              vì ngại sẽ dễ mua phải cá không ngon. Hãy vạch mang cá ra xem, nếu
              mang còn đỏ là cá tươi nhưng nếu nó trắng bệch hoặc thâm là cá
              ươn. Nhìn bề ngoài cá, nếu còn nhớt bóng, mắt cá còn trong suốt,
              vảy cá không rời ra, mang cá còn hồng, bỏ con cá vào nước thì cá
              chìm xuống, đó là con cá tươi. Còn nếu bề ngoài cá có dịch dính,
              mắt lõm xuống, vảy cá dễ rơi ra, có màu nhợt nhạt, thịt cá không
              còn đàn hồi, bụng cá và hậu môn cá trương ra, bỏ vào nước cá nổi,
              thì con cá đó đã bị ươn.
            </p>
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + "../img/fish177238975.jpg"}
                style={{
                  maxWidth: "100%",
                  width: "500px",
                  height: "320px",
                }}
                alt="bannar"
              ></img>
              <p>
                Nhìn bề ngoài cá, nếu còn nhớt bóng, mắt cá còn trong suốt, vảy
                cá không rời ra.
              </p>
            </div>
            <h6>3. Cách chọn rau, củ, quả</h6>
            <p>
              Mang cá là cơ quan hô hấp của cá, giống như buồng phổi của con
              người, phần lớn chất độc có lẽ tập trung tại đây. Mang cá dính độc
              sẽ không sáng trơn, hơi thô và có màu hồng thâm đậm. Cá bị nhiễm
              độc nặng thì mình cá không còn nguyên, đầu to đuôi nhỏ, lưng cong
              gù thậm chí có u. Có con da còn bị vàng và đuôi xanh. Mắt cá bị
              nhiễm độc thường bị đục, mất vẻ tinh anh bình thường, có con thậm
              chí mắt còn lồi ra ngoài. Ngoài ra, cá bị nhiễm độc sẽ có những
              mùi bất thường như mùi tỏi, mùi dầu hôi…
            </p>
            <div className="text-center">
              <img
                src={process.env.PUBLIC_URL + "../img/4_1_1.jpg"}
                style={{
                  maxWidth: "100%",
                  width: "500px",
                  height: "320px",
                }}
                alt="bannar"
              ></img>
              <p>
                Lựa chọn những loại rau củ màu sắc tươi xanh tự nhiên, cầm chắc
                tay, nặng tay.
              </p>
            </div>
            <p>
              Khi chọn các loại đỗ quả, mướp đắng nên chọn quả có cuống to màu
              xanh tươi, thân mềm, hạt không lớn, không nhỏ.Đối với các loại rau
              dạng củ, quả nên chọn các loại củ trơn nhẵn, da căng, không bị dập
              nát, màu sắc củ phải đồng nhất, không nên chọn mua các loại củ đã
              mọc mầm vì ảnh hưởng đến tiêu hóa. Không mua những loại thực phẩm
              đã mọc mầm nhất là khoai tây, vì trong những mầm này có chứa chất
              solanine rất đắng và độc, sử dụng quá nhiều chất này có thể gây
              ngộ độc và ung thư, trong những trái cà chua xanh cũng có chứa
              nhiều chất solanine, cần phải ủ cho cà chua chín ngả sang màu đỏ
              để làm mất đi chất solanine rồi mới nên ăn. Không nên mua những
              loại củ quả được gọt sẵn ngoài chợ vì chúng không đảm bảo và những
              người bán có thể gọt bỏ đi những củ sâu bệnh để gọt chung vào đó,
              đồng thời nước ngâm hoa quả của họ không được đảm bảo vệ sinh, có
              thể khiến nhiều vi sinh vật bám vào đó.
            </p>
          </Col>
        </Row>
      </Container>
      <FooterAdd></FooterAdd>
    </>
  );
};

export default NewDetail;
