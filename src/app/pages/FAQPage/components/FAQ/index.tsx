import React from 'react';
import Answer from './Answer';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { H4 } from 'app/components/Typography/H4/H4';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();

  const children = {
    product: (
      <>
        <h4> I saw a product I like; how do I buy now and pay later?</h4>
        <p>
          <ul>
            <li>Visit www.altmall.ng.</li>
            <li>Search for the product using the search button, </li>
            <li>
              Add the product to cart (Note, you can add as many items as you
              want) and click check out.{' '}
            </li>
            <li>Register with your email and password. </li>
            <li>
              Fill in your personal information and shipping address and select
              your shipping agent.{' '}
            </li>
            <li>
              Click the 'pay later' option (if you want to spread payment) and
              place your order.{' '}
            </li>
            <li>
              You would be redirected to select the number of months you would
              like to spread payment for. This will them show the amount to
              payback monthly.{' '}
            </li>
            <li>
              Generate your last six (6) months bank statement to get a ticket
              ID & password. You would be redirected to open an Alternative
              Finance account. Do this and submit your application.{' '}
            </li>
          </ul>
        </p>
        <h4>I do not find the product I want on the website.</h4>
        <p>
          You can send us a message on our social media channels with the
          specifications of the item(s) you want so we can confirm availability.
          Also, you can provide a proforma invoice from another vendor for us to
          review and finance if approved.{' '}
        </p>

        <h4>How can I get more product information</h4>
        <p>
          All products have detailed product description. However, to request
          for additional information, kindly contact our customer care team on
          01-7000555 to assist{' '}
        </p>

        <h4>How can I bargain for a reduced product price</h4>
        <p>The prices on each product page are fixed and non-negotiable. </p>
      </>
    ),
    payWithAltFinance: (
      <>
        <h4>Can I purchase another item while repaying for a current one? </h4>
        <p>
          Yes, you can because we are generous like that😊 You can purchase
          another item while repaying for a previous facility, however, this is
          subject to your facility coverage ratio
        </p>
        <h4>What is the maximum repayment duration?</h4>
        <p>
          The maximum repayment duration is 12 months with a mark-up of 14%. You
          can however, enjoy lower mark-up rates for shorter tenor. Please see
          below: 3 months – 4% 4-6 months – 9% 7-12 month – 14%
        </p>
        <h4>I have an error message Wrong Period Start and End date</h4>
        <p>
          You need to ensure the start and end date of the statement you are
          inputting is within an immediate last 6-month period. For example, 1
          May 2021 – 31 October 2021.{' '}
        </p>
        <h4>Do we give out loans?</h4>
        <p>No, we do not give out loans, we only provide products financing.</p>
        <h4>Can I combine two different bank account statement?</h4>
        <p>No, you cannot combine two different bank account statement.</p>
        <h4>Why do you request my BVN?</h4>
        <p>
          We request this to confirm your bank details. Kindly note that your
          BVN does not give us direct access to your account – it only serves to
          identify you as a banked individual.
        </p>
        <h4>
          Can I do a down part payment and spread the remaining over 3-12
          months?
        </h4>
        <p>
          Yes, you can do an initial payment then spread the remaining over the
          months. To do this, kindly fill our Altmall form with the details as
          seen on the website, then send us a mail to customercare@altmall.ng
          specifying how much of the total cost you want to pay off.
        </p>
        <h4>How do I know when my application has been approved?</h4>
        <p>
          An email will be sent to you once your application has been approved
          with the next steps.
        </p>
        <h4>I am yet to get feedback on my application status.</h4>
        <p>
          We sincerely apologise for the delay and are working to provide
          feedback quickly. You can send us a message or email to confirm what
          may have caused a delay.{' '}
        </p>
        <h4>I am having troubles with creating my SAF current account.</h4>
        <p>
          We apologise you are experiencing this. Kindly, contact us to assist
          you with the account opening process.
        </p>
        <h4>What duration do I put on my Remita application?</h4>
        <p> Kindly enter the same duration on your approval email.</p>
        <h4>
          I do not see Keystone, First Bank or Stanbic IBTC while trying to
          initiate a Remita mandate.
        </h4>
        <p>
          Kindly contact us to send you an offline form as these banks do not
          allow Remita mandate initiation.
        </p>
        <h4>Remita does not debit me on the expected date.</h4>
        <p>Kindly contact us to assist you with this.</p>
        <h4>I did not get a ticket ID. Why?</h4>
        <p>
          If you have a Guaranty Trust Bank (GTB) or Zenith Bank account, you
          will need to log into your GT world app or Zenith mobile app
          respectively to generate your bank statement, selecting Sterling as
          third party. Once you do this, you will receive a ticket ID and
          password. Secondly, you could be experiencing network issues; you can
          change your browser or try again later.{' '}
        </p>
        <h4>Will I have to make an initial payment before I get my item(s)?</h4>
        <p>
          No, you do not. Your item(s) will be delivered before your first
          payment. However, shipping fee applies and is determined by your
          location and item weight.{' '}
        </p>
        <h4>Can I pay in full earlier than when I selected?</h4>
        <p>
          Yes, of course. You can choose to liquidate once you have the funds to
          pay off your AltMall facility.
        </p>
      </>
    ),
    order: (
      <>
        <h4>How long would it take before I receive my order? </h4>
        <p>
          Once your application is approved, it takes 3 – 5 working days to
          deliver depending on the location. (It takes 3-5 working days to
          deliver after initiation){' '}
        </p>
        <h4>When do I get my item(s)?</h4>
        <p>
          Your item(s) will be delivered once your application has been approved
          before your first installment payment.
        </p>
        <h4>How do I cancel my order? </h4>
        <p>
          To cancel your order, kindly let us know by sending us an email at
          customercare@altmall.ng.{' '}
        </p>
        <h4>Can I buy the same product again?</h4>
        <p>
          Yes you can. Simply click on the buy again button on the order details
          page. Please note that product price may have changed.
        </p>
        <h4>How do I track my order?</h4>
        <p>
          Kindly input your order number in the search field on the track order
          page
        </p>
        <h4> My item was delivered with a broken seal.</h4>
        <p>
          Please send us an email immediately with images of the item as
          received.
        </p>
      </>
    ),
    shipping: (
      <>
        <h4>Can I request to pick up my item by myself?</h4>
        <p>
          Yes, you can request to pick up your item. Simply send an email to
          customercare@altmall.ng with full details of your purchase order.{' '}
        </p>
        <h4>I am outside Lagos, can I apply for Altmall financing?</h4>
        <p>Yes you can. Altmall delivers to any state within Nigeria.</p>
        <h4>Is delivery free?</h4>
        <p>
          No, delivery is not free. The total cost of delivery will be
          communicated to you during the application process.
        </p>
      </>
    ),
    returnsAndExchange: (
      <>
        <h4>How do I request a return?</h4>
        <p>Send a mail to customercare@altmall.ng to initiate return</p>
        <h4>What information should I send via mail?</h4>
        <p>
          The product name, order number, reason for return and a picture of the
          product
        </p>
        <h4>
          I have sent a mail to initiate a return, when will I get a feedback?
        </h4>
        <p>You will be contacted within 48hours</p>
        <h4>My item has been picked for return, when can I get an exchange?</h4>
        <p>
          Once we receive your return and validate, exchange or repair will be
          processed within 7 working days
        </p>
        <h4>What type of item can I return?</h4>
        <p>Defective item, Counterfeit item, Wrong item, incomplete item</p>
        <h4>Who pays for the shipping fee of my return?</h4>
        <p>
          If the reason for return cannot be validated, shipping fee will be
          paid by you, if validated, shipping fee will be paid by the vendor
        </p>
        <h4>Should I return all the products in my order?</h4>
        <p>No, you can select the product for return from your order</p>
        <h4>How do I know the status of my return?</h4>
        <p>We will send a mail updating you on the status</p>
        <h4>Why was my item not scheduled for exchange or repair?</h4>
        <p>
          If the reason for return cannot be validated, exchange or repair will
          not be processed
        </p>
        <h4>Can I return an item after the stated timeline?</h4>
        <p>
          No, Altmall offers a 7 Day return policy. Items that exceed this
          timeline are not eligible for return
        </p>
        <h4>
          I cannot find the original packaging of my item; can I return it?
        </h4>
        <p>
          No, items should be placed in its original packing. Without this, your
          return claim will be invalid
        </p>
      </>
    ),
    account: (
      <>
        <h4>I am having issues with my online application. What can I do? </h4>
        <p>
          You can apply using the offline form. Simply visit www.altmall.ng
          scroll to the bottom of the home page, click on 'Altmall form' and
          fill in all details. You can also call our customer care team on
          01-7000555 to assist
        </p>
        <h4>
          Must I have a Sterling Bank or Alternative Finance account to apply?
        </h4>
        <p>
          Absolutely not! You only need to provide us with your most active bank
          account statement to enable us to review and confirm your eligibility.
        </p>
        <h4>
          Do I need an Alternative Finance current account before I can buy on
          Altmall?
        </h4>
        <p>
          No, you do not need a current account before you start the application
          process. You are only required to create an Alternative Finance
          current account if your application is approved for financing.{' '}
        </p>
        <h4>Where is your physical location situated?</h4>
        <p>
          We do not have a physical location; we are an online e-commerce
          business.
        </p>
        <h4>
          Do I need to be a Sterling Customer to access the Altmall facility?
        </h4>
        <p>
          No, you do not need to have an account with Sterling Bank to access
          the Altmall facility. You can provide any statement from any bank for
          the application process.
        </p>
        <h4>How do I contact you?</h4>
        <p>
          You can call us on 01-7000555, send us an email at
          customercare@altmall.ng or a message on our social media pages.
        </p>
        <h4>How do I use my voucher/coupon code? </h4>
        <p>
          {' '}
          Kindly input your voucher code in the voucher field provided to redeem
          discount
        </p>
        <h4>I do not have a referral code; how do I register on Altmall? </h4>
        <p>Please ignore and continue with the registration process. </p>
      </>
    ),
  };

  return (
    <Container>
      <Heading>{t(...messages.title())}</Heading>
      <Answer question="PRODUCT" children={children.product} />
      <Answer
        question="PAY WITH ALTERNATIVE FINANCE"
        children={children.payWithAltFinance}
      />
      <Answer question="ORDER" children={children.order} />
      <Answer question="SHIPPING" children={children.shipping} />
      <Answer
        question="RETURNS & EXCHANGE"
        children={children.returnsAndExchange}
      />
      <Answer question="ACCOUNT" children={children.account} />
    </Container>
  );
}

const Container = styled.div`
  ${customMedia.greaterThan('medium')`
  ${p => p.theme.direction['margin-left']}: 5rem;
  width: 60%;
  `};
`;

const Heading = styled(H4)`
  border-bottom: 1px solid #bdbcdb;
  font-weight: bold;
  line-height: 120%;
  color: ${p => p.theme.color.colorTextBold};
  padding: 2rem 0;
`;
