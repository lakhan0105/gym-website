import React from "react";

function Testimonials() {
  return (
    <div
      className="w-[70%]"
      dangerouslySetInnerHTML={{
        __html: `<script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id='testimonialto-carousel-ms-fitness-tag-all-light' src="https://embed-v2.testimonial.to/carousel/all/ms-fitness?theme=light&autoplay=off&showmore=off&one-row=on&same-height=off&tag=all&arrowColor=9BA9B4" frameborder="0" scrolling="no" width="100%" style="min-height:350px;" ></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, '#testimonialto-carousel-ms-fitness-tag-all-light');</script>`,
      }}
    ></div>
  );
}

export default Testimonials;
