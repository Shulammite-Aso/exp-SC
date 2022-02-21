import * as React from 'react';
import { styled } from '@mui/material/styles';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

interface Props {
  dataValue: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: '50%',
  [`&.${linearProgressClasses.colorSecondary}`]: {
    background: `#F4F3FE`,
  },
}));

export default function ProgressBars(props: Props) {
  return (
    <BorderLinearProgress
      color="secondary"
      variant="determinate"
      value={props.dataValue}
    />
  );
}
