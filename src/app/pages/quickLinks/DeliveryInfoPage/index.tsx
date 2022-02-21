import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Hero from '../components/Hero';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export function DeliveryInfoPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Delivery Information Page</title>
        <meta
          name="description"
          content="AltMall's Delivery Information page"
        />
      </Helmet>
      <Wrapper>
        <Hero title="Delivery Information" />
        <BackBtnAndContent>
          <BackBtn>
            <BackText text={t(...messages.back())} />
          </BackBtn>
          <CardWrap>
            <Card>
              <H3>Destination</H3>
              <p>INTRA-CITY (LAGOS-LAGOS)</p>
              <p>LAGOS - WEST </p>
              <p>LAGOS - EAST </p>
              <p>LAGOS - NORTH </p>
              <p>LAGOS - BONNY ISLAND </p>
            </Card>
            <Card>
              <H3>Transit Time</H3>
              <p>72 HOURS</p>
              <p>2 - 5 WORKING DAYS</p>
              <p>2 - 5 WORKING DAYS</p>
              <p>2 - 5 WORKING DAYS</p>
              <p>2 - 5 WORKING DAYS</p>
            </Card>
          </CardWrap>
        </BackBtnAndContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
  width: 100%;
`;

const BackBtnAndContent = styled.div`
  margin: 0 auto;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 83%;
  margin-top: 80px;
  ${customMedia.lessThan('large')`
    flex-wrap: wrap;
    flex: start;
    justify-content: space-between;
  `};
`;

const BackBtn = styled.div`
  margin-right: 10%;
  margin-bottom: 24px;
`;

const CardWrap = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  width: 700px;
  text-align: ${p => p.theme.direction['left']};
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackground};
  padding: 32px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #f4f4f4;
  ${p => p.theme.direction['margin-right']}: 5px;

  p {
    font-size: 18px;
    margin-bottom: 25px;
    ${customMedia.lessThan('small')`
        font-size: 12px;
    `}
  }

  ${customMedia.lessThan('small')`
    padding: 18px;
  `}
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 32px;
  ${customMedia.lessThan('small')`
        font-size: 14px;
    `}
`;
