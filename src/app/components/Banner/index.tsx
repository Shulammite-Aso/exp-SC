import React from 'react';
import styled from 'styled-components/macro';
import firstBanner from './assets/first-banner.svg';
import secondBanner from './assets/second-banner.svg';
import thirdBanner from './assets/third-banner.svg';
import { SingleCarousel } from 'app/components/carousel/SingleCarousel';

interface Props {
  hasCarousel: boolean;
  image?: string;
}

export function Banner({ hasCarousel, image }: Props) {
  const banners = [firstBanner, secondBanner, thirdBanner];
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
  return (
    <Wrapper>
      {hasCarousel ? (
        <SingleCarousel settings={settings}>
          {banners.map(banner => (
            <BannerContainer key={banners.indexOf(banner)}>
              <a href="/">
                <BannerImg src={banner} alt="campaigne banner" />
              </a>
            </BannerContainer>
          ))}
        </SingleCarousel>
      ) : (
        <a href="/">
          <BannerImg src={image ? image : banners[0]} alt="campaigne banner" />
        </a>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .slick-slider {
    width: 100%;
    top: 0;

    .slick-slide {
      ${p => p.theme.direction['padding-right']}: 0px;
    }

    .slick-dots {
      position: absolute;
      bottom: 45px;
      left: -535px;

      li {
        width: 13px;

        button {
          width: 29px;
          height: 6px;

          &:before {
            background-color: #ffffff;
            width: 6px !important;
            height: 6px;
          }
        }
      }
    }
  }
`;

const BannerContainer = styled.div``;
const BannerImg = styled.img`
  max-width: 100% !important;
  margin: 0 !important;
`;
