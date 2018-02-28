// Package Imports
import React from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';

function CarouselComp(props) {
  return (
    <div className="margin-top-fifteen">
      <Row>
        <Col xs={12}>
          <Carousel className="margin-top-fifteen carousel-custom-height">
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="900x500" src="https://drive.google.com/uc?id=1e-p4K9VRJTMWFTL50NAEM6STdN-iLOY1" />
            </Carousel.Item>
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="900x500" src="https://drive.google.com/uc?id=1Y-Sqm7IKpgRdCbmihX18_JDLLxWoxyG3" />
            </Carousel.Item>
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="900x500" src="https://drive.google.com/uc?id=1YwfVnHWaysVc2IqcuPZ6jj-1_7LOi-An" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselComp;
