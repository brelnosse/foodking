import { useFetch } from "../../utils/hooks";
import  Loader  from "../../utils/style/Loader";

function Ingredient({mealId}){
    const {data, isLoading} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId);
    const meal = data.meals || [];
    const ingredients = meal.length > 0 ? meal[0] : {};
    const ingredientArray = [];
    for(let i = 1; i <= 20; i++){
        if(ingredients[`strIngredient${i}`] !== null && ingredients[`strIngredient${i}`] !== ''){
            ingredientArray.push(ingredients[`strIngredient${i}`]); 
        }
    }
    return (isLoading ? <Loader /> : ingredientArray.length > 0 && ingredientArray.map((ingredient, index)=>
                <li key={ingredient+''+index} style={{marginTop: 10}}>
                    {ingredient} 
                </li>
            ));
    
}
export default Ingredient;