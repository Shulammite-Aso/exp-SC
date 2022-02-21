/**
 *
 * Sidebar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { Col, Row } from 'reactstrap';
import { customMedia } from 'styles/media';
import Form from 'react-bootstrap/Form';
import StarIcon from 'mdi-react/StarIcon';
import ListGroup from 'react-bootstrap/ListGroup';

interface Props {}

export const Sidebar = memo((props: Props) => {
  return (
    <Wrapper>
      {/* <Row> */}
      {/* <Col> */}
      <Accordion defaultActiveKey="0" className="mt-5" flush>
        <AccordionItem eventKey="0">
          <AccordionHeader>Brand</AccordionHeader>
          <Accordion.Body>
            <Row>
              <Col md={12} className="mb-3">
                <Form>
                  {/* <MailIcon /> */}
                  <EmailField placeholder="Search" />
                </Form>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            {/* <Row className="mt-0.3">
              <Col md={12}>
                <InputGroup className="mb-3" style={{ border: 'none' }}>
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    style={{ border: 'none' }}
                  />
                  <FormControl
                    aria-label="Text input with checkbox"
                    placeholder="Thermocool"
                    style={{ border: 'none' }}
                  />
                </InputGroup>
              </Col>
            </Row> */}
          </Accordion.Body>
        </AccordionItem>
      </Accordion>

      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header
            style={{
              backgroundColor: 'none',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1rem',
            }}
          >
            Price Range
          </Accordion.Header>
          <Accordion.Body>
            <Row className="mb-3 mt-3">
              <Col md={12}>
                {/* <> */}
                {/* <Form.Label>Price Range</Form.Label> */}
                <Form.Range />
                {/* </> */}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Discount</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Product Rating</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon style={{ color: 'Orange' }} />
                    <StarIcon style={{ color: 'Orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5">
                    <Form.Check style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5">
                    <Form.Check />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Vendor Rating</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5" style={{ color: 'orange' }}>
                    <Form.Check />
                    <StarIcon style={{ color: 'Orange' }} />
                    <StarIcon style={{ color: 'Orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5">
                    <Form.Check style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Row md={6} className="pr-0.5">
                    <Form.Check />
                    <StarIcon style={{ color: 'orange' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                    <StarIcon style={{ color: 'gray' }} />
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category Related</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={12} style={{ border: 'none' }}>
                <ListGroup>
                  <ListGroup.Item action variant="light">
                    Audio & Video
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Accessories
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Batteries
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Chargers & Accessories
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Microphones
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Mounts
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    PowerProtection
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    Other Accessories
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Specification</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  className="mb-3 pl-3"
                  controlId="formHorizontalCheck"
                >
                  <Form.Check label="Thermocool" />
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* </Col> */}
      {/* </Row> */}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  /* border: 0.5px solid #bdbcdb; */
  /* background-color: white; */
  /* width: 20%; */
  /* height: 100%; */
  flex: 1;
  height: 100%;
  display: block;
  ${p => p.theme.direction['padding-right']}: 2.5rem;
`;

const EmailField = styled.input`
  /* height: 69px; */
  /* max-width: 350px; */
  /* min-width: 50px;
  margin-top: auto;
  margin-bottom: auto; */

  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.colorText};

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #cac1c1;
    ${p => p.theme.direction['padding-right']}: 50px;
  }

  ${customMedia.lessThan('medium')`
    max-width: 150px;
  `};

  ${customMedia.lessThan('xmedium')`
    max-width: 120px;   
  `};

  ${customMedia.lessThan('small')`
    max-width: 300px;
    margin-bottom: 10px;
    margin-left: 60px;
  `};
`;
