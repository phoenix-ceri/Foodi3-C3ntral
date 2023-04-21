import React from "react";


const HeroImage = ({ imageUrl, altText }) => {
  return (
    <section className="hero-image">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src={imageUrl}
              alt={altText}
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
