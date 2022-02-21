import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {
  imgUrl: string;
  categoryName: string;
  question: string;
  linkUrl: string;
  btnText: string;
  children: JSX.Element;
  showAnswer: any;
}

export default function CategoryCard({
  imgUrl,
  categoryName,
  question,
  linkUrl,
  btnText,
  children,
  showAnswer,
}: Props) {
  return (
    <Card
      onClick={() => {
        showAnswer(question, linkUrl, btnText, children);
      }}
    >
      <div>
        <img src={imgUrl} alt={categoryName} />
        <p>{categoryName}</p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 13.5847px 20.377px rgba(142, 141, 208, 0.12);
  border-radius: 16.9809px;
  cursor: pointer;
  width: 15%;
  padding: 3rem 0;
  ${customMedia.lessThan('medium')`
  margin-bottom: 1rem;
  width: 162px;
  `};

  div {
    margin: 0 auto;
    text-align: center;
    img {
      width: 42px;
    }

    p {
      color: ${p => p.theme.color.colorTextBlack};
      font-weight: bold;
      font-size: 12px;
      line-height: 120%;
      margin-top: 0.5rem;
    }
  }
`;
