/**
 *
 * Body
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import sellerImg from '../../assets/sellerImg.png';
import bullet from '../../assets/bullet.png';
import { messages } from './messages';
import { H3 } from 'app/components/Typography/H3/H3';
import { H4 } from 'app/components/Typography/H4/H4';

interface Props {}

export function Body(seller: Props) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <SellerProfile>
        <SellerImage src={sellerImg} alt="Seller Information Image" />
        <SellerName>{t(...messages.sellername())}</SellerName>
        <SellerScore>
          {t(...messages.seller_score())}
          <p>Seller Score</p>
        </SellerScore>
        <SellerCountry>{t(...messages.seller_country())}</SellerCountry>
      </SellerProfile>

      <SellerContainer>
        <SellerInformationWrap>
          <SellerInfoTitle>
            <H3>{t(...messages.seller_info_title())}</H3>
          </SellerInfoTitle>
          <SellerInfoDetail>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-years">
                Selling on Altmall: {t(...messages.years_on_altmall())}
              </p>
            </span>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-country">
                Successful Sales: {t(...messages.successful_sales())}
              </p>
            </span>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-country">
                Selling on Altmall: {t(...messages.seller_country())}
              </p>
            </span>
          </SellerInfoDetail>
        </SellerInformationWrap>

        <SellerPerformanceWrap>
          <SellerPerformanceTitle>
            <H3>{t(...messages.seller_info_title())}</H3>
          </SellerPerformanceTitle>
          <SellerPerformace>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-years">
                Order Fulfilment Rate: {t(...messages.order_fulfilment_rate())}
              </p>
            </span>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-country">
                Quality Score: {t(...messages.quality_score())}
              </p>
            </span>
            <span>
              <img src={bullet} alt="bullet" />
              <p className="seller-country">
                Customer Ratings: {t(...messages.customer_ratings())}
              </p>
            </span>
          </SellerPerformace>
        </SellerPerformanceWrap>
      </SellerContainer>
      <ProductListingHeader>
        <H4>{t(...messages.more_products())}</H4>
      </ProductListingHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

const SellerProfile = styled.div`
  display: block;
  width: 30%;
  padding-left: 94px;
  margin-top: 46px;
  position: relative;
`;

const SellerImage = styled.img`
  position: absolute;
  width: 92px;
  height: 92px;
  position: absolute;
  margin-top: 19px;
`;

const SellerName = styled.p`
  padding-top: 124px;
  position: absolute;
  line-height: 21px;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;

const SellerScore = styled.p`
  width: 100%;
  font-weight: 700;

  display: flex;
  padding-top: 160px;

  p {
    padding-left: 10px;
  }
`;

const SellerCountry = styled.p`
  width: 100%;
  line-height: 21px;
  font-weight: 400;
  font-size: 14px;
  padding-top: 16px;
`;

const SellerContainer = styled.div`
  display: flex;
`;

const SellerInformationWrap = styled.div`
  width: 50%;
  display: block;
  padding: 47px 13px 60px 92px;
`;

const SellerInfoTitle = styled.p`
  width: 100%;
  ${H3} {
    font-size: 16px;
    font-weight: 700;
    color: ${p => p.theme.color.colorText};
  }
`;

const SellerInfoDetail = styled.div`
  height: 153px;
  width: 100%;
  display: block;
  border: 0.5px solid #bdbcdb;
  border-radius: 8px;

  span {
    display: flex;
    line-height: 20px;
    img {
      width: 20px;
      height: 20px;
      margin-top: 26px;
      margin-left: 26px;
      margin-right: 10px;
      border-radius: 1rem 0rem 1rem 1rem;
    }
    p {
      margin-top: 26px;
    }
  }
`;

const SellerPerformanceWrap = styled.div`
  width: 50%;
  display: block;
  padding: 47px 105px 60px 13px;
`;

const SellerPerformanceTitle = styled.p`
  width: 100%;
  /* border: 1px solid white; */
  ${H3} {
    font-size: 16px;
    font-weight: 700;
    color: ${p => p.theme.color.colorText};
  }
`;

const SellerPerformace = styled.div`
  height: 153px;
  width: 100%;
  display: block;
  border: 0.5px solid #bdbcdb;
  border-radius: 8px;

  span {
    display: flex;
    line-height: 20px;
    img {
      width: 20px;
      height: 20px;
      margin-top: 26px;
      margin-left: 26px;
      margin-right: 10px;
      border-radius: 1rem 0rem 1rem 1rem;
    }
    p {
      margin-top: 26px;
    }
  }
`;

const ProductListingHeader = styled.div`
  text-align: center;
  justify-content: center;
  margin-bottom: 60px;
  ${H4} {
    color: ${p => p.theme.color.colorText};
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`;
