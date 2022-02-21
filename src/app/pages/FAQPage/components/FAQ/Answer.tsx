import React, { useState } from 'react';
import styled from 'styled-components/macro';
import openAnswer from '../../assets/open.svg';
import closeAnswer from '../../assets/close.svg';

interface Props {
  question: string;
  children: JSX.Element;
}

export default function Answer({ question, children }: Props) {
  const [isMinimized, setIsMinimized] = useState(true);
  const openOrCloseAnswer = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <Container>
      {isMinimized ? (
        <TheQuestion>
          <p>{question}</p>{' '}
          <img
            src={openAnswer}
            onClick={openOrCloseAnswer}
            alt="click to open answer"
          />
        </TheQuestion>
      ) : (
        <div>
          <TheQuestion>
            <p>{question}</p>{' '}
            <img
              src={closeAnswer}
              onClick={openOrCloseAnswer}
              alt="click to open answer"
            />
          </TheQuestion>
          <Children>{children}</Children>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #bdbcdb;
  padding: 1.6rem 0;
`;

const TheQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 20px;
    cursor: pointer;
  }
`;

const Children = styled.div`
  p {
    font-size: 14px;
    line-height: 130%;
    padding: 5px 0;
  }
  h4 {
    font-size: 18px;
    line-height: 140%;
    color: ${p => p.theme.color.colorTextBold};
    padding: 5px 0;
  }
`;
