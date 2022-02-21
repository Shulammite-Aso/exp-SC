import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
// import { customMedia } from 'styles/media';

interface Props {
  text?: string;
  icons?: { name: string; altText: string }[];
  subText?: string;
  subTextPara?: string;
  heading1?: string;
  heading2?: string;
  heading3?: string;
  subHeading1?: string;
  subText1?: string;
  subHeading2?: string;
  subText2?: string;
  subHeading3?: string;
  subText3?: string;
  subHeading4?: string;
  subText4?: string;
  subText5?: string;
  list?: string[];
  list2?: string[];
}

export function Content({
  text,
  icons,
  subText,
  subTextPara,
  heading1,
  heading2,
  heading3,
  subHeading1,
  subText1,
  subHeading2,
  subText2,
  subHeading3,
  subText3,
  subHeading4,
  subText4,
  subText5,
  list,
  list2,
}: Props) {
  return (
    <ContentWrapper>
      {heading1 && (
        <Fragment>
          <H2>{heading1}</H2>
          <br />
        </Fragment>
      )}
      {text && (
        <Fragment>
          <ContentText>{text}</ContentText>
          <IconWrapper>
            {icons?.map((icon, i) => (
              <Icon key={i} src={icon.name} alt={icon.altText} />
            ))}
          </IconWrapper>
        </Fragment>
      )}
      <Text>
        {subText && (
          <Fragment>
            <p>{subText}</p>
            <br />
            <p>{subTextPara}</p>
            <br />
          </Fragment>
        )}
        <SubHeadingAndList>
          {subHeading1 && (
            <Fragment>
              <H3>{subHeading1}</H3>
              <Text>{subText1}</Text>
              <br />
            </Fragment>
          )}
          {list && (
            <Fragment>
              <H3>{subHeading2}</H3>
              <br />
              <ol>
                {list?.map(listItem => (
                  <li>{listItem}</li>
                ))}
              </ol>
              <br />
              <Text>{subText2}</Text>
            </Fragment>
          )}
          {list2 && (
            <Fragment>
              <H3>{subHeading2}</H3>
              <br />
              <ol>
                {list?.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ol>
              <Text>{subText2}</Text>
              <br />
            </Fragment>
          )}
        </SubHeadingAndList>
        {heading2 && (
          <Fragment>
            <H2>{heading2}</H2>
            <Text>
              <H3>{subHeading3}</H3>
              <Text>{subText3}</Text>
              <H3>{subHeading4}</H3>
              <Text>{subText4}</Text>
            </Text>
          </Fragment>
        )}
        {heading3 && (
          <Fragment>
            <H2>{heading3}</H2>
            <Text>
              <H3>{subHeading3}</H3>
              <Text>{subText5}</Text>
            </Text>
          </Fragment>
        )}
      </Text>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 833px;
`;

const H2 = styled.h2`
  font-size: 14px;
  padding-bottom: 16px;
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bolder;
`;

const ContentText = styled.p``;

const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 90px;
  &:last-child {
    margin-bottom: 600px;
  }
`;

const Icon = styled.img`
  height: 58px;
  width: 140px;
  margin: 0px auto 45px auto;
`;

const Text = styled.div`
  color: ${p => p.theme.color.colorTextLightGray};
  margin-bottom: 32px;
`;

const SubHeadingAndList = styled.div``;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 14px;
`;
