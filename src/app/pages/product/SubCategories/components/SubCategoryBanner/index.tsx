/**
 *
 * SubCategoryBanner
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import { H4 } from 'app/components/Typography/H4/H4';
import { customMedia } from 'styles/media';

interface Props {}

export const SubCategoryBanner = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Wrapper>
      <Left>
        <TextFrame>
          <T1>
            {' '}
            <strong>Get 30%</strong> Off the Iphone 12pro
          </T1>
        </TextFrame>
        <DetailTextWrap>
          <H4>
            iPhone 12. Beautifully bright 6.1-inch Super Retina XDR display.
          </H4>
        </DetailTextWrap>

        <TopbannerButton className="btn btn-primary">Buy Now</TopbannerButton>
      </Left>
      <Right>
        <RightImage />
      </Right>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  height: 434px;
  flex-direction: row;
  max-width: 100%;

  background-color: rgba(64, 3, 60, 1);
  background-image: ${p => p.theme.color.SubCategoryRectangle};

  ${customMedia.lessThan('small')` 
    width: 100%;
  `}
`;

const Left = styled.div`
  position: absolute;
  display: block;
  /* height: 100%; */
  width: 50%;
  ${p => p.theme.direction['left']}: 0px;

  ${customMedia.lessThan('small')`
    flex: none;
 `};
`;

const TextFrame = styled.div`
  width: 543px;
  height: 86px;
  padding: 66px 19px 30px 159px;
  ${customMedia.lessThan('medium')`
    padding-left:30px;
    // padding-right: 70px;
    width: 375px;
    height: 130px;
    margin-bottom: 10px;
  `}
`;

const T1 = styled.p`
  width: 776px;
  width: 90%;
  height: 86px;
  font-size: 38px;
  font-weight: 400;
  line-height: 45.6px;
  color: #fff;
`;

const DetailTextWrap = styled.div`
  font-size: 24px;
  padding: 80px 0 0 159px;
  width: 670px;

  ${H4} {
    font-weight: 400;
    font-size: 24px;
    line-height: 31.44px;
    color: #dddddd;
    /* color: ${p => p.theme.color.colorText}; */

    ${customMedia.lessThan('medium')`
    font-size: 17px;
    line-height: 23px;
  `}
  }

  ${customMedia.lessThan('medium')`
    padding-left:30px;
    // padding-right: 70px;
    width: 375px;
    height: 54px;
    margin-top: 10px;
  `}
`;

const TopbannerButton = styled(Button)`
  margin-top: 30px;
  width: 134px;
  height: 60px;
  border-radius: 5px;
  background-color: white !important;
  margin-left: 159px;
  color: rgba(192, 10, 181, 1);

  font: 16px;
  font-weight: 400;
  line-height: 20px;
  transition: none !important;

  ${customMedia.lessThan('medium')`
    margin-left:30px;
    margin-top: 70px;
  `}
`;

const Right = styled.div`
  display: flex;
  /* position: absolute; */
  width: 40%;
  /* border: 1px solid black; */
  margin-left: 60%;
  ${p => p.theme.direction['right']}: 0px;
  ${customMedia.lessThan('medium')`

  // flex: none;
  width:100%
  // height: 384px;

 `};
`;

const RightImage = styled.div`
  position: relative;
  width: 672px;
  height: 100%;
  margin-top: 15px;
  z-index: 9;
  margin-left: -20%;
  background-image: ${p => p.theme.color.SubCategoriesBanner};
  background-repeat: no-repeat;

  ${customMedia.lessThan('medium')`

  width:200%;

 `};
`;
