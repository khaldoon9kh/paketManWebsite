import React, { useRef, useEffect } from "react";
import "./index.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "./dataFeatures";

const Features = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: slider2.current,
    fade: true,
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => <div className="custumeDot"></div>,
  };

  return (
    <Container id="features" fluid className="featuresContainer">
      <Row className="featuresTitle">
        <h2 className="featureTitleText">Features</h2>
      </Row>
      <Row className="sliderCont">
        <Col sm={6} className="sliderTexts">
          <Slider {...settings} ref={slider1}>
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
        <Col sm={6} className="sliderImgCont">
          <Slider
            arrows={settings.arrows}
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            className="sliderPic"
            asNavFor={slider1.current}
            ref={slider2}
          >
            {featuresData.map((feat) => (
              <Image src={feat.photo} key={feat.id} />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
