import React from "react";
import CardsContainer from "./CardsContainer";
import AdditionalPgms from "./AdditionalPgms";

function ProgramsSection() {
  return (
    <section
      className="relative section-center pt-14 pb-14 min-h-full"
      id="programs"
    >
      <h2 className="text-center text-4xl md:text-5xl text-white font-sans font-bold mb-10">
        Programs at msfitness
      </h2>

      <div className="bg-[#2a2a2a] pt-14 pb-10 px-5 max-w-[90%] ring-1 ring-white/20 md:max-w-[80%] m-auto rounded-lg">
        <CardsContainer />
        <AdditionalPgms />
      </div>
    </section>
  );
}

export default ProgramsSection;
