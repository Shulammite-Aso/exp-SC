/**
 *
 * Connect
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import facebook from '../../assets/facebook-logo-footer.png';
import { Button } from 'app/components/Button/Button';

interface Props {}

export function Connect(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Wrapper>
      <Connected>
        <img src={facebook} alt="facebook logo" />
        <p>Facebook</p>
      </Connected>
      <DisconnectBtn className="btn btn-primary">Disconnect</DisconnectBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DisconnectBtn = styled(Button)`
  /* position: relative; */
  margin-top: 80px;
  height: 56px;
  width: 153px;
  /* margin-left: 7px; */
`;

const Connected = styled.div`
  display: flex;
  flex: 1;

  img {
    width: 48px;
    height: 48px;
    margin-top: 65px;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    margin-left: 10px;
    padding-top: 80px;
  }
`;
