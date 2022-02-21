/**
 *
 * SocialAccounts
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import { Header } from '../SocialAccounts/components/Header';
import { Connect } from '../SocialAccounts/components/Connect';
import { SignedInAccount } from './components/SignedInAccount';
import { ChooseAccount } from './components/ChooseAccount';

interface Props {}

export function SocialAccounts(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      <Helmet>
        <title>Social Accounts </title>
        <meta name="description" content="A AltMall Social Accounts" />
      </Helmet>
      {/* <RenderSocialAccountsContentsHere /> */}
      <Wrapper>
        <Sidebar />
        <Container>
          <Header />
          <Connect />
          <SignedInAccount />
          <ChooseAccount />
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  margin-top: 140px;
  padding-bottom: 100px;

  /* border: 1px solid white; */
`;

const Container = styled.div`
  display: block;
  width: 100%;
  padding-left: 160px;
  padding-right: 241px;
  /* border: 1px solid red; */
`;
