import React from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
  font-weight: bold;
  font-size: 14px;
  color: ${p => p.theme.color.colorTextLightGray};
  padding-bottom: 15px;
`;
const P = styled.p`
  max-width: 833px;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  padding-bottom: 10px;
`;
const Span = styled.span`
  font-weight: bold;
  font-size: 14px;
`;
const Ul = styled.ul`
  color: ${p => p.theme.color.colorTextLightGray};
  list-style-type: number;
  padding: 0;
  margin-left: 20px;
`;

export const policyChild = (function () {
  return (
    <>
      <P>
        At Altmall, we are 100% committed to your satisfaction therefore if for
        some reason, you are unsatisfied with your purchase(s), you can return
        the product(s) within 7days from delivery date. We will make it as
        painless as possible with free return shipping if claim is valid.{' '}
      </P>
    </>
  );
})();
export const requirementChild = (function () {
  return (
    <>
      <P>To be eligible for a return:</P>
      <br />
      <Ul>
        <li>Products must be unused</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Product must have all tags and labels attached.</li>
        <li>Product inserts and accessories must be intact.</li>
        <li>Product must have the receipt or proof of purchase.</li>
      </Ul>
    </>
  );
})();
export const coveredChild = (function () {
  return (
    <>
      <P>Products under these categories are acceptable for exchange:</P>
      <br />
      <Ul>
        <li>
          <Span>Non-functional:</Span> Product is not operating or in working
          order.
        </li>
        <li>
          <Span>Counterfeit:</Span> Product is an imitation or not genuine.
        </li>
        <li>
          <Span>Wrong:</Span> Product delivered is different from what was
          ordered.
        </li>
        <li>
          <Span>Incomplete :</Span> Missing product parts and accessories.
        </li>
      </Ul>
    </>
  );
})();
export const notCoveredChild = (function () {
  return (
    <>
      <P>
        Please see the conditions our return policy will not be able to provide
        cover for:
      </P>
      <br />
      <Ul>
        <li>Product is not operating or in working order.</li>
        <li>Product is an imitation or not genuine.</li>
        <li>Product delivered is different from what was ordered.</li>
        <li>Missing product parts and accessories.</li>
        <li>Missing product parts and accessories.</li>
        <li>Missing product parts and accessories.</li>
      </Ul>
    </>
  );
})();
export const returnChild = (function () {
  return (
    <>
      <H4>Step 1 : File a Compliant</H4>
      <P>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </P>
      <H4>Step 2 : Retrieval</H4>
      <P>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </P>
      <H4>Step 3 : Validation</H4>
      <P>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </P>
      <H4>Step 4 : Re-delivery</H4>
      <P>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </P>
      <H4>Step 5 : Feedback</H4>
      <P>
        Send an e-mail to support@altmall.ng stating your claim. This should
        include product name, order number and reason for return. Attach an
        image of the product to support your claim.
      </P>
    </>
  );
})();
export const supportChild = (function () {
  return (
    <>
      <P>
        <Span>Email :</Span> support@altmall.ng{' '}
      </P>
      <P>
        <Span>Telephone :</Span> 001007000
      </P>
      <P>
        <Span>Facebook:</Span> @altmall.ng.
      </P>
      <P>
        <Span>Twitter :</Span> @altmall.ng
      </P>
      <P>
        <Span>Instagram :</Span> @altmall.ng
      </P>
    </>
  );
})();
