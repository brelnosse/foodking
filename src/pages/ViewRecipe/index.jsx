import { useFetch } from "../../utils/hooks";
import Error from "../../components/Error";
import MealCard from "../../components/MealCard";
import Loader from '../../utils/style/Loader';
import nodishes from '../../assets/nodishes.png'
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { HOST } from "../../utils/style/colors";

const Container = styled.div`
`;
function ViewRecipe(){
    const location = useLocation();
    const {data, error, isLoading} = useFetch(HOST+'/api/recipes/'+ location.state?.id);
    const meal = data.recipe || [];

    console.log(data)
    return (
        <div style={{paddingTop: 90}}>
            <Container>
                {isLoading ?  <Loader /> :
                    error ? <Error message={"Erreur lors de la récupération des plats. Vérifier votre connexion internet."} hasImage={true} textColor="red"/> : (
                        meal.length === 0 ? <Error message={"Le plat n'a pas été trouvé."} hasImage={true} picture={nodishes} /> : (
                            <MealCard 
                                title={meal.title}
                                picture = {meal.image_url ? meal.image_url : require('../../assets/cooking.png')}
                                mealId={meal._id}
                                instructions={meal.description}
                                source={meal.image_url}
                                youtubeLink={meal.video_url}
                            />
                        )
                    )
                }
            </Container>
        </div>
    );
}
export default ViewRecipe;