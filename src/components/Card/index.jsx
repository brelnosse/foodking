import styled from "styled-components";
import { colors } from "../../utils/style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const StyledCard = styled.div`
    width: 250px;
    height: 250px;
    background-color: white;
    box-shadow: 0px 0px 8px 8px rgba(0,0,0,0.02);
    border-radius: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;
    &:hover{
        transform: translateY(-5px);
    }
`;
const StyledImage = styled.img`
    height: 190px;
    width: 190px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: -70px;
    box-shadow: 0px 10px 12px 12px rgba(0,0,0,0.03);
`;
const StyledTitle = styled.span`
    padding: 20px 0px;
    flex: 1;
`;
const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0px;
    width: 100%;
`;
const StyledButton = styled.button`
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    font-size: 0.9em;
    border-radius: 8px;
    color: ${colors.green};
    font-weight: bold;
    transition: all 0.2s;
    background-color: ${colors.fadeGreen};
    text-decoration: none;
    &:hover{
        background-color: ${colors.green};
        color: ${colors.white};
    }
`;
function Card({picture, title, id}){
    const fulltitle = title;
    if(title != null){
        title = title.length <= 15 ? title : title.slice(0,15)+'...'; 
    }
    const navigate = useNavigate();
    useEffect(()=>{
        
    },[]);
    return (
            <StyledCard>
                <StyledImage 
                    src={picture} 
                    alt="Illustration du plat" 
                />
                <StyledTitle>{title}</StyledTitle>
                <hr style={{width: "100%", color: colors.borderColor}}/>
                <StyledFooter>
                    <span style={{fontSize: 22, marginRight: 10, cursor: 'pointer'}}><FontAwesomeIcon icon={far.faHeart} color={colors.pink}/></span>
                    <StyledButton 
                        onClick={()=>{
                            navigate('/viewRecipe/'+fulltitle.split(' ').join('-'), {state:{
                                id: id,
                                name: fulltitle
                            }});
                        }}
                        >View Recipe</StyledButton>
                </StyledFooter>
            </StyledCard>
    )
    }
export default Card;