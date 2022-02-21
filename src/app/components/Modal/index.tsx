import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Modal as RSModal } from 'reactstrap';
import classNames from 'classnames';

import { ReactComponent as Cross } from 'app/assets/icons/x.svg';
import { H4 } from '../Typography/H4/H4';
import { customMedia } from 'styles/media';
import { Button } from '../Button/Button';
import { ButtonToolbar } from '../ButtonToolbar/ButtonToolbar';

interface Props {
  showModal: boolean;
  toggle: () => void;
  title?: string;
  children: React.ReactNode;
  primaryBtnText?: string;
  primaryAction?: (data?: any) => void;
  showSecondaryBtn?: boolean;
  hideToolbar?: boolean;
}

export const Modal = memo(
  ({
    showModal,
    toggle,
    title,
    children,
    primaryBtnText,
    showSecondaryBtn,
    primaryAction,
    hideToolbar,
  }: Props) => {
    const fullBtn = classNames({
      btn: true,
      'btn-primary': true,
      'btn-fullwidth': !showSecondaryBtn,
    });

    return (
      <Wrapper>
        <RSModal isOpen={showModal} toggle={toggle}>
          <ModalHeader>
            <ModalCloseBtn
              className="modal__close-btn"
              aria-label="modal__close-btn"
              type="button"
              onClick={toggle}
            />
            {title && (
              <ModalTitle className="text-modal  modal__title">
                {title}
              </ModalTitle>
            )}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          {!hideToolbar && (
            <ModalFooter>
              {showSecondaryBtn && (
                <Btn className="btn btn-secondary" onClick={toggle}>
                  Cancel
                </Btn>
              )}

              <Btn className={fullBtn} onClick={primaryAction}>
                {primaryBtnText}
              </Btn>
            </ModalFooter>
          )}
        </RSModal>
      </Wrapper>
    );
  },
);

const ModalBody = styled.div`
  ${customMedia.lessThan('medium')`
    max-width: 100%;
  `}
`;

const Btn = styled(Button)`
  &.btn-fullwidth {
    width: 100%;
    height: 50px;
  }
`;

const ModalFooter = styled(ButtonToolbar)`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;
  flex-flow: ${p => p.theme.direction['flex-flow']} !important;

  button {
    min-width: 100px;
    padding: 4px 25px;
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div``;

const ModalHeader = styled.div``;

const ModalCloseBtn = styled(Cross)`
  position: absolute;
  top: 15px;
  ${p => p.theme.direction['right']}: 15px;
  font-size: 14px;
  width: 14px;
  height: 14px;
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  color: ${p => p.theme.color.colorText};

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;

const ModalTitle = styled(H4)`
  margin-top: 10px;
  margin-bottom: 15px;

  &:first-child {
    margin-top: 0;
  }
`;
