import styled from 'styled-components/macro';

import { StyleConstants } from 'styles/StyleConstants';
import { P } from 'app/components/Typography/P/P';

export const InfoCard = styled.div`
  background-color: ${StyleConstants.COLOR_DARKEN_LIGHT_GRAY};
  background: rgba(246, 245, 255, 0.3);
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 10px 0;
  border-radius: 8px;
  flex-direction: column;

  ${P} {
    color: ${StyleConstants.COLOR_BLACK};
  }
`;
