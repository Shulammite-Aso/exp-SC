/**
 *
 * Details
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
// import { DetailsDelivery } from '../DetailsDelivery';
import { DetailsDescription } from '../DetailsDescription';
// import { DetailsRating } from '../DetailsRating';
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
  activeTab: number;
}

export function Details({ tabs, activeTab }: Props): JSX.Element {
  // const { t, i18n } = useTranslation();

  const activeItem = tabs[activeTab];
  // console.log(activeItem.title);

  return (
    <Wrapper>
      <div>
        <p className="title-text">{activeItem.title}</p>

        {activeItem.title === 'Description' ? (
          <DetailsDescription tabs={tabs} activeItem={activeItem} />
        ) : (
          ''
        )}

        {/* activeItem.title == "Delivery" ? <DetailsDelivery tabs = {tabs} activeItem = {activeItem}/> : activeItem.title == "Product Ratings (170)" ? <DetailsRating /> */}

        {/* {activeItem.desc != "" ? <p className="p-text">{activeItem.desc}</p> : <DetailsDelivery  />} */}

        {/* {activeItem.titlespan != "" ? <p className="p-text">{activeItem.titlespan}</p> : <DetailsDelivery tabs={tabs} activeTab={1}/>} */}

        {/* // <p className="p-text">{activeItem.desc}</p> */}
        {/* <p className="titlespan">{activeItem.titlespan}</p> */}
      </div>
      <div>
        {/* <span className="rating-img">
          <img src={activeItem.image} alt="rating card"/>
        </span> */}
      </div>
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
