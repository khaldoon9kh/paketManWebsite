import React from "react";
import "./index.css";
import {Row, Col, Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "./dataFeatures";

const Features = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
        <Container className="features">
          <Slider
            dots={settings.dots}
            infinite={settings.infinite}
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
        </Container>
    );
};

export default Features;