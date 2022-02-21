/**
 *
 * SignedInAccount
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export function SignedInAccount(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <UserText>
        <p className="user-name">Akande Oluwaseun</p>
      </UserText>
      <p>You are using this account to sign in</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 144px;
  width: 100%;
  border-top: 2px solid;
  border-top-color: rgba(248, 245, 245, 0.06);

  p {
    font-size: 14px;
    margin-top: 12px;
    width: 100%;
    line-height: 22px;
    font-weight: 400;
  }
`;

const UserText = styled.div`
  width: 100%;
  height: 25px;
  top: 480px;
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;
