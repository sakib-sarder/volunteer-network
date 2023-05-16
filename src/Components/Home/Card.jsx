import { useEffect, useState } from "react";

const Card = ({ card }) => {
  const { img, title } = card;
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const colors = ["#FFBD3E", "#3F90FC", "#FF7044", "#421FCF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setRandomColor(colors[randomIndex]);
  }, []);

  return (
    <div className="  bg-base-100 shadow-xl">
      <figure className="h-96">
        <img src={img} alt="Shoes" className="h-full w-full" />
      </figure>
      <div className="px-2 py-3" style={{ backgroundColor: randomColor }}>
        <p className="text-white font-semibold text-lg text-center">{title}</p>
      </div>
    </div>
  );
};

export default Card;

// #FFBD3E #3F90FC #FF7044 #421FCF
