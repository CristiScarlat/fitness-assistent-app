import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFilterData, getExercises } from "../services/api";

const Details = () => {
    
    const params = useParams();
    
    useEffect(() => {
        getFilterData(params.category)
        .then(res => {
            const requests = res.data.data.map(value => {
                return getExercises({
                    [params.category]: value,
                    pageNo: 1,
                    pageQty: 1
                })
            });
            Promise.all(requests).then(res => {
                console.log(res)
            })
        })
    }, [])
    
    return(
        <div></div>
    )
}

export default Details;