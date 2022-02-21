/**
 *
 * Midfooter
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { MidfooterLink } from './components/MidfooterLink';

interface Props {}

export const Midfooter = memo((props: Props) => {
  return (
    <Wrapper>
      <div className="section">
        <Column>
          <Logo />
          <EmailText>
            <EText>Email</EText>
            <MidfooterLink route="/" title="customercare@altmall.ng" />
          </EmailText>
          <AdressText>
            <EText>Address</EText>
            <MidfooterLink route="/" title="01-7000555" />
          </AdressText>
        </Column>
        <Column>
          <FooterHeadingText>ABOUT ALTMALL</FooterHeadingText>
          <TopTextFrame>
            <MidfooterLink route="/company/about-us" title="About Us" />
          </TopTextFrame>
          <TextFrames>
            <MidfooterLink route="/" title="Sell With Us" />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/advertise"
              title="Advertise on Altmall"
            />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/privacy-policy"
              title="Privacy Policy"
            />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/payment-options"
              title="Payment Options"
            />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/T&amp;C"
              title="Terms &amp; Conditions"
            />
          </TextFrames>
        </Column>
      </div>
      <div className="section">
        <Column>
          <FooterHeadingText>RESOURCES</FooterHeadingText>
          <TopTextFrame>
            <MidfooterLink route="/" title="Altmall Forms" />
          </TopTextFrame>
          <TextFrames>
            <MidfooterLink route="/" title="Pay with Altmall" />
          </TextFrames>
          <TextFrames>
            <MidfooterLink route="/" title="ALtscore" />
          </TextFrames>
          <TextFrames>
            <MidfooterLink route="/" title="Raise a Ticket" />
          </TextFrames>
        </Column>
        <Column>
          <FooterHeadingText>CUSTOMER SERVICE</FooterHeadingText>
          <TopTextFrame>
            <MidfooterLink route="/" title="Your Account" />
          </TopTextFrame>
          <TextFrames>
            <MidfooterLink route="/" title="Your Orders" />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/returns/policy"
              title="Return / Replacements"
            />
          </TextFrames>
          <TextFrames>
            <MidfooterLink
              route="/company/delivery"
              title="Delivery Information"
            />
          </TextFrames>
          <TextFrames>
            <MidfooterLink route="/" title="Contact Us" />
          </TextFrames>
          <TextFrames>
            <MidfooterLink route="/" title="FAQs" />
          </TextFrames>
        </Column>
      </div>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
  }

  ${customMedia.lessThan('large')`
    .section {
      width: 100%;
    }
  `};
`;

const Logo = styled.div`
  height: 39px;
  width: 150px;
  left: 0px;
  top: 0px;
  background-repeat: no-repeat;
  border: none;
  text-decoration: none;
  background-image: ${p => p.theme.color.logoImg};
`;

const Column = styled.div`
  margin-top: 53px;
`;

const EmailText = styled.div`
  margin-top: 21px;
  width: 225px;
  height: 50px;
  /* border: 1px solid yellow; */
`;

const EText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${p => p.theme.color.colorText};
  font-weight: 700;
`;

const AdressText = styled.div`
  margin-top: 10px;
  width: 225px;
  height: 50px;
  /* border: 1px solid yellow; */
`;

const FooterHeadingText = styled.p`
  font-style: normal;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  /* width: 145px; */
`;

const TopTextFrame = styled.div`
  margin-top: 28px;
  width: 190px;
  height: 25px;
  /* border: 1px solid blue; */
`;

const TextFrames = styled.div`
  margin-top: 16px;
  width: 186px;
  height: 25px;
  /* border: 1px solid blue; */
`;
