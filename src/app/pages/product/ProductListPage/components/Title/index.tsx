import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Link } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
export function Title() {
  return (
    <Wrapper>
      <TitleItems>
        <TitleLinks to="/">Home</TitleLinks>
      </TitleItems>
      <TitleItems>
        <Seperator />
        <TitleLinks to="/products/:category">Electronics</TitleLinks>
      </TitleItems>
      <TitleItems>
        <Seperator />
        <TitleLinks to="/products/:category/:subcategory">Cameras</TitleLinks>
      </TitleItems>
      <TitleItems>
        <Seperator />
        <TitleLinks to="#">Canon</TitleLinks>
      </TitleItems>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 30px;
  font-size: 17px;
  ${customMedia.lessThan('medium')`
    padding: 0 20px;
    font-size: 16px;
  `}
  ${customMedia.lessThan('small')`
    padding: 0 20px;
    font-size: 14px;
    height: 40px;
  `}
`;
const TitleItems = styled.li`
  background: transparent;
  margin-right: 15px;
  display: flex;
  align-items: center;
  &:last-child {
    span {
      background-color:${StyleConstants.COLOR_ACCENT}; blue;
    }
    a {
      color: ${StyleConstants.COLOR_ACCENT};
    }
  }
`;
const Seperator = styled.span`
  display: block;
  background-color: white;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  margin-right: 15px;
`;
const TitleLinks = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.color.colorText};
  &:hover {
    color: ${StyleConstants.COLOR_ACCENT};
  }
`;
