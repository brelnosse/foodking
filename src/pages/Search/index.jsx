import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import CardsWrapper from "../../components/CardsWrapper";
import { HOST } from "../../utils/style/colors";

function Search(){
    const {MealName} = useParams();
    const {data, error, isLoading} = useFetch(HOST+"/api/recipes/search/"+MealName);
    const meals = data.recipes || [];
    return (
    <div className="resultsContainer" style={{paddingTop: 90}}>
        <h3 style={{margin: "20px 30px", fontSize: "1.5em", textAlign: "center"}}>
            {MealName && MealName.trim() !== '' && <span style={{color: "red", fontWeight: "bold"}}>{meals.length} </span>}
            {MealName && MealName.trim() !== '' && ' résultats pour '+MealName}
        </h3>
        <CardsWrapper meals={meals} error={error} isLoading={isLoading}/>
    </div>
    );
}
export default Search;