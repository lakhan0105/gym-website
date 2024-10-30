import React from "react";

// import map image
import mapImg from "../../assets/map2.webp";

function LocationSection() {
  return (
    <section className="section-center" id="location">
      <div className="w-full flex justify-center pt-5 pb-10 object-cover relative">
        <a href="https://maps.app.goo.gl/aKwWXwwUqBWCVKsL7">
          <img src={mapImg} alt="not found" />
        </a>
      </div>
    </section>
  );
}

export default LocationSection;
