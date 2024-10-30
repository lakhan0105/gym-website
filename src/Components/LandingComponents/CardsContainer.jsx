import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

// import images
import strengthTraining from "../../assets/cardImgs/strength-training.webp";
import personalTrainer from "../../assets/cardImgs/personal-trainer.webp";
import fatLoss from "../../assets/cardImgs/fatloss.webp";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function CardsContainer() {
  const data = [
    { id: 1, title: "fat loss", img: personalTrainer },
    { id: 2, title: "strength", img: strengthTraining },
  ];

  const [cardsData, setCardsData] = useState(data);
  const [currIndex, setCurrIndex] = useState(0);

  function nextCard() {
    if (currIndex >= cardsData.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex((prev) => {
        return prev + 1;
      });
    }
  }

  function prevCard() {
    if (currIndex <= 0) {
      setCurrIndex(cardsData.length - 1);
    } else {
      setCurrIndex((prev) => {
        return prev - 1;
      });
    }
  }

  const [isMobileView, setIsMobileView] = useState(true);

  // when page loads check if screen in mobile view or not
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex md:justify-center gap-4 md:gap-10 mb-12 w-full h-[350px] relative overflow-hidden">
        {cardsData?.map((cardData, index) => {
          return (
            <SingleCard
              key={cardData.id}
              {...cardData}
              index={index}
              currIndex={currIndex}
              isMobileView={isMobileView}
            />
          );
        })}

        {isMobileView && (
          <div>
            <button
              className="absolute top-[45%] right-0 text-white text-4xl p-0"
              onClick={nextCard}
            >
              <FaAngleRight />
            </button>

            <button
              className="absolute top-[45%] left-0 text-white text-4xl p-0"
              onClick={prevCard}
            >
              <FaAngleLeft />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CardsContainer;
