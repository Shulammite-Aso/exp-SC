import React from 'react';
import { H4 } from 'app/components/Typography/H4/H4';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from '../../../../app/components/Button/Button';

export interface Props {
  question: string;
  linkUrl: string;
  btnText: string;
  children: JSX.Element;
}

export default function AnswerForCategory({
  question,
  linkUrl,
  btnText,
  children,
}: Props) {
  return (
    <Container>
      <Heading>{question}</Heading>
      <ActionButton className="btn btn-primary">
        <a href={linkUrl}>{btnText}</a>
      </ActionButton>
      <Children>{children}</Children>
      <MiniContainer>
        <h4>Was this answer helpful?</h4>
        <OptionButton>Yes</OptionButton>
        <OptionButton>No</OptionButton>
      </MiniContainer>
      <MiniContainer>
        <h4>Related help topics</h4>
        <ul>
          <li>Lorem ipsum dolor sit ipsum</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </MiniContainer>
      <MiniContainer>
        <h4>Didn't find what you are looking for?</h4>
        <ActionButton className="btn btn-primary">
          <a href="/">Contact Us</a>
        </ActionButton>
      </MiniContainer>
    </Container>
  );
}

const Container = styled.div`
  ${customMedia.greaterThan('medium')`
${p => p.theme.direction['margin-left']}: 5rem;
width: 60%;
`};
`;

const Heading = styled(H4)`
  font-weight: bold;
  line-height: 120%;
  color: ${p => p.theme.color.colorTextBold};
  padding: 1.6rem 0 0.5rem 0;
`;

const ActionButton = styled(Button)`
  a {
    color: white;
    text-decoration: none;
  }
`;

const OptionButton = styled.button`
  background-color: white;
  color: #c00ab5;
  border: 1px solid #c00ab5;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  ${p => p.theme.direction['margin-right']}: 1rem;
`;

const Children = styled.div`
  padding: 1rem 0;
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

const MiniContainer = styled.div`
  border-top: 1px solid #bdbcdb;
  padding: 1rem 0;
  p,
  li {
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
