import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Search } from './TrackBar';
import { DeliveryStatus } from './DeliveryStatus';
import { SingleCarousel } from 'app/components/carousel/SingleCarousel';
//import phone from '../../assets/phone.png';
import prev from '../../assets/arrow_prev.svg';
import next from '../../assets/arrow_next.svg';
import { OrderDetailsSelector } from '../../slice/selectors';
import { H3 } from 'app/components/Typography/H3/H3';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function TrackOrder() {
  const { t } = useTranslation();

  const orderDetails = useSelector(OrderDetailsSelector);
  console.log('order details:', orderDetails);

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

  const deliveryStatuses = [
    {
      statusDescription: 'Order created',
      fulfiled: true,
      lastStop: false,
      id_: 1,
    },
    {
      statusDescription:
        'We are currently working to get your order ready for shipping',
      fulfiled: true,
      lastStop: false,
      id_: 2,
    },
    {
      statusDescription:
        orderDetails?.status === 'cancelled'
          ? 'Order cancelled'
          : orderDetails?.status === 'shipped'
          ? 'Order has been shipped'
          : orderDetails?.status === 'delivered'
          ? 'Order has been delivered'
          : '',
      date: '',
      fulfiled:
        orderDetails?.status === 'pennding' ||
        orderDetails?.status === 'default'
          ? false
          : true,
      lastStop: false,
      id_: 3,
    },
  ];
  return (
    <Container>
      <Heading>{t(...messages.title())}</Heading>
      <Search />
      {/* <OrderStatusContainer>
        <Left>
          <div className="connect_statuses"></div>
          <OrderStatus>
            {orders[0].deliveryStatuses.map(state => (
              <DeliveryStatus
              key={state.id_}
                selectStyle={state.fulfiled ? 'fullfiled' : 'NotFullfiled'}
                location={state.statusDescription}
                date={state.date}
                delivered={state.lastStop ? 'delivered' : 'notDelivered'}
              />
            ))}
          </OrderStatus>
        </Left>
        <Right>
          <img src={orders[0].image} alt="product" />
        </Right>
      </OrderStatusContainer> */}
      {orderDetails ? (
        <SingleCarousel settings={settings}>
          {orderDetails.products.map(order => (
            <div>
              <OrderStatusContainer>
                <Heading className="order_name">{order.name}</Heading>
                <Left>
                  <div className="connect_statuses"></div>
                  <OrderStatus>
                    {deliveryStatuses.map(state => (
                      <DeliveryStatus
                        key={state.id_}
                        selectStyle={
                          state.fulfiled ? 'fullfiled' : 'NotFullfiled'
                        }
                        location={state.statusDescription}
                        delivered={
                          orderDetails.status === 'delivered'
                            ? 'delivered'
                            : 'notDelivered'
                        }
                      />
                    ))}
                  </OrderStatus>
                </Left>
                <Right>
                  <img src={order.image[0]} alt="product" />
                </Right>
              </OrderStatusContainer>
            </div>
          ))}
        </SingleCarousel>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin-top: 2rem;

  .nextArrow {
    width: 12px;
  }

  // ${customMedia.greaterThan('medium')`
  // ${p => p.theme.direction['margin-left']}: 3rem;
   
  // `};
`;

const ArrowPrev = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 200px;
  left: 20px;
  z-index: 2;
`;

const ArrowNext = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;

  top: 200px;
  right: 40px;
`;

const OrderStatusContainer = styled.div`
  margin: 3rem 2rem;

  ${customMedia.greaterThan('xmedium')`
  display: flex;
  `};

  .order_name {
    display: block;
    margin: auto;
    margin-bottom: 1rem;
    ${customMedia.greaterThan('xmedium')`
      display: none;
  `};
  }
`;

const Left = styled.div`
  //${p => p.theme.direction['margin-left']}: 3rem;
  margin: 0 3rem;
  position: relative;

  .connect_statuses {
    background: #f5a4ef;
    height: 46%;
    width: 1px;
    position: absolute;
    left: 12px;
    top: 10px;
    z-index: 1;

    ${customMedia.lessThan('xmedium')`
    height: 90%;
  `};

    ${customMedia.lessThan('mediumplus')`
    height: 75%;
  `};

    ${customMedia.lessThan('xsm')`
    height: 93%;
  `};
  }
`;

const Right = styled.div`
  display: none;
  img {
    height: 250px;
    width: 250px;
  }
  ${customMedia.greaterThan('xmedium')`
  display: block;
  margin: auto;
  img {
    height: 250px;
    width: 250px;
  }
  `};
`;

const OrderStatus = styled.div`
  dis
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;
