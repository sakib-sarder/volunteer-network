import Card from "./Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      {/* cards  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {cards.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
