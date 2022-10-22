import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFilterData } from "../services/api";
import Card from "../components/card/card";

const Home = () => {
  const [filterCategories, setFilterCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getFilterInfo() {
      try {
        const res = await getFilterData();
        setFilterCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilterInfo();
  }, []);

  return (
    <>
      <div className="row fluid p-4 home-container" style={{maxWidth: '70rem'}}>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            aspernatur ut alias quidem officiis repudiandae unde earum
            architecto consequuntur ex cupiditate eum omnis rerum sunt nisi
            aliquam eius, magnam maiores!
          </p>
          <p>
            Create account and you will be able to add to favorites your
            exercises and you can create your own collection of exercises as a
            daily trainning.
          </p>
          <Link to="/login">Create Account</Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="http://d205bpvrqc9yn1.cloudfront.net/0015.gif"
            alt="home exercise"
            width="100%"
          />
        </div>
      </div>
      <h4 className="text-center">
        Lots of exercises that can be filtered by{" "}
      </h4>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {filterCategories.map((obj) => (
          <Card key={obj.key} label={obj.label} gif={obj.gif} onClick={() => navigate(`/details/${obj.key}/${obj.label}`)}/>
        ))}
      </div>
    </>
  );
};

export default Home;
