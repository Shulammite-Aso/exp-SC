import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from '../Button/Button';

export const OAuthBtn = styled(Button)`
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.5px ${p => p.theme.color.colorFieldsBorder};
  color: ${p => p.theme.color.colorTextBlack} !important;
  font-size: 11px;
  font-weight: 400;
  width: 50%;

  svg {
    height: 30px;
    width: 30px;
    margin-top: unset;

    rect {
      fill: transparent;
    }
  }

  ${customMedia.lessThan('small')`
    span {
      display: none
    }
  `}

  ${customMedia.between('medium', 'mediumplus')`
    span {
      display: none
    }
  `}
`;
