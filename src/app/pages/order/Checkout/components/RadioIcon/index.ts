import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const RadioIcon = styled.span`
  border: solid 2px ${p => p.theme.color.colorText};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    border-color: ${StyleConstants.COLOR_ACCENT};

    &:before {
      content: ' ';
      background-color: ${StyleConstants.COLOR_ACCENT};
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
`;
