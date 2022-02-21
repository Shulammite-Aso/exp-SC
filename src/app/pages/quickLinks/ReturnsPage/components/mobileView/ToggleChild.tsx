import React, { useState } from 'react';
import styled from 'styled-components/macro';
import openAnswer from '../../assets/open.svg';
import closeAnswer from '../../assets/close.svg';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  heading: string;
  children: JSX.Element;
}

export default function ToggleChild({ heading, children }: Props) {
  const [isMinimized, setIsMinimized] = useState(true);
  const handleContentVisibility = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <Container>
      {isMinimized ? (
        <TheHeading>
          <p>{heading}</p>{' '}
          <img
            src={openAnswer}
            onClick={handleContentVisibility}
            alt="click to toggle the content"
          />
        </TheHeading>
      ) : (
        <div>
          <TheHeading>
            <p>{heading}</p>{' '}
            <img
              src={closeAnswer}
              onClick={handleContentVisibility}
              alt="click to toggle the content"
            />
          </TheHeading>
          <Children>{children}</Children>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 1.6rem 1.438rem;
  margin: 0 auto;
  width: 100%;
`;

const TheHeading = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #bdbcdb;
    padding-bottom: 14px;
  }
  img {
    width: 20px;
    cursor: pointer;
    &:hover {
      color: ${StyleConstants.COLOR_ACCENT_HOVER};

      path {
        stroke: ${StyleConstants.COLOR_ACCENT_HOVER};
      }
    }
  }
`;

const Children = styled.div`
  margin-top: 14px;
  h4 {
    font-weight: bold;
    font-size: 19px;
    line-height: 140%;
    color: ${p => p.theme.color.colorTextBlack};

    margin-bottom: 1.5rem;
  }

  p {
    max-width: 833px;
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 14px;
  }
`;
