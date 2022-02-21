import * as React from 'react';
import styled from 'styled-components/macro';
import classNames from 'classnames';
import ReactCodeInput from 'react-code-input';

import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as ErrorIcon } from 'app/assets/icons/error.svg';

type CodeInputProps = {
  error: string;
  [x: string]: any;
};
export const CodeInput = (props: CodeInputProps) => {
  const { type, fields, name, inputMode, error, ...codeInputProps } = props;
  const errorClass = classNames({
    error: error,
  });
  return (
    <Wrapper>
      <Input
        className={errorClass}
        name={name}
        type={type}
        inputMode={inputMode}
        fields={fields}
        isValid={error ? false : true}
        {...codeInputProps}
      />

      {error && (
        <ErrorWrapper>
          <ErrorIcon />
          <ErrorText>{error}</ErrorText>
        </ErrorWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  &:last-child() {
    margin-top: unset;
  }
`;

const Input = styled(ReactCodeInput)`
  input {
    font-family: monospace;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 0px;
    margin: 4px;
    padding-left: 8px;
    width: 36px;
    height: 42px;
    font-size: 32px;
    box-sizing: border-box;
    color: black;
    background-color: white;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    color: ${StyleConstants.INPUT_TEXT};
    transition: border 0.3s;
    background-color: ${p => p.theme.color.inputColor};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  &.error {
    input {
      background-color: ${StyleConstants.INPUT_ERROR_FILL};
      border: 1px solid ${StyleConstants.INPUT_ERROR_STROKE};
    }
  }
`;

const ErrorWrapper = styled.div`
  margin-top: 1px;
`;

const ErrorText = styled.small`
  color: ${p => p.theme.color.colorText};
  ${p => p.theme.direction['margin-left']}: 4px;
`;
