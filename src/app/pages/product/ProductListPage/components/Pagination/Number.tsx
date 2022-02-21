import React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
export function Number({ isActive, page }) {
  return (
    <Container>
      {isActive ? (
        <ActiveWrapper>
          <Text>{page}</Text>
        </ActiveWrapper>
      ) : (
        <Wrapper>
          <Text>{page}</Text>
        </Wrapper>
      )}
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  color: ${p => p.theme.color.colorText};

  display: block;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 5 px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
`;
const Text = styled.span`
  display: block;
`;
const ActiveWrapper = styled(Wrapper)`
  background-color: ${StyleConstants.COLOR_ACCENT};
  color: white;
`;
