import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import heroBgImage from '../assets/FAQ.png';
//import { P } from '../../../components/Typography/P/P';

export default function HeroArea() {
  return (
    <Container>
      <div>
        <Heading>Welcome Oluwaseun, how can we help you?</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${heroBgImage});
  background-size: contain;
  background-size: cover;

  div {
    text-align: center;
    width: 86%;
    margin: 0 auto;
    padding-top: 5rem;
    ${customMedia.greaterThan('medium')`
    width: 50%;
  `};
  }
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: ${p => p.theme.color.colorTextBlack};
`;

const Paragraph = styled.p`
  color: #646777;
  font-size: 14px;
  line-height: 130%;
`;
