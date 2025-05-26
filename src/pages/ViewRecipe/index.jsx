import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import Error from "../../components/Error";
import MealCard from "../../components/MealCard";
import {Loader} from '../../utils/style/Loader';
import GobackBtn from "../../components/GobackBtn";

function ViewRecipe(){
    const {mealId} = useParams();
    const {data, error, isLoading} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ mealId);
    const meal = data.meals || [];
    console.log(meal);
    return (
        <div>
            <GobackBtn />
            <div className="container">
                {isLoading ?  <Loader /> :
                    error ? <Error message={"Erreur lors de la récupération des plats. Vérifier votre connexion internet."} hasImage={true} textColor="red"/> : (
                        meal.length === 0 ? <Error message={"Le plat n'a pas été trouvé."}/> : (
                            <MealCard 
                                title={meal[0].strMeal}
                                picture = {meal[0].strMealThumb}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}
export default ViewRecipe;