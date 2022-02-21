import React from 'react';
import { Col } from 'reactstrap';
import { RangeComponent } from './Range';

export function DoubleSliderType({ onChange }) {
  return (
    <Col>
      <div dir="ltr">
        <RangeComponent
          min={500}
          max={500000}
          value={[30000, 250000]}
          onChange={value => onChange(value)}
          tipFormatter={value => `${value}`}
        />
      </div>
    </Col>
  );
}
