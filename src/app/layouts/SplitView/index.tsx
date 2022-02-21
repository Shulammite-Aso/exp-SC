import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Col } from 'reactstrap';

import { customMedia } from 'styles/media';
import BG from './assets/carousel_bg.png';
import ContainerBG from './assets/carouse_container_bg.png';
import LogoDark from 'app/assets/icons/alt_mall_logo.svg';
import CarouselImage from './assets/carousel_image.png';
import { SingleCarousel } from 'app/components/carousel/SingleCarousel';

interface Props {
  children: React.ReactNode;
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
};

const data = [
  { id: 0, src: `${CarouselImage}` },
  { id: 1, src: `${CarouselImage}` },
  { id: 2, src: `${CarouselImage}` },
  { id: 3, src: `${CarouselImage}` },
];

export const SplitView = memo(({ children }: Props) => {
  return (
    <Div>
      <Left>
        <Centered>
          <Logo />
          <SliderContainer>
            <SingleCarousel settings={settings}>
              {data.map(item => (
                <div key={item.id}>
                  <img src={item.src} alt={`slide_${item.src}`} />
                  <div className="slick-slider__caption">
                    <p className="slick-slider__caption-title">
                      Shop Now, Pay later
                    </p>
                    <p className="slick-slider__caption-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean
                    </p>
                  </div>
                </div>
              ))}
            </SingleCarousel>
          </SliderContainer>
        </Centered>
      </Left>

      <Right>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Centered>{children}</Centered>
        </Col>
      </Right>
    </Div>
  );
});

const Div = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  width: 100vw;
  display: flex;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 150px;
    border-radius: 50%;
  }
`;

const Left = styled.div`
  left: 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
  width: 30%;
  display: none;
  justify-content: center;
  align-items: center;
  background-image: ${`url(${BG})`};

  ${Centered} {
    width: 90%;
  }

  ${customMedia.greaterThan('medium')`
    display: flex;
  `}
`;

const Logo = styled.div`
  background-image: ${`url(${LogoDark})`};
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: contain;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  background-image: ${`url(${ContainerBG})`};
  background-repeat: no-repeat;
  background-position-y: top;
  background-position-x: center;
  background-size: contain;
  min-width: 220px;
  width: 90%;
  height: 60vh;
  margin-top: 50px;
`;

const Right = styled.div`
  right: 0;
  background-color: ${p => p.theme.color.colorBackgroundBody};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${customMedia.greaterThan('medium')`
    width: 70%;
  `}
`;
