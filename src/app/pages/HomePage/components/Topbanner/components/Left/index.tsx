/**
 *
 * Left
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Button } from 'app/components/Button/Button';
import { messages } from './messages';
import { H1 } from 'app/components/Typography/H1/H1';
import { H4 } from 'app/components/Typography/H4/H4';
import image from '../../assets/leftEllispse.png';
import { customMedia } from 'styles/media';

interface Props {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Left = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <Div>
      <Img src={image} alt="Ellispse" />
      <TextFrame>
        <H1>
          <strong>{t(...messages.titlebold())}</strong> {t(...messages.title())}
        </H1>
      </TextFrame>
      <DetailTextWrap>
        <H4>{t(...messages.detail())}</H4>
      </DetailTextWrap>
      <TopbannerButton
        className="btn btn-primary"
        type={props.type}
        onClick={props.onClick}
      >
        Buy Now
      </TopbannerButton>
    </Div>
  );
});

const Div = styled.div`
  display: block;
  width: 50%;
  ${p => p.theme.direction['left']}: 0px;

  ${customMedia.lessThan('medium')`
    flex: none;
 `};
`;

const Img = styled.img`
  height: 300x;
  width: 339px;
  position: absolute;
  left: 381px;

  ${customMedia.lessThan('medium')`
    width: 50%;
 `};
`;

const TextFrame = styled.div`
  width: 543px;
  height: 86px;
  padding: 66px 19px 30px 159px;

  ${H1} {
    width: 100%;
    font-weight: 400;
    color: #dddddd;

    ${customMedia.lessThan('medium')`
    font-size: 37px;
    text-wrap: wrap;
  `};
  }

  ${customMedia.lessThan('medium')`
    padding-left:30px;
    // padding-right: 70px;
    width: 375px;
    height: 130px;
    margin-bottom: 10px;
  `}
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
