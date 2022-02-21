/**
 *
 * ComingSoon
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { H3 } from 'app/components/Typography/H3/H3';
import image from './assets/bro.svg';
import { customMedia } from 'styles/media';

export function ComingSoon() {
  return (
    <Wrapper>
      <div>
        <Card>
          <img src={image} alt="coming soon" />
          <Title>Coming Soon</Title>
          <Text>
            This Feature is presently not available, please click on the Notify
            Me Button to get an email when app feature has been updated.
          </Text>
        </Card>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(15, 6, 39, 0.4);
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  border-radius: 30px;
  width: 80%;
  max-width: 600px;
  text-align: center;
  padding: 4rem;
  margin: auto;
  margin-top: 7rem;

  img {
    width: 286.91px;
    height: 303.23px;
  }

  ${customMedia.lessThan('xmedium')`
  padding: 3rem;
  margin-top: 9rem;
  `};
`;

const Title = styled(H3)`
  color: #212121;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  margin: 1rem 0;
`;

const Text = styled.p`
  color: #000000;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
`;
