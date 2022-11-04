import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoryValues } from "../services/api";
import Card from "../components/card/card";

const Details = () => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const isLogedIn = false;

  useEffect(() => {
    getCategoryValues(params.category)
      .then((res) => {
        setCards(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="text-center mb-5">Choose your {params.label}</h2>
      <div className="grid-container">
        {cards.length > 0 &&
          cards.map((card) => (
            <Card 
            key={card.id} 
            label={card[params.category]} 
            gif={card.gifUrl} 
            buttonLabel={isLogedIn ? `See all ${card[params.category]} exercises` : `Please Login to see all ${card[params.category]} exercises`}/>
          ))}
      </div>
    </>
  );
};

export default Details;
