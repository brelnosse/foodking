import { Loader } from "../../utils/style/Loader";
import Card from "../Card";
import styled from "styled-components";
import Error from '../Error';
const StyledCardsWrapper = styled.div`
    padding: 30px 30px;
    padding-top: 70px;
    display: flex;
    gap: 20px;
    row-gap: 75px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`;

function CardsWrapper({isLoading, error, meals}){
    return (
        <StyledCardsWrapper>
            {isLoading ? <Loader/> : (
                error ? <Error message={"Erreur lors de la récupération des plats. Vérifier votre connexion internet."} hasImage={true} textColor={"red"}/> : 
                (
                    meals.length === 0 ? <Error message={"Aucun résultat trouvé"}/> :
                    meals.map((meal) => <Card key={meal.idMeal} picture={meal.strMealThumb} title={meal.strMeal} id={meal.idMeal}/>)
                )
            )}
        </StyledCardsWrapper>
    );
}
export default CardsWrapper;