import React from "react";

function SingleCard({ title, img }) {
  const styleObj = {
    backgroundColor: "red",
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article
      style={styleObj}
      className="relative text-white w-[270px] md:w-[300px] h-[250px] md:h-[350px] bg-no-repeat rounded-xl overflow-hidden "
    >
      {/* bottom-gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-transparent"></div>

      <h2 className="absolute bottom-3 w-full text-center text-4xl text-slate-300 text-[28px] md:text-2xl capitalize font-semibold tracking-wide">
        {title}
      </h2>
    </article>
  );
}

export default SingleCard;
