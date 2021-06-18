import React from "react";
import "./index.css";

const SingleFeature = ({ photo, featHead, featText }) => {
    console.log(featText)
  return (
    <div className="featureBox">
      <h2 className="feature">{featHead}</h2>
      <img src={photo} alt="food" className="featImg img-fluid" />
      <p>{featText}</p>
    </div>
  );
};

export default SingleFeature;