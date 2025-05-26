import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import CardsWrapper from "../../components/CardsWrapper";
import GobackBtn from "../../components/GobackBtn";
import styled from "styled-components";

function Search(){
    const {MealName} = useParams();
    const {data, error, isLoading} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+MealName);
    const meals = data.meals || [];

    return (
    <div className="resultsContainer">
        <GobackBtn />
        <h3 style={{margin: "20px 30px", fontSize: "1.5em", textAlign: "center"}}>
            <span style={{color: "red", fontWeight: "bold"}}>{meals.length} </span>
            résultats pour "{MealName}"
        </h3>
        <CardsWrapper meals={meals} error={error} isLoading={isLoading}/>
    </div>
    );
}
export default Search;