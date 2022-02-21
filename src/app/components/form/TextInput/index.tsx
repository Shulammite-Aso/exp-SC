import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import classNames from 'classnames';

import { ReactComponent as ErrorIcon } from 'app/assets/icons/error.svg';
type TextInputProps = {
  label?: string;
  error?: string;
  renderIcon?: () => React.ReactNode;
  [x: string]: any;
};
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { label, name, error, renderIcon, ...textInputProps } = props;
    const errorClass = classNames({
      error: error,
    });

    return (
      <Wrapper>
        <Input
          className={errorClass}
          id={name}
          name={name}
          {...textInputProps}
          placeholder=" "
          ref={ref}
        />
        {label && <Label htmlFor={name}>{label}</Label>}
        <InputIcon>{renderIcon && renderIcon()}</InputIcon>
        {error && (
          <ErrorWrapper>
            <ErrorIcon />
            <ErrorText>{error}</ErrorText>
          </ErrorWrapper>
        )}
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  &:last-child() {
    margin-top: unset;
  }
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${StyleConstants.INPUT_TEXT};
  transition: border 0.3s;
  font-size: 14px;
  padding: 4px 20px 0;
  width: 100%;
  background-color: ${p => p.theme.color.inputColor};

  &::-webkit-input-placeholder {
    color: ${StyleConstants.INPUT_TEXT};
  }
  &::-moz-placeholder {
    color: ${StyleConstants.INPUT_TEXT};
  }
  /* Firefox 19+ */
  &:-moz-placeholder {
    color: ${StyleConstants.INPUT_TEXT};
  }
  /* Firefox 18- */
  &:-ms-input-placeholder {
    color: ${StyleConstants.INPUT_TEXT};
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: translateY(-15px) scale(0.75);
  }

  &:not(:placeholder-shown) ~ label {
    color: ${StyleConstants.INPUT_TEXT};
  }
  &:focus ~ label {
    color: ${StyleConstants.INPUT_TEXT};
  }

  &:focus,
  &:active {
    border: 1px solid ${StyleConstants.COLOR_ACCENT};
  }

  &.error {
    background-color: ${StyleConstants.INPUT_ERROR_FILL};
    border: 1px solid ${StyleConstants.INPUT_ERROR_STROKE};
  }
`;

const InputIcon = styled.span`
  position: absolute;
  right: 12px;
  transform: translateY(80%);
  width: 20px;
  height: 20px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Label = styled.label`
  color: ${StyleConstants.INPUT_TEXT};
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  top: 20px;

  transition: transform 200ms;
`;

const ErrorText = styled.small`
  color: ${p => p.theme.color.colorText};
  ${p => p.theme.direction['margin-left']}: 4px;
`;
const ErrorWrapper = styled.div`
  margin-top: 1px;
`;
