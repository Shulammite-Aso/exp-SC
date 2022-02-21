/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import styled from 'styled-components/macro';
import Slider from 'rc-slider';
import { StyleConstants } from 'styles/StyleConstants';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
export const RangeComponent = ({
  marks = {},
  value,
  min,
  max,
  onChange,
  tipFormatter,
}) => {
  const [sliderValues, setSliderValues] = useState(value);
  return (
    <SliderDiv>
      <Range
        min={min}
        max={max}
        defaultValue={sliderValues}
        onChange={sliderValues => {
          setSliderValues(sliderValues);
          onChange(sliderValues);
        }}
        tipFormatter={tipFormatter}
        marks={marks}
        tipProps={{ visible: true }}
      />
      <SliderRange>
        <SlideValues>
          <p>{tipFormatter ? tipFormatter(min) : min}</p>
        </SlideValues>
        <SlideValues>
          <p>{tipFormatter ? tipFormatter(max) : max}</p>
        </SlideValues>
      </SliderRange>
    </SliderDiv>
  );
};

const SliderDiv = styled.div`
  padding: 15px 0;
  margin: 10px;
  .rc-slider-track {
    background-color: ${StyleConstants.COLOR_ACCENT};
  }
  .rc-slider-handle {
    background-color: ${StyleConstants.COLOR_ACCENT};
    border: 5px solid white;
    width: 20px;
    height: 20px;
    margin-top: -9px;
    &:focus {
      border: 5px solid white;
    }
  }
  .rc-slider-tooltip-placement-top {
    padding: 0;
  }
  .rc-slider-tooltip-inner {
    height: auto;
    background: none;
    border: none;
    box-shadow: 0 0 0 0;
    color: ${StyleConstants.COLOR_ACCENT};
    top: -15px;
    padding: 0;
    font-size: 16px;
  }

  .rc-slider-tooltip-arrow {
    display: none;
  }
`;
const SliderRange = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;
const SlideValues = styled.div`
  font-weight: bold;
`;
