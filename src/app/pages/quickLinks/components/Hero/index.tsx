import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
// import { customMedia } from 'styles/media';
import heroBgImage from '../../assets/Background.png';
//import { P } from '../../../components/Typography/P/P';

interface Props {
  title: string;
}

export default function Hero({ title }: Props) {
  return (
    <Container>
      <div>
        <Heading>{title}</Heading>
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
    padding-top: 10rem;
  }
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: ${StyleConstants.COLOR_BLACK};
`;
