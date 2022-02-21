import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Hero from '../components/Hero';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { customMedia } from 'styles/media';

export function PrivacyPolicyPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Privacy Policy Page</title>
        <meta name="description" content="AltMall's Privacy Policy page" />
      </Helmet>
      <Wrapper>
        <Hero title="Privacy Policy" />
        <BackBtnAndContent>
          <BackBtn>
            <BackText text={t(...messages.back())} />
          </BackBtn>
          <Content>
            <H2>Personal Information</H2>
            <Text>
              <P>
                User data may be shared with Alt Mall providers to improve order
                processing and customer service. It may also be used both for
                marketing research purposes and customer relation management.
              </P>
              <br />
              <P>
                User data collected help us to personalize our website according
                to each user’s wishes and preferences. Offering you the most
                spontaneous and friendly surfing experience is our priority.
              </P>
              <br />
              <SubHeadingAndList>
                <H3>
                  Data collected are for statistical purposes only and help us
                  to:
                </H3>
                <br />
                <ol>
                  <li>Products must be unused</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Product must have all tags and labels attached.</li>
                  <li>Product inserts and accessories must be intact.</li>
                  <li> Product must have the receipt or proof of purchase.</li>
                </ol>
              </SubHeadingAndList>
              <br />
              <SubHeadingAndList>
                <H3>
                  Data collected are for statistical purposes only and help us
                  to:
                </H3>
                <br />
                <ol>
                  <li>Products must be unused</li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Product must have all tags and labels attached.</li>
                  <li>Product inserts and accessories must be intact.</li>
                  <li> Product must have the receipt or proof of purchase.</li>
                </ol>
              </SubHeadingAndList>
            </Text>
            <H2>Cookies</H2>
            <Text>
              <P>
                You accept that the information contained in this website is
                provided “as is, where is”, is intended for information purposes
                only and that it is subject to change without notice. Although
                we take reasonable steps to ensure the accuracy of information
                and we believe the information to be reliable when posted, it
                should not be relied upon and it does not in any way constitute
                either a representation or a warranty or a guarantee. Product
                representations expressed on this Site are those of the vendor
                and are not made by us. Submissions or opinions expressed on
                this Site are those of the individual posting such content and
                may not reflect our opinions.
              </P>
            </Text>
            <H2>Accuracy of the personal data provided to Altmal</H2>
            <Text>
              <P>
                Our aim is to ensure accessibility to the website at all times,
                however we make no representation of that nature and reserves
                the right to terminate the website at any time and without
                notice. You accept that service interruption may occur to allow
                for website improvements, scheduled maintenance or may also be
                due to factors beyond our control.
              </P>
            </Text>
            <H2>Examples of Information Collected</H2>
            <Text>
              <ol>
                <Li>Information you give us</Li>
              </ol>
              <P>
                We may include links to third party websites at any time.
                However, the existence of a link to another website should not
                be considered as an affiliation or a partnership with a third
                party or viewed as an endorsement of a particular website unless
                explicitly stated otherwise. In the event the user follows a
                link to another website, he or she does so at his or her own
                risk. We accept no responsibility for any content, including,
                but not limited to, information, products and services,
                available on third party websites. Creating a link to this
                website is strictly forbidden without our prior written consent.
                Furthermore, we reserve the right to revoke our consent without
                notice or justification.
              </P>
              <ol>
                <Li value="2">Information you give us</Li>
              </ol>
              <P>
                We may include links to third party websites at any time.
                However, the existence of a link to another website should not
                be considered as an affiliation or a partnership with a third
                party or viewed as an endorsement of a particular website unless
                explicitly stated otherwise. In the event the user follows a
                link to another website, he or she does so at his or her own
                risk. We accept no responsibility for any content, including,
                but not limited to, information, products and services,
                available on third party websites. Creating a link to this
                website is strictly forbidden without our prior written consent.
                Furthermore, we reserve the right to revoke our consent without
                notice or justification.
              </P>
              <ol>
                <Li value="3">Information you give us</Li>
              </ol>
              <P>
                We may include links to third party websites at any time.
                However, the existence of a link to another website should not
                be considered as an affiliation or a partnership with a third
                party or viewed as an endorsement of a particular website unless
                explicitly stated otherwise. In the event the user follows a
                link to another website, he or she does so at his or her own
                risk. We accept no responsibility for any content, including,
                but not limited to, information, products and services,
                available on third party websites. Creating a link to this
                website is strictly forbidden without our prior written consent.
                Furthermore, we reserve the right to revoke our consent without
                notice or justification.
              </P>
              <ol>
                <Li value="4">Information you give us</Li>
              </ol>
              <P>
                We may include links to third party websites at any time.
                However, the existence of a link to another website should not
                be considered as an affiliation or a partnership with a third
                party or viewed as an endorsement of a particular website unless
                explicitly stated otherwise. In the event the user follows a
                link to another website, he or she does so at his or her own
                risk. We accept no responsibility for any content, including,
                but not limited to, information, products and services,
                available on third party websites. Creating a link to this
                website is strictly forbidden without our prior written consent.
                Furthermore, we reserve the right to revoke our consent without
                notice or justification.
              </P>
            </Text>
            <H2>What are my rights ?</H2>
            <Text>
              Both parties agree that all intellectual property rights and
              database rights, whether registered or unregistered, in the Site,
              information content on the Site and all the website design,
              including, but not limited to, text, graphics, software, photos,
              video, music, sound, and their selection and arrangement, and all
              software compilations, underlying source code and software shall
              remain at all times vested in us or our licensors. Use of such
              material will only be permitted as expressly authorized by us or
              our licensors. Any unauthorized use of the material and content of
              this website is strictly prohibited, and you agree not to, or
              facilitate any third party to, copy, reproduce, transmit, publish,
              display, distribute, commercially exploit or create derivative
              works of such material and content.
            </Text>
          </Content>
        </BackBtnAndContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
`;

const BackBtnAndContent = styled.div`
  margin: 0 auto;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 83%;
  margin-top: 80px;
  ${customMedia.lessThan('large')`
    flex-wrap: wrap;
    flex: start;
    justify-content: space-between;
  `};
`;

const BackBtn = styled.div`
  margin-right: 10%;
  margin-bottom: 24px;
`;

const Content = styled.p`
  width: 833px;
`;

const H2 = styled.h2`
  font-size: 14px;
  padding-bottom: 16px;
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bolder;
`;

const Text = styled.div`
  color: ${p => p.theme.color.colorTextLightGray};
  margin-bottom: 32px;
`;

const P = styled.p`
  color: ${p => p.theme.color.colorTextLightGray};
`;

const SubHeadingAndList = styled.div``;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 14px;
`;

const Li = styled.li`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bolder;
  padding-bottom: 16px;
  padding-top: 16px;
`;
