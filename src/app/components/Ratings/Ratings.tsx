import * as React from 'react';
import Rating from '@mui/material/Rating';

interface Props {
  max: number;
  defaultValue: number;
  readOnly: boolean;
}

export default function CustomizedRating(props: Props) {
  return (
    <Rating
      defaultValue={props.defaultValue}
      max={props.max}
      readOnly={props.readOnly}
    />
  );
}
