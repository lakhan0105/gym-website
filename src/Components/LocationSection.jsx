import React from "react";

// import map image
import mapImg from "../assets/map2.webp";

function LocationSection() {
  return (
    <section className="section-center">
      <div className="w-full flex justify-center py-10 object-cover relative">
        <a href="https://maps.app.goo.gl/aKwWXwwUqBWCVKsL7">
          <img src={mapImg} alt="not found" />
        </a>
      </div>
    </section>
  );
}

export default LocationSection;
