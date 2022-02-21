import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Check } from 'app/assets/icons/success_check.svg';
import { P } from 'app/components/Typography/P/P';
import { H4 } from 'app/components/Typography/H4/H4';
import { Button } from 'app/components/Button/Button';

interface Props {
  title: string;
  subtitle: string;
  to: string;
  buttonText: string;
}

export const ActionSuccess = memo(
  ({ title, subtitle, to, buttonText }: Props) => {
    return (
      <Wrapper>
        <Icon />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>

        <Cta as={Link} to={to} className="btn btn-primary">
          {buttonText}
        </Cta>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 340px;
`;

const Icon = styled(Check)`
  margin: auto;
  width: 60px;
  height: 60px;
`;

const Title = styled(H4)`
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 600;
`;
const SubTitle = styled(P)``;

const Cta = styled(Button)`
  width: 225px;
  margin: auto;
  margin-top: 35px;

  &:last-child {
    margin: auto;
    margin-top: 35px;
  }
`;
