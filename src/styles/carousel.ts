import { css } from 'styled-components';
import { customMedia } from './media';
import { StyleConstants } from './StyleConstants';

export const carousel = css`
  .slick-slider {
    width: calc(100% + 15px);
    //height: 450px;
    margin-bottom: 24px;
    top: 50px;

    .slick-slide {
      overflow: hidden;
      ${p => p.theme.direction['padding-right']}: 15px;
      position: relative;

      img {
        width: 100%;
        height: auto;
        min-height: 100%;
        max-width: 300px;
        margin: auto;
        margin-bottom: 150px;
      }
    }

    .slick-list {
      width: 100%;
    }

    .slick-arrow {
      height: 100%;
      width: 100px;
      z-index: 1;

      &:before {
        color: ${StyleConstants.COLOR_DUSTY_WHITE};
        font-weight: 500;
        position: absolute;
        top: calc(50% - 15px);
        font-size: 30px;
        line-height: 30px;
        font-family: inherit;
        width: 30px;
        transition: all 0.3s;
      }

      &:hover {
        color: ${StyleConstants.COLOR_ADDITIONAL};
      }

      ${customMedia.lessThan('medium')`
        display: none !important;
      `}
    }

    .slick-arrow.slick-next {
      left: auto;
      right: ${p => (p.theme.direction.direction === 'ltr' ? 0 : -15)}px;
      background: linear-gradient(90deg, transparent, white);

      &:before {
        content: '\203A';
        right: 5px;
      }
    }

    .slick-arrow.slick-prev {
      background: linear-gradient(-90deg, transparent, white);
      left: ${p => (p.theme.direction.direction === 'ltr' ? -15 : 0)}px;

      &:before {
        content: '\2039';
        left: 5px;
      }
    }

    .slick-dots {
      li {
        width: 10px;
        width: 29px;
        height: 4px;
        margin: 0 2px;

        button {
          padding: 0;
          width: 10px;
          width: 29px;
          height: 4px;

          &:before {
            font-size: 10px;
            width: 29px;
            height: 4px;
            background-color: black;
            content: ' ';
            border-radius: 3px;
            color: ${StyleConstants.COLOR_DUSTY_WHITE};
            opacity: 1;
            transition: all 0.3s;
          }
        }

        &.slick-active {
          button:before {
            color: ${StyleConstants.COLOR_ACCENT};
          }
        }

        &:hover {
          button:before {
            color: ${StyleConstants.COLOR_ADDITIONAL};
          }
        }
      }
    }

    &.slick-slider--single {
      .slick-arrow {
        background: transparent;
      }
    }

    .slick-slider__caption {
      position: absolute;
      bottom: 20px;
      left: 30px;
      width: calc(100% - 50px);
      text-align: center;
    }

    .slick-slider__caption-title {
      font-size: 22px;
      font-weight: bolder;
      color: ${StyleConstants.COLOR_BLACK};
      line-height: 20px;
    }

    .slick-slider__caption-description {
      font-size: 12px;
      color: ${StyleConstants.COLOR_BLACK};
      margin: auto;
      line-height: 16px;
      max-width: 183px;
      margin-top: 10px;
    }
  }

  .slick-dots {
    li {
      width: 10px;
      width: 29px;
      height: 4px;
      margin: 0 2px;

      button {
        padding: 0;
        width: 10px;
        width: 29px;
        height: 4px;

        &:before {
          font-size: 10px;
          width: 29px;
          height: 4px;
          background-color: ${StyleConstants.COLOR_ACCENT};
          content: ' ';
          border-radius: 3px;
          color: ${StyleConstants.COLOR_DUSTY_WHITE};
          transition: all 0.3s;
        }
      }

      &.slick-active {
        button:before {
          color: ${StyleConstants.COLOR_ACCENT};
        }
      }

      &:hover {
        button:before {
          color: ${StyleConstants.COLOR_ADDITIONAL};
        }
      }
    }
  }
`;
