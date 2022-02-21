/**
 *
 * CreditCardSlider
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import Sidebar from '../../../../components/Sidebar';
import { H3 } from 'app/components/Typography/H3/H3';
import { H5 } from 'app/components/Typography/H5/H5';
import { SingleCarousel } from 'app/components/carousel/SingleCarousel';
import margentaCardImg from '../../assets/resized.png';
import blackCardImg from '../../assets/blackBareCard.png';
import next from '../../assets/next.svg';
import prev from '../../assets/prev.svg';
import cardImage from '../../assets/cardImage.png';
import toggle from '../../assets/Toggle.png';
import deleteIcon from '../../assets/Mask.png';

interface Props {}

export function CreditCardSlider(Props: Props) {
  function Arrow(props) {
    let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
    const char =
      props.type === 'next' ? (
        <ArrowNext src={next} alt="next" />
      ) : (
        <ArrowPrev src={prev} alt="previous" />
      );
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow type="prevArrow" />,
    nextArrow: <Arrow type="next" />,
  };

  const details = [
    {
      cardnumber: '**** **** **** *583',
      name: 'Akande Oluwaseun',
      expires: '7/22',
      cvv: '457',
      cardImage: cardImage,
      toggle: toggle,
      deleteIcon: deleteIcon,
    },
    {
      cardnumber: '',
      name: '',
      expires: '',
      cvv: '',
      cardImage: cardImage,
      toggle: 'toggle',
      deleteIcon: '',
    },
    {
      cardnumber: '',
      name: '',
      expires: '',
      cvv: '',
      cardImage: cardImage,
      toggle: 'toggle',
      deleteIcon: '',
    },
  ];

  return (
    <Wrapper>
      <Sidebar />

      <PaymentWrap>
        <Title className="payment-title">Payment Methods</Title>
        <PaymentCardWrapper>
          <PaymentCard>
            <H5>Credit or Debit Card</H5>
            <Image
              className="colored-card"
              src={margentaCardImg}
              alt="card image"
            />
            <div>
              <p>Saved Debit/ Credit Cards</p>
            </div>
          </PaymentCard>
          <PaymentCard>
            <H5>Gift Card</H5>
            <Image src={blackCardImg} alt="card image" />
            <div>
              <p>Saved Gift Cards</p>
            </div>
          </PaymentCard>
          <PaymentCard>
            <H5>Altpay Card</H5>
            <Image src={margentaCardImg} alt="card image" />
            <div>
              <p>Saved Altpay Cards</p>
            </div>
          </PaymentCard>
          <PaymentCard>
            <H5>Wallet</H5>
            <Image src={blackCardImg} alt="card image" />
            <div>
              <p>Wallet</p>
            </div>
          </PaymentCard>
        </PaymentCardWrapper>
        <SingleCarousel settings={settings}>
          {details.map(detail => (
            <div>
              <img src={detail.cardImage} alt="Card" />
            </div>
          ))}
        </SingleCarousel>
        <CardDetailForm>
          <Topbar>
            <TextWrap>
              <DefaultText className="set-default">Set As Default</DefaultText>
              <SubText className="text-desc">
                Always use this card for my transactions
              </SubText>
            </TextWrap>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            {/* <img src={toggle} alt="toggle button" /> */}
          </Topbar>
          <Bottombar>
            <DeleteText>Delete Card</DeleteText>
            <img src={deleteIcon} alt="delete icon" />
          </Bottombar>
        </CardDetailForm>
      </PaymentWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 120px 19px;
`;

const PaymentWrap = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 80px;
  /* border: 1px solid black; */
  position: relative;

  .nextArrow {
    width: 12px;
  }
`;

const ArrowPrev = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 90px;
  left: 296px;
  z-index: 2;
`;

const ArrowNext = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;

  top: 90px;
  right: 310px;
`;

const Title = styled(H3)`
  text-align: center;
  font-weight: bold;
  color: ${p => p.theme.color.colorText};
  margin-bottom: 100px;
`;

const PaymentCardWrapper = styled.div`
  width: 100%;
  height: 178px;
  display: flex;
  margin-bottom: 55px;
  margin-left: 20px;
`;

const Image = styled.img`
  position: absolute;
  min-width: 230px;
  height: 146px;
  background-repeat: no-repeat;
  border-radius: 15px;
  /* margin: 8px; */

  & .colored-card {
    border-radius: 5px;
    background-color: #40033c;
  }
`;

const PaymentCard = styled.div`
  flex: 1;
  cursor: pointer;
  width: 100%;
  height: 200px;
  margin-right: 8px;
  position: relative;

  ${H5} {
    margin: 16px;
    font-weight: 700;
  }

  div {
    /* display: flex; */
    position: absolute;
    top: 57px;
    left: 50px;

    p {
      font-size: 11px;
      /* width:134px; */
      width: 100%;
      font-weight: 400;
      line-height: 15px;
      align-items: center;
      justify-content: center;
      text-align: center;
      /* padding-top: 56px auto; */
      padding-top: 53px;
      color: #fff;
    }
  }
`;

const CardDetailForm = styled.div`
  position: absolute;
  top: 578px;
  left: 300px;
  margin-top: 56px;
  width: 367px;
  /* text-align: center; */
  /* border: 1px solid blue; */
`;

const Topbar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: relative;
  border-bottom: 2px solid;
  border-bottom-color: ${p => p.theme.color.borderBottom};

  img {
    width: 48px;
    height: 24px;
    margin-bottom: 36px;
    top: 20px;
    right: 0px;
    position: absolute;
  }

  label {
    width: 48px;
    height: 24px;
    margin-bottom: 36px;
    top: 20px;
    right: 0px;
    position: absolute;
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    .switch input {
      width: 48px;
      height: 24px;
      margin-bottom: 36px;
      top: 20px;
      right: 0px;
      position: absolute;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    .slider:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;

const DefaultText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #c00ab5;
  line-height: 18px;
  margin-bottom: 4px;
`;

const SubText = styled.p`
  font-size: 13px !important;
  font-weight: 400;
  width: 60%;
  /* border: 1px solid black; */
  margin-bottom: 18px;
  height: 30px;
`;

const TextWrap = styled.div`
  display: block;
`;

const Bottombar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  position: relative;
  border-bottom: 2px solid;
  border-bottom-color: ${p => p.theme.color.borderBottom};

  img {
    width: 14px;
    height: 16px;
    margin-bottom: 36px;
    top: 20px;
    right: 5px;
    position: absolute;
  }
`;

const DeleteText = styled.p`
  margin-top: 25px;
  font-size: 15px;
  color: #d50000;
  font-weight: 400;
  line-height: 18px;
`;
