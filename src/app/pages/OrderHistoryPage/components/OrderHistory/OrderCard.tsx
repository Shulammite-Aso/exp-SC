import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { messages } from './messages';
import { Button } from 'app/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { OrderHistoryProp } from '../../slice/types';
import { formatDate } from 'utils/formatters';

interface Prop {
  order: OrderHistoryProp;
}

export const OrderCard: React.FC<Prop> = ({ order }) => {
  const { t } = useTranslation();
  const { push } = useHistory();

  const mql = window.matchMedia('(max-width: 768px)');
  const mobileDevice = mql.matches;

  const statusClass =
    order.status === 'delivered'
      ? 'delivered'
      : order.status === 'shipped'
      ? 'delivered'
      : order.status === 'pending'
      ? 'in-progress'
      : order.status === 'cancelled'
      ? 'cancelled'
      : undefined;

  const orderTitle =
    order.products.length === 0
      ? 'No product ordered'
      : order.products.length === 1
      ? order.products[0].product.name
      : `${order.products[0].product.name} and ${
          order.products.length - 1
        } others`;

  return (
    <Card>
      {mobileDevice ? (
        <>
          <DetailSummary>
            <div>
              <img
                src={order?.products[0]?.product?.primary_image}
                alt={order?.products[0]?.product?.name}
              />
            </div>
            <div>
              <p className="product-name">{orderTitle}</p>
              <p>{t(...messages.orderNo()) + ' ' + order.order_number}</p>
              <div>
                <span>{t(...messages.status())}</span>{' '}
                <span className={statusClass}>{order.status}</span>
              </div>
              <p className="date-delivered">
                {t(...messages.dateDelivered()) +
                  ' ' +
                  formatDate(order.date, {})}
              </p>

              <CtaButton>
                <Cta2Button
                  onClick={() => push(`/orders/${order._id}`)}
                  className="btn btn-outline-primary"
                >
                  {t(...messages.orderDetailsBtn())}
                </Cta2Button>
                {/* <ButtonCta
                  to="/products/:category/:subcategory/:product"
                  text={t(...messages.orderDetailsBtn())}
                  btStyle="btn-outline-primary"
                /> */}
              </CtaButton>
            </div>
          </DetailSummary>
        </>
      ) : (
        <>
          <DetailSummary>
            <div>
              <img
                src={order?.products[0]?.product?.primary_image}
                alt={order?.products[0]?.product?.name}
              />
            </div>
            <div>
              <p className="product-name">{orderTitle}</p>
              <p>{t(...messages.orderNo()) + ' ' + order.order_number}</p>
              <div>
                <span>{t(...messages.status())}</span>{' '}
                <span className={statusClass}>{order.status}</span>
              </div>
              <p className="date-delivered">
                {t(...messages.dateDelivered()) +
                  ' ' +
                  formatDate(order.date, {})}
              </p>
            </div>
          </DetailSummary>
          <div>
            <Cta2Button
              onClick={() => push(`/orders/${order._id}`)}
              className="btn btn-outline-primary"
            >
              {t(...messages.orderDetailsBtn())}
            </Cta2Button>
            {/* <ButtonCta
              to="/products/:product"
              text={t(...messages.orderDetailsBtn())}
              btStyle="btn-outline-primary"
            /> */}
          </div>
        </>
      )}
    </Card>
  );
};

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  margin: 1rem 0;
  padding: 4px;
  ${customMedia.greaterThan('medium')`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding: 2rem;
  `};
`;

const DetailSummary = styled.div`
  display: flex;
  justify-content: space-between;

  div:nth-child(2) {
    ${customMedia.lessThan('medium')`
    width: 65%;
    margin: 0 1rem;
  `};
    ${p => p.theme.direction['margin-left']}: 1.8rem;
    p,
    span {
      color: ${p => p.theme.color.colorTextBold};
    }
    .product-name {
      color: ${p => p.theme.color.colorTextBold};
      font-size: 18px;
      line-height: 140%;
    }
    .date-delivered {
      font-size: 10px;
      line-height: 16px;
      color: #bdbcdb;
    }

    .delivered {
      background-color: #439f6e;
      border-radius: 6px;
      color: #ffffff;
      font-size: 8px;
      display: inline-block;
      padding: 4px 8px;
    }
    .in-progress {
      background-color: #ffb82e;
      border-radius: 6px;
      color: #ffffff;
      font-size: 8px;
      display: inline-block;
      padding: 4px 8px;
    }
    .cancelled {
      background-color: #f93232;
      border-radius: 6px;
      color: #ffffff;
      font-size: 8px;
      display: inline-block;
      padding: 4px 8px;
    }
  }
`;

const Cta2Button = styled(Button)`
  margin: 8px 0;
`;

const CtaButton = styled.div`
  margin: 8px 0;
`;
