import React, { useState, useEffect } from 'react';
import CheckIcon from './assets/check.svg';
import InfoIcon from './assets/info.svg';
import ErrorIcon from './assets/error.svg';
import TimesIcon from './assets/x.svg';
import { useDispatch } from 'react-redux';
import { keyframes } from 'styled-components';

// import { BiError } from 'react-icon/bi';
import styled from 'styled-components';
import { useAuthSlice } from '../../pages/auth/slice/index';

const Notifications = ({ type, full = true, message }) => {
  const [state, setState] = useState({ visible: true });
  const dispatch = useDispatch();
  const { actions } = useAuthSlice();

  const onDismiss = () => {
    setState({ visible: false });
  };

  const delay = 10;
  useEffect(() => {
    let timer1 = setTimeout(() => setState({ visible: false }), delay * 1000);

    let timer2 = setTimeout(
      () => dispatch(actions.setError(null)),
      delay * 1000,
    );
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  let AlertComponent;

  switch (type) {
    case 'info':
      AlertComponent = (
        <NotificationDiv>
          <AlertInfo>
            <IconDiv>
              <img src={InfoIcon} alt="#" />
            </IconDiv>
            <TextDiv>
              <h2>{full ? type.toUpperCase() : ''}</h2>
              <p>{message}</p>
            </TextDiv>
            <CloseIconDiv>
              <img src={TimesIcon} alt="#" onClick={onDismiss} />
            </CloseIconDiv>
          </AlertInfo>
        </NotificationDiv>
      );
      break;
    case 'success':
      AlertComponent = (
        <NotificationDiv>
          <AlertSuccess>
            <IconDiv>
              <img src={CheckIcon} alt="#" />
            </IconDiv>
            <TextDiv>
              <h2>{full ? type.toUpperCase() : ''}</h2>
              <p>{message}</p>
            </TextDiv>
            <CloseIconDiv>
              <img src={TimesIcon} alt="#" onClick={onDismiss} />
            </CloseIconDiv>
          </AlertSuccess>
        </NotificationDiv>
      );
      break;
    case 'error':
      AlertComponent = (
        <NotificationDiv>
          <AlertError>
            <IconDiv>
              <img src={ErrorIcon} alt="#" />
            </IconDiv>
            <TextDiv>
              <h2>{full ? type.toUpperCase() : ''}</h2>
              <p>{message}</p>
            </TextDiv>
            <CloseIconDiv>
              <img src={TimesIcon} alt="#" onClick={onDismiss} />
            </CloseIconDiv>
          </AlertError>
        </NotificationDiv>
      );
      break;
    default:
      break;
  }
  if (state.visible) {
    return <>{AlertComponent}</>;
  }
  return <></>;
};

const AlertInfo = styled.div`
  position: fixed;
  top: 80px;
  z-index: 1000;
  display: flex;
  background-color: #e2e1ff;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #756ed6;
`;

const AlertSuccess = styled.div`
  z-index: 1000;
  display: flex;
  background-color: #9bdc9b;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #439f6e;
`;

const AlertError = styled.div`
  z-index: 1000;
  display: flex;
  background-color: #f09f9f;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #f28080;
`;

const TextDiv = styled.div`
  flex-grow: 1;
  color: black;

  h2 {
    font-size: 18px;
    color: black;
  }
  p {
    color: black;
    font-size: 16px;
    margin-top: 5px;
  }
`;

const IconDiv = styled.div`
  font-size: 10px;
  margin-right: 10px;
  margin-top: -7px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 0;
  }
`;

const CloseIconDiv = styled.div`
  font-size: 20px;
  margin-top: -7px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const dropAnimation = keyframes`
  0% {
    top: -100px;
  }
  100% {
    top: 40px;
  }
  `;

const NotificationDiv = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${dropAnimation} 1s;
`;

export default Notifications;
