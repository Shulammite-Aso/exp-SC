import React from 'react';
import styled from 'styled-components/macro';

export default function SupportChannels() {
  return (
    <Content>
      <h3>Support Channels</h3>
      <p>
        <span>Email :</span> support@altmall.ng{' '}
      </p>
      <p>
        <span>Telephone :</span> 001007000
      </p>
      <p>
        <span>Facebook:</span> @altmall.ng.
      </p>
      <p>
        <span>Twitter :</span> @altmall.ng
      </p>
      <p>
        <span>Instagram :</span> @altmall.ng
      </p>
    </Content>
  );
}

const Content = styled.div`
  ${p => p.theme.direction['padding-left']}: 2.7rem;
  h3 {
    font-weight: bold;
    font-size: 19px;
    line-height: 140%;
    color: ${p => p.theme.color.colorTextBlack};

    margin-bottom: 1.5rem;
  }

  p {
    max-width: 833px;
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 14px;
    padding-bottom: 10px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }
`;
