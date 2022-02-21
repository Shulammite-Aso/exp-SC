import React from 'react';
import styled from 'styled-components/macro';

export default function WhatIsCovered() {
  return (
    <Content>
      <h3>What is Covered?</h3>
      <p>Products under these categories are acceptable for exchange:</p>
      <br />
      <ul>
        <li>
          <span>Non-functional:</span> Product is not operating or in working
          order.
        </li>
        <li>
          <span>Counterfeit:</span> Product is an imitation or not genuine.
        </li>
        <li>
          <span>Wrong:</span> Product delivered is different from what was
          ordered.
        </li>
        <li>
          <span>Incomplete :</span> Missing product parts and accessories.
        </li>
      </ul>
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
  }

  ul {
    color: ${p => p.theme.color.colorTextLightGray};
    list-style-type: number;
    padding: 0;
    margin-left: 20px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }
`;
