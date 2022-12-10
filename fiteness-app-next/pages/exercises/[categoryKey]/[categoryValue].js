import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getExercises, getFilterData } from "../../../services/api";
import Card from "../../../components/card";
import SubHeaderFilter from "../../../components/subHeaderFilter";
import { useSelector } from "react-redux"

const Exercises = () => {
  const [filters, setFilters] = useState();
  const [exercises, setExercises] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  const user = useSelector(state => state.auth.user)
  console.log(user)

  const { query: { categoryKey, categoryValue } } = useRouter();

  const fetchExercisesList = async () => {
    const res = await getExercises({
      [categoryKey]: categoryValue,
      ...selectedFilters
    });
    return res.data.exercises;
  }

  useEffect(() => {
    async function getData() {
      const exercises = await fetchExercisesList();
      const filterRes = await getFilterData("all");
      const filterCategories = filterRes.data
        .map((obj) => obj.key)
        .filter((category) => category !== categoryKey);

      const temp = {};
      filterCategories.forEach((filterCat) => {
        temp[filterCat] = [];
        exercises.forEach((obj) => {
          if (!temp[filterCat].includes(obj[filterCat])) {
            temp[filterCat].push(obj[filterCat]);
          }
        });
      });
      setFilters(temp);
      setExercises(exercises);
    }
    getData();
  }, []);

  useEffect(() => {
    fetchExercisesList()
      .then(res => setExercises(res))
  }, [selectedFilters])

  const handleFillterOnSelect = (key, value) => {
    setSelectedFilters(state => ({
      ...state,
      [key]: value
    }))
  }

  return (
    (user && user !== "") ? <div>
      <div className="filters">
        <SubHeaderFilter data={filters} onSelect={handleFillterOnSelect} />
      </div>
      <hr />
      <div className="exercises-list d-flex flex-wrap gap-2 justify-content-center">
        {exercises?.map((obj) => (
          <Card key={obj.id} label={obj.name} gif={obj.gifUrl} onClick={() => { }} />
        ))}
      </div>
    </div> : <p className="text-center">Please login to see this page</p>
  );
};

export default Exercises;
