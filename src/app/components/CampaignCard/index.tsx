/**
 *
 * SeasonalCampaignItem
 *
 */
import { CampaignProps } from 'app/pages/HomePage/slice/types';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

export const CampaignItem: React.FC<
  CampaignProps & { campaignType: string }
> = React.memo(
  props => {
    const { push } = useHistory();
    return (
      <Wrapper
        onClick={() =>
          push(`/campaigns/${props.campaignType}/${props._id}/products`)
        }
      >
        <ImageSection src={props.banner} alt={props.title} />
        <TextWrap>
          <T1>{props.title}</T1>
          {/* <T2>{item.price}</T2> */}
        </TextWrap>
      </Wrapper>
    );
  },
  (prev, next) => prev._id === next._id,
);

const Wrapper = styled.div`
  align-items: center;
  margin: 0.2rem;
  cursor: pointer;
  ${customMedia.lessThan('xmedium')`
     width: 45%;
  `};
`;

const T1 = styled.p`
  color: ${p => p.theme.color.colorText};
  text-transform: capitalize;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  justify-content: center;
`;

const T2 = styled.p`
  color: ${p => p.theme.color.colorText};

  padding-top: 8px;
  font-size: 16px;
  line-height: 25px;
  font-weight: 400;
  justify-content: center;
`;

const TextWrap = styled.div`
  margin-top: 4px;
  display: block;
`;

const ImageSection = styled.img`
  object-fit: cover;
  border-radius: 20px;
  max-width: 290px;
  max-height: 236px;

  ${customMedia.lessThan('medium')`
    max-width: 280px;
    max-height: 230px;
 `};
`;
