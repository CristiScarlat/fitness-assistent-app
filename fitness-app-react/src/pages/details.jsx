import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoryValues } from "../services/api";
import Card from "../components/card/card";
import { connect } from "react-redux";

const Details = ({ isLogedIn }) => {
  const [cards, setCards] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryValues(params.category)
      .then((res) => {
        setCards(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleRedirectToExercises = (categoryValue) => {
    if(!isLogedIn)return;
    navigate(`/exercises/${params.category}/${categoryValue}`)
  }

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
            buttonLabel={isLogedIn ? `See all ${card[params.category]} exercises` : `Please Login to see all ${card[params.category]} exercises`}
            onClick={() => handleRedirectToExercises(card[params.category])}/>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const user = state.auth.user;
  const isLogedIn = user && user !== "";
  return {...ownProps, isLogedIn}
}

export default connect(mapStateToProps)(Details);
