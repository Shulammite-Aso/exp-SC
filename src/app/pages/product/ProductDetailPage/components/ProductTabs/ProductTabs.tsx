import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components/macro';
import { Col, Row } from 'reactstrap';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';
import { Link } from 'react-router-dom';
import Ratings from '../../../../../components/Ratings/Ratings';
import ProgressBar from '../../../../../components/ProgressBar/ProgressBar';
import checked from '../../assets/check.png';
import { useSelector } from 'react-redux';
import { reviewsSelector } from 'app/pages/product/slice/selectors';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// interface ProductPageUrlParams {
//   productId: string;
// }

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ detail }) {
  const [value, setValue] = React.useState(0);
  // const { productId } = useParams<ProductPageUrlParams>();
  // const dispatch = useDispatch();
  // const { actions } = useProductSlice();
  const reviews = useSelector(reviewsSelector);

  // useEffect(() => {
  //   dispatch(actions.getReviews({ id: productId }));
  // }, [actions, dispatch, productId]);

  // console.log('Reviews: ', reviews);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Delivery" {...a11yProps(1)} />
            <Tab label="Rating" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Headers>About this Item</Headers>
          {detail.long_description}
          {detail.long_description}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Headers> Delivery</Headers>
          <Para>Estimated Delivery takes about 4 to 5days</Para>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Wrapper>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <RatingOverview>
                  <ReviewsHeader>
                    Product Ratings {`(${reviews ? reviews!.length : '0'})`}
                  </ReviewsHeader>
                  <OverviewBox>
                    <OverviewData>4/5</OverviewData>
                    <Ratings defaultValue={4} max={4} readOnly={true} />
                    <BoldPara>170 Ratings</BoldPara>
                  </OverviewBox>
                  <OverViewProgress>
                    {/* Working on making the OverViewProgressItem reusable */}
                    <OverViewProgressItem>
                      <RatingsTitle>5</RatingsTitle>
                      <Ratings defaultValue={1} max={1} readOnly={true} />
                      <RatingsNumber>(104)</RatingsNumber>
                      <ProgressBar dataValue={70} />
                    </OverViewProgressItem>
                    <OverViewProgressItem>
                      <RatingsTitle>4</RatingsTitle>
                      <Ratings defaultValue={1} max={1} readOnly={true} />
                      <RatingsNumber>(45)</RatingsNumber>
                      <ProgressBar dataValue={60} />
                    </OverViewProgressItem>
                    <OverViewProgressItem>
                      <RatingsTitle>3</RatingsTitle>
                      <Ratings defaultValue={1} max={1} readOnly={true} />
                      <RatingsNumber>(8)</RatingsNumber>
                      <ProgressBar dataValue={50} />
                    </OverViewProgressItem>
                    <OverViewProgressItem>
                      <RatingsTitle>2</RatingsTitle>
                      <Ratings defaultValue={1} max={1} readOnly={true} />
                      <RatingsNumber>(6)</RatingsNumber>
                      <ProgressBar dataValue={40} />
                    </OverViewProgressItem>
                    <OverViewProgressItem>
                      <RatingsTitle>1</RatingsTitle>
                      <Ratings defaultValue={1} max={1} readOnly={true} />
                      <RatingsNumber>(3)</RatingsNumber>
                      <ProgressBar dataValue={20} />
                    </OverViewProgressItem>
                  </OverViewProgress>
                </RatingOverview>
              </Col>
              <Col lg={8} md={6} sm={12}>
                <ReviewWrapper>
                  <Heading>
                    <ReviewsHeader>
                      Product Reviews {`(${reviews ? reviews!.length : '0'})`}
                    </ReviewsHeader>
                    {reviews && reviews!.length !== 0 && (
                      <SeeAllText to={'/all-reviews'}>
                        See all &#x3E;
                      </SeeAllText>
                    )}
                    {/* <SeeAllText to={'/all-reviews'}>See all &#x3E;</SeeAllText> */}
                  </Heading>
                  {reviews &&
                    reviews.map((data, i) => (
                      <CommentsWrapper key={i}>
                        <Comment>
                          <Ratings
                            defaultValue={data.rate}
                            max={5}
                            readOnly={true}
                          />
                          <Para>{data.comment} </Para>
                          <AuthorWrapper>
                            <ParaGraph>
                              {data.date} by {data.author}
                            </ParaGraph>
                            <Verified>
                              <Div>
                                <Image
                                  src={checked}
                                  alt="Verified"
                                  width={15}
                                  height={15}
                                />
                              </Div>
                              <ParaGraph2>
                                {data.verifiedBuyer === true
                                  ? 'Verified Purchase'
                                  : 'Unverified Purchase'}
                              </ParaGraph2>
                            </Verified>
                          </AuthorWrapper>
                        </Comment>
                      </CommentsWrapper>
                    ))}
                </ReviewWrapper>
              </Col>
            </Row>
          </Wrapper>
        </TabPanel>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const Comment = styled.div`
  padding: 1rem;
`;

const H4 = styled.h4`
  color: ${p => p.theme.color.colorText};
  font-style: normal;
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
`;

const ReviewWrapper = styled.div`
  width: 100%;
`;
const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 0.5rem;
  height: fit-content;
  min-height: 100px;
  border: 1px solid ${p => p.theme.color.colorBorder};
  border-radius: 2px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;

  ${customMedia.lessThan('medium')`
     background: ${p => p.theme.color.colorBackground};
     font-size: 1rem;
     font-weight: bold;

  `};
`;

const OverviewBox = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 250px;
  height: 184.6px;
  border-radius: 8px;
  ${customMedia.greaterThan('medium')`
     background: #f4f3fe;

  `};

  ${customMedia.lessThan('medium')`
     background: ${p => p.theme.color.colorBackground};
     font-size: 1rem;
     font-weight: bold;

  `};
`;

const ParaGraph = styled.p`
  width: 50%;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-family: 'Mulish', sans-serif;
`;

const ParaGraph2 = styled.p`
  font-size: 0.75rem;
  font-family: 'Mulish', sans-serif;
`;

const Para = styled.p`
  font-size: 0.79rem;
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: normal;
  /* font-size: 1rem; */
  line-height: 21px;
  color: ${p => p.theme.color.colorTextBlack};
`;

const Verified = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

const Div = styled.span`
  width: 1rem;
  margin-right: 0.5rem;
`;

const Image = styled.img`
  /* width: 1.5rem; */
`;

const AuthorWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  color: ${p => p.theme.color.colorText};
`;

const RatingsTitle = styled.h4`
  font-size: 1rem;
  color: ${p => p.theme.color.colorText};
`;

const OverViewProgressItem = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: fit-content;
  margin-top: 0.5rem;

  ${customMedia.greaterThan('medium')`
    
   `};

  ${customMedia.lessThan('medium')`
     font-size: 1rem;
     font-weight: bold;

   `};
`;

const RatingsNumber = styled.div`
  width: fit-content;
`;

const OverViewProgress = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 250px;
  height: fit-content;
  ${customMedia.lessThan('medium')`
     margin-bottom: 0.8rem;

   `};

  /* background: ${p => p.theme.color.colorBackground}; */
`;

const BoldPara = styled.p`
  color: ${p => p.theme.color.colorText};
  margin-top: 0.5rem;

  ${customMedia.greaterThan('medium')`
     font-size: 1rem;
     font-weight: 700;

   `};

  ${customMedia.lessThan('medium')`
     font-size: 1rem;
     font-weight: bold;

   `};
`;

const Headers = styled(H4)`
  color: ${p => p.theme.color.colorTextBlack};
  font-size: 1.5rem;
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 21px;
`;

const OverviewData = styled(H4)`
  color: ${StyleConstants.COLOR_LIGHT_RED};
  margin-bottom: 0.5rem;

  ${customMedia.greaterThan('medium')`
     font-size: 1.8rem;
     font-weight: 700;

   `};

  ${customMedia.lessThan('medium')`
     font-size: 1rem;
     font-weight: bold;

   `};
`;

const ReviewsHeader = styled.p`
  font-weight: bold;
  line-height: 120%;
  color: ${p => p.theme.color.colorText};
  ${customMedia.greaterThan('medium')`
     font-size: 0.75rem;
     font-weight: 700;

   `};

  ${customMedia.lessThan('medium')`
     font-size: 0.78rem;
     font-weight: bold;

   `};
`;

const SeeAllText = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  ${p => p.theme.direction['margin-left']}: 0;
  color: ${StyleConstants.COLOR_LIGHT_RED};
  width: fit-content;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_RED_HOVER};
  }

  ${customMedia.lessThan('medium')`
     font-size: 0.75rem;
     width: 30%;
   `};
`;

const Heading = styled.div`
  display: flex;
  display: relative;
  width: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const RatingOverview = styled.div`
  width: 100%;
  height: fit-content;
`;
