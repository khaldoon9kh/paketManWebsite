import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import Slider from "react-slick";
import SingleFeature from "../../components/SingleFeature";
import featuresData from "./dataFeatures";
import YellowCercle from "../../assests/pics/YellowCercle";
import i18next from "i18next";

const Features = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: ".slider-nav",
    fade: true,
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => <div className="custumeDot"></div>,
  };

  const settingsPic = {
    asNavFor: ".slider-for",
  };

  return (
    <Container id="features" fluid className="featuresContainer">
      <Row className="featuresTitle">
        <h2 className={i18next.t("featureTitleText_ru") + " featureTitleText"}>{i18next.t("navbar.features")}</h2>
        <YellowCercle className="yellowCercle" />
        <YellowCercle className="gryeCercle" />
      </Row>
      <Row className="sliderCont">
        <Col sm={6} className="sliderTexts">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider) => setSlider1(slider)}
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
        <Col sm={6} className="sliderImgCont">
          <Slider
            speed={settings.speed}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
            fade={settings.fade}
            arrows={settings.arrows}
            className="sliderPic"
            {...settingsPic}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
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
