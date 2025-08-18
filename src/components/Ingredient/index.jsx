import { useFetch } from "../../utils/hooks";
import { HOST } from "../../utils/style/colors";
import  Loader  from "../../utils/style/Loader";

function Ingredient({mealId}){
    const {data, isLoading} = useFetch(HOST+'/api/recipes/' + mealId);
    const meal = data.recipe || {};
    const ingredientArray = meal.ingredients ? JSON.parse(meal.ingredients[0]) : [];

    return (
        isLoading ? <Loader /> : 
        ingredientArray.length > 0 && ingredientArray.map((ingredient, index) =>
            <li key={ingredient+''+index} style={{marginTop: 10}}>
                {ingredient} 
            </li>
    ));
    
}
export default Ingredient;