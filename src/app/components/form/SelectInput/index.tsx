import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';

import { ReactComponent as ErrorIcon } from 'app/assets/icons/error.svg';
export const Control = (props: any) => {
  return (
    <>
      <Label isFloating={props.isFocused || props.hasValue}>
        {props.selectProps.label}
      </Label>
      <components.Control {...props} />
    </>
  );
};

type TextInputProps = {
  label?: string;
  error?: string;
  [x: string]: any;
  height: any;
};
export const SelectInput = React.forwardRef<any, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { name, error, ...textInputProps } = props;
    const errorClass = classNames({
      error: error,
    });

    return (
      <Wrapper>
        <Select
          className={errorClass}
          id={name}
          name={name}
          {...textInputProps}
          components={{ Control }}
          classNamePrefix="react-select"
          ref={ref}
        />
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
  position: relative;
  width: 100%;
  /* height: 50px; */
  margin-bottom: 20px;
  margin-top: 15px;

  &:last-child() {
    margin-top: unset;
  }
`;

const Select = styled(ReactSelect)`
  height: 100%;
  .react-select__control {
    border: 0;
    outline: 0;
    height: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    color: ${StyleConstants.INPUT_TEXT};
    transition: border 0.3s;
    font-size: 13px;
    width: 100%;
    box-shadow: unset;
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
  }

  .react-select__placeholder {
    display: none;
  }

  .react-select__value-container {
    height: 100%;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    color: ${StyleConstants.INPUT_TEXT};
    height: 100%;
  }

  &.error {
    .react-select__control {
      background-color: ${StyleConstants.INPUT_ERROR_FILL};
      border: 1px solid ${StyleConstants.INPUT_ERROR_STROKE};
    }
  }
`;

const ErrorText = styled.small`
  color: ${p => p.theme.color.colorText};
  ${p => p.theme.direction['margin-left']}: 4px;
`;
const ErrorWrapper = styled.div`
  margin-top: 1px;
`;

const Label = styled.label<{ isFloating?: boolean }>`
  left: 15px;
  pointer-events: none;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  color: ${StyleConstants.INPUT_TEXT};
  z-index: 1;

  top: ${props => (props.isFloating ? `3px` : `20%`)};
  font-size: ${props => (props.isFloating ? `0.5rem` : `1rem`)};
`;
