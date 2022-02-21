import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Collapse } from 'reactstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
export default function CollapseComponent({
  title,
  children,
  defaultCollapse,
  defaultStatus,
}) {
  const [state, setState] = useState({
    collapse: defaultCollapse,
    status: defaultStatus,
  });
  const icon = state.collapse ? <FaAngleUp /> : <FaAngleDown />;

  const onEntering = () => {
    setState({ ...state, status: 'opening' });
  };

  const onEntered = () => {
    setState({ ...state, status: 'opened' });
  };

  const onExiting = () => {
    setState({ ...state, status: 'closing' });
  };

  const onExited = () => {
    setState({ ...state, status: 'closed' });
  };

  const toggle = () => {
    setState({ ...state, collapse: !collapse });
  };

  const { collapse } = state;

  return (
    <Wrapper dir="ltr">
      <AccordionHead onClick={toggle} type="button">
        <span>{title}</span>
        {icon}
      </AccordionHead>
      <Collapse
        isOpen={collapse}
        className="collapse__content"
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        {children}
      </Collapse>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: transparent;

  &:not(:last-child) {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.02);
  }
`;

const AccordionHead = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  background-color: none;
  font-size: 15px;
  font-weight: 500;
  color: ${p => p.theme.color.colorText};
`;
