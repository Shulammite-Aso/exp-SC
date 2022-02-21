/**
 *
 * DetailsDescription
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Data {
  title: string;
  desc: string;
  // titlespan: string;
  image?: string;
  // active: string;
}
interface Props {
  tabs: Data[];
  // activeTab: number;
  activeItem: {};
}

// interface Props{}

export function DetailsDescription({ tabs, activeItem }: Props): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  // const activeItem = tabs[activeTab];

  return (
    <Wrapper>
      <p> Descripton Tab </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70%;
  height: 100%;

  div {
    .title-text {
      font-size: 20px;
      margin-top: 52px;
      font-weight: 700;
      line-height: 24px;
      width: 100%;
    }

    .p-text {
      margin-top: 8px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  span {
    .rating-img {
      height: 18px;
      width: 20%;
    }
  }
`;
