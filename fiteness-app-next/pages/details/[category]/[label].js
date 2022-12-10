import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { getCategoryValues } from "../../../services/api";
import Card from "../../../components/card";
import { connect } from "react-redux";

const Details = ({ isLogedIn }) => {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  const label = router.query.label
  const category = router.query.category;

  useEffect(() => {
    if(category){
        getCategoryValues(category)
        .then((res) => {
          console.log(res)
          setCards(res.data);
        })
        .catch((error) => console.log(error));
    }

  }, [router]);

  const handleRedirectToExercises = (categoryValue) => {
    if(!isLogedIn)return;
    router.push(`/exercises/${category}/${categoryValue}`)
  }

  return (
    <>
      <h2 className="text-center mb-5">Choose your {label}</h2>
      <div className="grid-container">
        {cards.length > 0 &&
          cards.map((card) => (
            <Card 
            key={card.id} 
            label={card[category]} 
            gif={card.gifUrl} 
            buttonLabel={isLogedIn ? `See all ${card[category]} exercises` : `Please Login to see all ${card[category]} exercises`}
            onClick={() => handleRedirectToExercises(card[category])}/>
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
