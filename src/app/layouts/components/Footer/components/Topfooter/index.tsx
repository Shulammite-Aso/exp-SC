/**
 *
 * Topfooter
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import mail from '../../assets/mail.svg';

interface Props {}

export const Topfooter = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Div>
      <Left>
        <T1>Subscribe To Our Newsletter</T1>
        <T2>Get all the latest information on Events, Sales and Offers.</T2>
      </Left>
      <Right>
        <form action="">
          <FormArea>
            <img src={mail} alt="envelop icon" />
            <input type="email" placeholder="Enter your email" />
          </FormArea>
        </form>
        <MailBtn className="btn btn-primary">Subscribe</MailBtn>
      </Right>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${customMedia.lessThan('medium')`
  display: flex;
  flex-direction: column-reverse;
 `};
`;

export const Left = styled.div`
  margin-top: 2px;
  ${p => p.theme.direction['margin-right']}: 2rem;

  ${customMedia.lessThan('medium')`
    width: 100%;
    padding-left: 15px;
    
 `};
`;

const T1 = styled.p`
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
  color: ${p => p.theme.color.colorText};
`;

const T2 = styled.p`
  font-size: 14px;
  line-height: 19px;
  margin-top: 6px;
  inline-size: 200px;
  overflow-wrap: latest;
  font-weight: normal;
  color: #90969a;
`;

const Right = styled.div`
  display: flex;
  margin-bottom: 2rem;

  ${customMedia.lessThan('medium')`
    flex-wrap: wrap;

    form {
      width: 94%;
    }
 `};
`;

const FormArea = styled.div`
  background: #ffffff;
  border: 1.01744px solid rgba(157, 94, 166, 0.38);
  box-sizing: border-box;
  border-radius: 4.88372px;
  padding: 0.5rem;
  min-width: 450px;
  margin-bottom: 0.7rem;

  ${customMedia.lessThan('medium')`
  min-width: 70%;
`}

  img {
    ${p => p.theme.direction['margin-right']}: 0.4rem;
    width: 24.42px;
  }

  input {
    border: none;
    width: 80%;

    &:focus,
    &:active {
      outline: none;
    }

    &::placeholder {
      color: #cac1c1;
    }
  }
`;

const MailBtn = styled(Button)`
  margin-bottom: 0.7rem;
  ${p => p.theme.direction['margin-left']}: 0.4rem;
  height: 43px;
  width: 150px;

  ${customMedia.lessThan('medium')`
  ${p => p.theme.direction['margin-left']}: 0;
    width: 94%;
    border: 1px solid black;
    font-size: 16px;
  `}
`;
