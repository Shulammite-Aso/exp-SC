import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Helmet } from 'react-helmet-async';
import { ButtonCta } from 'app/components/ButtonCta';
import HeroArea from './components/HeroArea';
import Sidebar from './components/Sidebar';
import Faq from './components/FAQ';
import RaiseTicket from './components/raiseTickect';
import CategoryCard from './components/CategoryCard';
import BackBtn from './assets/back-btn.png';
import shoppingBag from './assets/shopping bag.svg';
import creditCard from './assets/credit card.svg';
import packageing from './assets/package.svg';
import shoppingCart from './assets/shopping cart.svg';
import truck from './assets/truck.svg';
import briefcase from './assets/briefcase.svg';
import AnswerForCategory, { Props } from './components/AnswerForCategory';
import { useState } from 'react';
import { Search } from 'app/components/Search';

export function FAQPage() {
  const [answerProps, setAnswerProps] = useState<Props | false>(false);
  const showAnswer = function (question, linkUrl, btnText, children) {
    const ForAnswerComponent = {
      question: question,
      linkUrl: linkUrl,
      btnText: btnText,
      children: children,
    };
    setAnswerProps(ForAnswerComponent);
  };
  const child = (function () {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h4>Getting your Digital Record</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{' '}
        </p>
      </>
    );
  })();
  return (
    <>
      <Helmet>
        <title>FAQ Page</title>
        <meta name="description" content="A AltMall FAQ page" />
      </Helmet>
      {/* <RenderFAQpageContentsHere /> */}
      <Wrapper>
        <FirstSection>
          <HeroArea />
          <Category>
            <CategoryCard
              imgUrl={shoppingBag}
              categoryName={'Product'}
              question="Where is my Order?"
              linkUrl="/"
              btnText="Track your order"
              children={child}
              showAnswer={showAnswer}
            />
            <CategoryCard
              imgUrl={creditCard}
              categoryName={'Payments'}
              question="How do i cancel or edit my Orders?"
              linkUrl="/"
              btnText="Your orders"
              children={child}
              showAnswer={showAnswer}
            />
            <CategoryCard
              imgUrl={shoppingCart}
              categoryName={'Orders'}
              question="Where is my Order?"
              linkUrl="/"
              btnText="Track your order"
              children={child}
              showAnswer={showAnswer}
            />
            <CategoryCard
              imgUrl={truck}
              categoryName={'Shipping & Delivery'}
              question="Where is my Order?"
              linkUrl="/"
              btnText="Track your order"
              children={child}
              showAnswer={showAnswer}
            />
            <CategoryCard
              imgUrl={packageing}
              categoryName={'Returns and Exchange'}
              question="Where is my Order?"
              linkUrl="/"
              btnText="Track your order"
              children={child}
              showAnswer={showAnswer}
            />
            <CategoryCard
              imgUrl={briefcase}
              categoryName={'Account'}
              question="Where is my Order?"
              linkUrl="/"
              btnText="Track your order"
              children={child}
              showAnswer={showAnswer}
            />
          </Category>
        </FirstSection>
        <BackBtnAndSearch>
          <img src={BackBtn} alt="go back button" />
          <Search
            placeholder={'search'}
            btnText={'search'}
            submitAction={() => {}}
          />
          <div></div>
        </BackBtnAndSearch>
        <SecondSection>
          <Sidebar />
          <Switch>
            <Route exact path="/faq">
              {answerProps ? (
                <AnswerForCategory
                  question={answerProps.question}
                  linkUrl={answerProps.linkUrl}
                  btnText={answerProps.btnText}
                  children={answerProps.children}
                />
              ) : (
                <Faq />
              )}
            </Route>
            <Route path="/faq/ticket">
              <RaiseTicket />
            </Route>
          </Switch>
          {/*answerProps ? (
            <AnswerForCategory
              question={answerProps.question}
              linkUrl={answerProps.linkUrl}
              btnText={answerProps.btnText}
              children={answerProps.children}
            />
          ) : (
            <Faq />
          )*/}
          <RaiseTickekButton>
            <ButtonCta
              to="/faq/ticket"
              text="Raise a Ticket"
              btStyle="btn-outline-primary"
            />
          </RaiseTickekButton>
        </SecondSection>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
`;

const FirstSection = styled.div`
  position: relative;
  ${customMedia.lessThan('medium')`
  padding-bottom: 18rem;
  `};
`;

const SecondSection = styled.div`
  padding: 0 12px;
  margin-top: 75px;

  ${customMedia.greaterThan('medium')`
  display: flex;
  ${p => p.theme.direction['padding-left']}: 3rem;
  `};
`;

const Category = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  bottom: -80px;

  ${customMedia.lessThan('medium')`
  flex-wrap: wrap;
  top: 240px;
  `};
`;

const RaiseTickekButton = styled.div`
  margin: 2rem auto;
  width: 350px;

  ${customMedia.greaterThan('medium')`
  display: none;
  `};
`;

const BackBtnAndSearch = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 12rem;

  img {
    width: 101px;
    height: 40px;
  }
`;
