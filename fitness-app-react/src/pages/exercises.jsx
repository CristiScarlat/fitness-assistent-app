import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExercises, getFilterData } from "../services/api";
import Card from "../components/card/card";
import SubHeaderFilter from "../components/subHeaderFilter/subHeaderFilter";

const Exercises = () => {
  const [filters, setFilters] = useState();
  const [exercises, setExercises] = useState([]);
  const [ selectedFilters, setSelectedFilters ] = useState({});


  const { categoryKey, categoryValue } = useParams();

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
    <div>
        <div className="filters">
          <SubHeaderFilter data={filters} onSelect={handleFillterOnSelect}/>
        </div>
        <hr/>
        <div className="exercises-list d-flex flex-wrap gap-2 justify-content-center">
        {exercises?.map((obj) => (
          <Card key={obj.id} label={obj.name} gif={obj.gifUrl} onClick={() => {}}/>
        ))}
        </div>
    </div>
  );
};

export default Exercises;
