import React, { memo } from 'react';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';

type Props = {};
export const Checkout = memo((props: Props) => {
  const screenWidth = window.innerWidth;
  const MOBILE_RESOLUTION = 420;
  return (
    <>{screenWidth < MOBILE_RESOLUTION ? <MobileView /> : <DesktopView />}</>
  );
});
