import React from "react";
import SingleCard from "./SingleCard";

// import images
import strengthTraining from "../assets/cardImgs/strength-training.webp";
import personalTrainer from "../assets/cardImgs/personal-trainer.webp";
import fatLoss from "../assets/cardImgs/fatloss.webp";

function CardsContainer() {
  const cardsData = [
    {
      title: "fat loss",
      img: personalTrainer,
    },

    {
      title: "strength",
      img: strengthTraining,
    },
  ];

  return (
    <div className="flex justify-center gap-10 bg-blac mb-12">
      {cardsData.map((cardData) => {
        return <SingleCard {...cardData} />;
      })}
    </div>
  );
}

export default CardsContainer;
