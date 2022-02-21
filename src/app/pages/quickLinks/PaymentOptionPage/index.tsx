import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Hero from '../components/Hero';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/Content';
import { customMedia } from 'styles/media';

const benefits = [
  'Products must be unused',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Product must have all tags and labels attached.',
  'Product inserts and accessories must be intact.',
  'Product must have the receipt or proof of purchase.',
];

export function PaymentOptionPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Payment Option Page</title>
        <meta name="description" content="AltMall's Payment Options page" />
      </Helmet>
      <Wrapper>
        <Hero title="Payment Options" />
        <BackBtnAndContent>
          <BackBtn>
            <BackText text={t(...messages.back())} />
          </BackBtn>
          <Content
            heading1="Pay Later"
            subHeading1="Pay with SAF"
            subText1="This payment option is by Sterling Alternative Finance and
                  allows you get the item you need instantly and pay back in
                  installments while conserving your funds for other important
                  needs. This is available to both salaried and non-salaried
                  individuals"
            subHeading2="Benefits"
            list={benefits}
            subText2="If you choose this option, you will be redirected to the SAF
                  Asset Finance page where you will be required to register for
                  this service and provide your bank statement of account, which
                  will attract a minimal fee. After your details are reviewed
                  and you meet our criteria, you will be prompted to create a
                  SAF account that will serve as a repayment account for your
                  facility."
            heading2="Pay Now"
            subHeading3="Pay with Card"
            subText3="This payment options allows you pay using your debit card;
                  Verve, Mastercard and Visa Card."
            subHeading4="Pay with One Bank App"
            subText4="This option allows you make payment directly from your OneBank
                  application by scanning a generated QR code to initiate
                  payment. This is easy, seamless, and available for customers
                  with the OneBank App. Please visit google playstore or IOS app
                  to download."
          />
        </BackBtnAndContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
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
