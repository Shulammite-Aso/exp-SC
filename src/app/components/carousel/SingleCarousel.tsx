import React from 'react';
import Slider from 'react-slick';

interface Props {
  children: React.ReactNode;
  settings: {};
}

export const SingleCarousel = ({ children, settings }: Props) => {
  return (
    <Slider {...settings} className="slick-slider--single">
      {children}
    </Slider>
  );
};
