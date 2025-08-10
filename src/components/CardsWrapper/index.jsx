import  Loader  from "../../utils/style/Loader";
import Card from "../Card";
import styled from "styled-components";
import Error from '../Error';
import HintCard from "../HintCard";
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
    const items = [1,1,1,1,1,1,1,1,1]
    return (
        <StyledCardsWrapper>
            {
                error ? <Error message={"Erreur lors de la récupération des plats. Vérifier votre connexion internet."} hasImage={true} textColor={"red"}/> : 
                (
                    !isLoading && meals.length === 0 ? <Error message={"Aucun résultat trouvé"} hasImage={true}/> :
                    isLoading ? items.map((el, ind)=> <HintCard key={ind}/>) :
                    meals.map((meal) => <Card key={meal.idMeal} picture={meal.strMealThumb} title={meal.strMeal} id={meal.idMeal} isLoading={isLoading}/>)
                )
            }
        </StyledCardsWrapper>
    );
}
export default CardsWrapper;