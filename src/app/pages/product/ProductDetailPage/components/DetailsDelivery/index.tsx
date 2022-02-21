/**
 *
 * DetailsDelivery
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Data {
  title: string;
  desc: string;
  titlespan: string;
  image?: string;
  // active: string;
}
interface Props {
  tabs: Data[];
  // activeTab: number;
  activeItem: {};
}

// interface Props{}

export function DetailsDelivery({ tabs, activeItem }: Props): JSX.Element {
  // const { t, i18n } = useTranslation();

  // const activeItem = tabs[activeTab];

  return (
    <Wrapper>
      <div>
        {/* <p className="title-text">{activeItem.title}</p> */}
        <p>Delivery Component Lorem </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
