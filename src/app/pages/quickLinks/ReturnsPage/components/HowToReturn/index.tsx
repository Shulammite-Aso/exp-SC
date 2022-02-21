import React from 'react';
import styled from 'styled-components/macro';

export default function HowToReturn() {
  return (
    <Content>
      <h3>How to Return</h3>
      <h4>Step 1 : File a Compliant</h4>
      <p>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </p>
      <h4>Step 2 : Retrieval</h4>
      <p>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </p>
      <h4>Step 3 : Validation</h4>
      <p>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </p>
      <h4>Step 4 : Re-delivery</h4>
      <p>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </p>
      <h4>Step 5 : Feedback</h4>
      <p>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
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
    padding-bottom: 15px;
  }

  h4 {
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 15px;
  }
`;
