import React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import cancelIcon from '../../assets/cancel-icon.svg';
import logo from '../../assets/logo-for-mobile.svg';
import hiddenPassword from '../../assets/hidden-password.svg';
import { customMedia } from 'styles/media';
import { H4 } from 'app/components/Typography/H4/H4';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function EnterPassword({
  setShowEnterPassword,
  showEnterPassword,
  handlePasswordVerification,
  handleUserPassordOnchange,
}) {
  const { t } = useTranslation();

  //const [textType, setTextType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Card>
        <div
          onClick={e => setShowEnterPassword(!showEnterPassword)}
          className="cancel_icon"
        >
          <img src={cancelIcon} alt="close" />
        </div>
        <img className="logo" src={logo} alt="logo" />
        <Heading>{t(...messages.passwordToMakeUpdate())}</Heading>
        <p>oluwaseunakkande@gmail.com</p>

        <form action="">
          <input
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleUserPassordOnchange}
          />

          <div
            className="hide_or_show"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={hiddenPassword} alt="hide or show password" />
          </div>
          <div className="button_container">
            <ContinueButton
              className="btn btn-primary"
              onClick={handlePasswordVerification}
            >
              Continue
            </ContinueButton>
          </div>
        </form>
        <div>
          <p>Not you?</p>
          <p>
            <a href="/">Use a different email</a> or{' '}
            <a href="/">create a new account</a>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export function EnterVerificationCode({
  handleOTPOnchange,
  verifyOTP,
  onEmailSubmit,
}) {
  const { t } = useTranslation();

  return (
    <Container>
      <Card>
        <div className="btn btn-primary">
          <img src={cancelIcon} alt="close" />
        </div>
        <img className="logo" src={logo} alt="logo" />
        <div className="sentCode">
          <p>{t(...messages.sentCode())}</p>
          <p>oluwaseunakkande@gmail.com</p>
        </div>
        <form action="">
          <input
            placeholder="Enter Verification Code"
            type="text"
            onChange={handleOTPOnchange}
          />

          <div className="button_container">
            <ActionButtons>
              <ContinueButton className="btn btn-primary" onClick={verifyOTP}>
                Save
              </ContinueButton>
            </ActionButtons>
          </div>
        </form>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  border-radius: 20px;
  text-align: center;
  width: 80%;
  max-width: 560px;
  margin: 8.5rem auto;
  padding: 5rem 3rem;
  position: relative;

  ${customMedia.lessThan('small')`
  
  padding: 3rem 0.8rem;
  `};

  .cancel_icon {
    cursor: pointer;
    width: 25px;
    position: absolute;
    right: 17px;
    top: 15px;
  }

  .logo {
    width: 88px;
  }

  .sentCode {
    margin-top: 3rem;
    p {
      color: ${p => p.theme.color.colorTextBold};
      font-size: 14px;
      line-height: 130%;
    }
  }

  form {
    padding: 2rem 0 3rem 0;
    input {
      background: #f7f7fd;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      border: none;
      //display: inline-block;
      margin-bottom: 1rem;
      outline: none;
      padding: 1.1rem 0.7rem;
      width: 80%;
    }

    .didntGetCode {
      display: inline-block;
      text-align: left;

      p {
        color: ${p => p.theme.color.colorTextBold};
        font-size: 14px;
        line-height: 130%;
      }

      span {
        color: #c00ab5;
        font-size: 14px;
        line-height: 130%;
      }
    }

    .hide_or_show {
      background: #f7f7fd;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      display: inline-block;
      padding: 0.91rem 0.7rem;
      cursor: pointer;
    }

    .button_container {
      // display: inline-block;
    }
  }

  a {
    color: ${p => p.theme.color.colorTextBold};
  }
`;

const ContinueButton = styled(Button)`
  width: 35%;
  margin: 0 auto !important;

  ${customMedia.lessThan('xsm')`
  width: 100%;
  `};
`;

const ActionButtons = styled.div`
  display: inline-block;
  margin-top: 2rem;
  // text-align: center;
`;

const Heading = styled(H4)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 1.8rem;
`;
