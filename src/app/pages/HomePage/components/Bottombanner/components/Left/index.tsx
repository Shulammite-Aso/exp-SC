/**
 *
 * Left
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import { customMedia } from 'styles/media';

interface Props {}

export const Left = memo((props: Props) => {
  return (
    <Wrapper>
      <TitleWrap>
        <T1>
          {' '}
          Enjoy <strong>30% Awoof</strong> Off all sneakers from 3rd - 26th of
          Sept
        </T1>
      </TitleWrap>
      <DescWrap>
        <T2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum
          leo non mattis laoreet.
        </T2>
      </DescWrap>
      <TopbannerButton className="btn btn-primary">Buy Now</TopbannerButton>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  width: 60%;
  ${p => p.theme.direction['left']}: 0px;

  ${customMedia.lessThan('medium')`

  flex: none;
  // width:100%
 `};
`;

const TitleWrap = styled.div`
  width: 80%;
  height: 109px;
  padding-left: 80px;
  margin-top: 65px;

  ${customMedia.lessThan('medium')`
    padding-left:30px;
    // padding-right: 70px;
    width: 375px;
    height: 130px;
    margin-bottom: 30px;
  `}
`;

const T1 = styled.p`
  font-size: 37px;
  font-weight: 400;
  line-height: 35.6px;
  color: #dddddd;
  /* color: ${p => p.theme.color.colorText}; */

  ${customMedia.lessThan('medium')`
    font-size: 37px;
    text-wrap: wrap;
  `};
`;

const DescWrap = styled.div`
  height: 67px;
  width: 736px;
  padding-left: 80px;

  ${customMedia.lessThan('medium')`
    padding-left:30px;
    // padding-right: 70px;
    width: 375px;
    height: 54px;
    margin-bottom: 30px;
  `}
`;

const T2 = styled.p`
  font-size: 24px;
  /* padding: 100px 0 0 159px; */
  /* width: 670px; */
  /* text-wrap: wrap; */
  font-weight: 400;
  line-height: 31.44px;
  color: #dddddd;

  ${customMedia.lessThan('medium')`
    font-size: 17px;
    line-height: 23px;
  `}
`;
const TopbannerButton = styled(Button)`
  margin-top: 30px;
  width: 134px;
  height: 60px;
  border-radius: 5px;
  background-color: white !important;
  margin-left: 80px;
  color: rgba(192, 10, 181, 1);

  font: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: none !important;

  ${customMedia.lessThan('medium')`
    margin-left:30px;
    // padding-right: 70px;
    // width: 375px;
    // height: 54px;
    margin-top: 30px;
  `}
`;
