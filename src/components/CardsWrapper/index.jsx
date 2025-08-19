import Card from "../Card";
import styled from "styled-components";
import Error from '../Error';
import HintCard from "../HintCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../utils/style/colors";
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
    const [likesObj, setLikesObj] = useState([]);

    useEffect(()=>{
        axios.get(HOST+'/api/recipes/likes/all')
        .then((res)=>{
            setLikesObj(res.data.data)
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        <StyledCardsWrapper>
            {
                error ? <Error message={"Erreur lors de la récupération des plats. Vérifier votre connexion internet."} hasImage={true} textColor={"red"}/> : 
                (
                    !isLoading && meals.length === 0 ? <Error message={"Aucun résultat trouvé"} hasImage={true}/> :
                    isLoading ? items.map((el, ind)=> <HintCard key={ind}/>) :
                    meals.map((meal, index) => 
                        <Card 
                            key={index} 
                            picture={meal.image_url} 
                            title={meal.title} 
                            id={meal._id} 
                            isLoading={isLoading} 
                            hasLiked = {
                                (()=>{
                                    let v = false;
                                    for(let i = 0; i < likesObj.length-1; i++){
                                        if(likesObj[i].id === meal._id){
                                            if(likesObj[i].likes.includes(likesObj[likesObj.length-1])){
                                                // console.log(likesObj[i].likes, likesObj[likesObj.length-1])
                                                // console.log(v)
                                                return true
                                            }
                                        }
                                    }
                                })()
                            }/>)
                )
            }
        </StyledCardsWrapper>
    );
}
export default CardsWrapper;