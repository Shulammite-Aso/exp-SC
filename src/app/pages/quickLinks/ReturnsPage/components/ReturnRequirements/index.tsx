import React from 'react';
import styled from 'styled-components/macro';

export default function ReturnRequirements() {
  return (
    <Content>
      <h3>Return Requirements</h3>
      <p>To be eligible for a return:</p>
      <br />
      <ul>
        <li>Products must be unused</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Product must have all tags and labels attached.</li>
        <li>Product inserts and accessories must be intact.</li>
        <li>Product must have the receipt or proof of purchase.</li>
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
`;
