/**
 *
 * ChooseAccount
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/facebook-logo-footer.png';
import insta from '../../assets/insta-logo.png';
import twitter from '../../assets/twitter-logo.png';
import google from '../../assets/google-logo.png';
// import { messages } from './messages';

interface Props {}

export function ChooseAccount(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <ChooseAccountText>
        <p className="choose-text">Choose a different mode of signing up</p>
      </ChooseAccountText>
      <SocialMediaContainer>
        <SocialMediaText>
          <p>Sign in with Social Media</p>
        </SocialMediaText>
        <SocialIconContainer>
          {/* <ul className="social-media-icons"> */}
          <Fb src={facebook} alt="facebook icon" />
          <In src={insta} alt="instagram icon" />
          <Tw src={twitter} alt="twitter icon" />
          <Google src={google} alt="google icon" />
          {/* </ul> */}
        </SocialIconContainer>
      </SocialMediaContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 113px;
  width: 100%;
  /* border: 1px solid green; */
`;

const ChooseAccountText = styled.div`
  height: 54px;
  width: 100%;

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  height: 59px;
  width: 100%;
  justify-content: space-between;
  border-top: 2px solid;
  border-top-color: ${p => p.theme.color.borderBottom};
`;

const SocialMediaText = styled.div`
  p {
    margin-top: 21px;
    font-size: 12px;
    font-weight: 400;
    color: #9d5ea6;
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

const Fb = styled.img`
  flex: 1;
  width: 39px;
  height: 39px;
  margin-left: 30px;
  cursor: pointer;
`;
const Tw = styled.img`
  flex: 1;
  width: 39px;
  height: 39px;
  margin-left: 30px;
  cursor: pointer;
`;
const In = styled.img`
  flex: 1;
  width: 39px;
  height: 39px;
  margin-left: 30px;
  cursor: pointer;
`;
const Google = styled.img`
  flex: 1;
  width: 39px;
  height: 39px;
  margin-left: 30px;
  cursor: pointer;
`;
