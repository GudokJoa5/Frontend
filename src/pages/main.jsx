import Navigation from "../common/navigation";
import bankbookImage from "../assets/bankbook.png";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Main() {
  const BankbookContainer = styled.div`
    text-align: center;

    img {
      margin: 50px auto 0px;
      display: block;
    }

    p {
      margin: 0px;
    }

    p.title {
      margin: 10px 0px 0px 0px;
      font-size: 24px;
    }

    div.subtitle-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p.subtitle {
      margin: 1px 0px;
      font-size: 20px;
    }
  `;

  const SubContainer = styled.div`
    margin-top: 30px;
    padding: 10px;
    background-color: #f1f3f5;
    font-size: 20px;
    width: 100%;

    p {
      margin: 0px;
    }

    .images {
      margin-top: 20px;
      overflow-x: auto;
      white-space: nowrap;
    }

    .image-box {
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 70%;
      background-color: pink;
      margin: 7px;
    }

    .image-profile {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-box-recommend {
      display: inline-block;
      width: 90px;
      height: 120px;
      border-radius: 5px;
      background-color: pink;
      margin: 7px;
    }
  `;

  //#f8f9fa #f1f3f5

  return (
    <>
      <h1 style={{ fontFamily: "KBFGDisplayB" }}>Sub 탈래?</h1>
      <BankbookContainer>
        <img src={bankbookImage} alt="bankbook" />
        <p className="title">총 구독료 67,000원</p>
        <div className="subtitle-container">
          <p className="subtitle">썹타고 구독료 아끼러 가기 </p>
          <ArrowForwardIosIcon sx={{ marginLeft: "5px", color: "#F2DC14" }} />
        </div>
      </BankbookContainer>
      <SubContainer>
        <p className="title">썹 타는 중~</p>
        <div className="images">
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
        </div>
      </SubContainer>

      <SubContainer>
        <p className="title">이번 달 81,000원을 지출하신</p>
        <p className="title">당신은 커피왕!</p>
        <div className="images">
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
          <div className="image-box-recommend"></div>
        </div>
      </SubContainer>
      <Navigation />
    </>
  );
}

export default Main;
