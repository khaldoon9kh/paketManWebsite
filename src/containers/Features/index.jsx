import React from 'react';
import './index.css';
import {
  Row, Col, Image, Container,
} from 'react-bootstrap';
import Slider from 'react-slick';
import SingleFeature from '../../components/SingleFeature';
import featuresData from './dataFeatures';

const Features = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container fluid className="features">
      <Row className="featureTitle">
        <Col className="featureTitleText">
          <h2>Features</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider
            {...settings}
          >
            {featuresData.map((feat) => (
              <SingleFeature
                key={feat.id}
                photo={feat.photo}
                featHead={feat.featHead}
                featText={feat.featText}
              />
            ))}
          </Slider>
        </Col>
        <Col>
          <Slider
        //   autoplay={settings.autoplay}
        //   autoplaySpeed={settings.autoplaySpeed}
            arrows={settings.arrows}
            dots={settings.dots}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
          >
            {featuresData.map((feat) => (
              <SingleFeature
                key={feat.id}
                photo={feat.photo}
                featHead={feat.featHead}
                featText={feat.featText}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
