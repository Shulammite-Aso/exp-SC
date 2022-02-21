/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { H3 } from 'app/components/Typography/H3/H3';

// import { messages } from './messages';

interface Props {}

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <HeadText>
        <H3>Social Accounts</H3>
        <p>Use your social media accounts to make it even easier to login </p>
      </HeadText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 63px;
  /* border: 1px solid blue; */
  display: block;
`;

const HeadText = styled.div`
  align-items: center;
  justify-content: center;
  ${H3} {
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 12px;
    text-align: center;
    color: #8a8894;
  }
`;
