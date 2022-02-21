import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function StarRating({ rating }) {
  const ratingArr: Array<any> = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) ratingArr.push(true);
    else ratingArr.push(false);
  }

  return (
    <Wrapper>
      {ratingArr.map(rate => {
        if (rate) return <RatedStar />;
        else return <NoneRatedStar />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: max-content;
  margin-right: 10px;
`;
const RatedStar = styled(FaStar)`
  /* color: ${StyleConstants.COLOR_ACCENT}; */
  color: #ffb82e;
`;

const NoneRatedStar = styled(FaRegStar)`
  /* color: ${StyleConstants.COLOR_ACCENT}; */
  color: #ffb82e;
`;
