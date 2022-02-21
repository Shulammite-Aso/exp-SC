import React from 'react';
import { Button } from 'app/components/Button/Button';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import productImage from '../../assets/onlineshoppingclothing 1.png';
import prev from '../../assets/arrow_prev.svg';
import next from '../../assets/arrow_next.svg';
import { SingleCarousel } from 'app/components/carousel/SingleCarousel';

export function OrderDetails() {
  const products = [
    {
      image: productImage,
      name: 'Tecno Phantom',
      orderNo: '1902234245',
      status: 'Delivered',
      dateDelivered: '10/08/2021',
      id: 1,
    },

    {
      image: productImage,
      name: 'Infinix Hot6',
      orderNo: '1902234245',
      status: 'In Progress',
      dateDelivered: '',
      id: 2,
    },

    {
      image: productImage,
      name: 'Tecno Phantom',
      orderNo: '1902234245',
      status: 'Cancelled',
      dateDelivered: '',
      id: 3,
    },
  ];

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
  return (
    <Container>
      {products.length === 1 ? (
        <Details>
          <Left>
            <div>
              <p>
                Order #: <span>1902234245</span>
              </p>
            </div>
            <div>
              <p>1 Item(s)</p>
              <p>Placed on 30-08-2021</p>
              <p>
                Total: <span>₦ 114,110</span>
              </p>
            </div>
            <div>
              <Subheading>Payment Method</Subheading>
              <p>Cash On Delivery</p>
            </div>
            <div>
              <Subheading>Payment Details</Subheading>
              <p>Items total: ₦ 114,110 </p>
              <p>Shipping Fees: ₦0</p>
              <p>Total: ₦ 114,110</p>
            </div>
            <div>
              <Subheading>Delivery Method</Subheading>
              <p>Standard Door Delivery</p>
            </div>
            <div>
              <Subheading>Shipping Address</Subheading>
              <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            </div>
          </Left>

          <Right>
            <div>
              <div>
                <p>Tecno Phantom 9</p>
                <p className="price">₦ 114,110 </p>
                <img src={productImage} alt="product" />
              </div>
              <BtnGroup>
                <Button className="btn btn-primary">Buy Again</Button>
                <Button className="btn btn-outline-primary">
                  Return Order
                </Button>
                <Button className="btn btn-outline-primary">
                  Cancel Order
                </Button>
              </BtnGroup>
            </div>
          </Right>
        </Details>
      ) : (
        <SingleCarousel settings={settings}>
          {products.map(product => (
            <div className="content">
              <Details>
                <Left>
                  <div>
                    <p>
                      Order #: <span>1902234245</span>
                    </p>
                  </div>
                  <div>
                    <p>1 Item(s)</p>
                    <p>Placed on 30-08-2021</p>
                    <p>
                      Total: <span>₦ 114,110</span>
                    </p>
                  </div>
                  <div>
                    <Subheading>Payment Method</Subheading>
                    <p>Cash On Delivery</p>
                  </div>
                  <div>
                    <Subheading>Payment Details</Subheading>
                    <p>Items total: ₦ 114,110 </p>
                    <p>Shipping Fees: ₦0</p>
                    <p>Total: ₦ 114,110</p>
                  </div>
                  <div>
                    <Subheading>Delivery Method</Subheading>
                    <p>Standard Door Delivery</p>
                  </div>
                  <div>
                    <Subheading>Shipping Address</Subheading>
                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                  </div>
                </Left>

                <Right>
                  <div className="right_side_content">
                    <p>Tecno Phantom 9</p>
                    <p className="price">₦ 114,110 </p>
                    <img
                      className="product_pic"
                      src={productImage}
                      alt="product"
                    />
                    <BtnGroup>
                      <Button className="btn btn-primary">Buy Again</Button>
                      <Button className="btn btn-outline-primary">
                        Return Order
                      </Button>
                      <Button className="btn btn-outline-primary">
                        Cancel Order
                      </Button>
                    </BtnGroup>
                  </div>
                </Right>
              </Details>
            </div>
          ))}
        </SingleCarousel>
      )}
    </Container>
  );
}

const Container = styled.div`
  .content {
  }

  .slick-dots {
    position: absolute;
    bottom: -80px;
  }
`;

const Details = styled.div`
  width: 90%;
  margin: auto;

  ${customMedia.greaterThan('mediumplus')`
  display: flex;
  justify-content: space-between;
  `};
  // margin-left: 3.5rem;
  // margin-bottom: 3rem;
`;

const Left = styled.div`
  div {
    margin-bottom: 1.5rem;
  }
  p {
    color: ${p => p.theme.color.colorTextBlack};
    font-size: 15.8721px;
  }
`;

const Right = styled.div`
  .right_side_content {
    .product_pic {
      display: inline-block;
      width: 298.78px;
      height: 242.07px;
      margin: 0 !important;
    }

    ${customMedia.greaterThan('mediumplus')`
    text-align: right;
  `};
  }

  .price {
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;

  ${customMedia.lessThan('small')`
  justify-content: space-around;
  `};
`;

const Subheading = styled.p`
  color: #c00ab5 !important;
  font-weight: 600;
  font-size: 15.8721px;
  line-height: 19px;
`;

const ArrowPrev = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 200px;
  left: 0px;
  z-index: 2;

  ${customMedia.lessThan('xmedium')`
  display: none;
  `};
`;

const ArrowNext = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;

  top: 200px;
  right: 0px;
`;
