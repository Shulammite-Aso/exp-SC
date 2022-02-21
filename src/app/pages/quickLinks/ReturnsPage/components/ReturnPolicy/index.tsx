import React from 'react';
import styled from 'styled-components/macro';

export default function ReturnPolicy() {
  return (
    <Content>
      <h3>Return Policy</h3>
      <p>
        At Altmall, we are 100% committed to your satisfaction therefore if for
        some reason, you are unsatisfied with your purchase(s), you can return
        the product(s) within 7days from delivery date. We will make it as
        painless as possible with free return shipping if claim is valid.
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
  }
`;
