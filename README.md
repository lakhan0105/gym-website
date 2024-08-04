# Gym website 

This is a website for a gym named ms-fitness. 
This website is created using React and Tailwind CSS


<!-- temp -->
import React, { useEffect } from "react";

<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-embed-text--0" src="https://embed-v2.testimonial.to/t/-O3OPDIDsJZBiIxoWYV4?design=" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-embed-text--O3OPDIDsJZBiIxoWYV4");</script>

const testimonialsData = [
  `<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
  <iframe id="testimonialto-embed-text--0" src="https://embed-v2.testimonial.to/t/-O3OPDIDsJZBiIxoWYV4?design=" frameborder="0" scrolling="no" width="100%" style="min-height: 400px;"></iframe>
  <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-embed-text--0");</script>`,
  `<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
  <iframe id="testimonialto-embed-text--1" src="https://embed-v2.testimonial.to/t/-O3OPDIDsJZBiIxoWYV4?design=" frameborder="0" scrolling="no" width="100%" style="min-height: 400px;"></iframe>
  <script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-embed-text--1");</script>`,
  // Add more testimonial embed codes as needed
];

function Testimonials() {


  return (
    <div className="w-full">
      {testimonialsData.map((item, index) => (
        <div
          key={index}
          className="mb-10"
          dangerouslySetInnerHTML={{
            __html: item,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Testimonials;
