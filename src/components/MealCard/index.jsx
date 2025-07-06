import styled from 'styled-components'
import { colors } from '../../utils/style/colors';
import Ingredient from '../Ingredient'; 

const StyledContainer = styled.div`
    margin: 20px 30px;
    display: flex;
    height: auto;
    position: relative;
`;

const MealBanner = styled.div`
    min-width: 600px;
    margin: 30px;
    background-color: transparent;
`;
const StyledBannerImg = styled.img`
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 16px rgba(0,0,0,0.05);
    transition: all 0.3s;
    &:hover{
        transform: translateY(-10px)
    }
`;
const StyledTitlte = styled.h1`
    padding-top: 30px;
    padding-bottom: 30px;
    width: 400px;
    color: ${colors.black};
`;
const StyledCookSide = styled.div`
    padding-bottom: 30px;
    color: ${colors.black};
`;

const StyleIngredientWrapper = styled.ul`
    padding-left: 50px;
`;

const StyleIntructionsWrapper = styled.ul`
    // background-color: blue;
`;
const StyledP = styled.p`
    margin-top: 10px;
    text-indent: 20px;
    line-height: 30px;
`;
const P = styled.p`
    margin-top: 10px;
`;
function MealCard({title, picture, mealId, instructions, source, youtubeLink}){
    return (
        <StyledContainer>
            <MealBanner>
                <StyledBannerImg src={picture} alt="Logo du plat" /> 
                <StyledTitlte style={{textAlign: 'center', fontWeight: 100}}>{title}</StyledTitlte>
            </MealBanner>
            <StyledCookSide>
                <StyledTitlte>Ingredient(s)</StyledTitlte>
                <StyleIngredientWrapper>
                    <Ingredient mealId={mealId}/>
                </StyleIngredientWrapper>
                <StyledTitlte>Instruction(s)</StyledTitlte>
                <StyleIntructionsWrapper>
                    <StyledP style={{textAlign: 'justify'}}>{instructions}</StyledP>
                </StyleIntructionsWrapper> 
                {source !== null && source !== '' && <P>Source: <a href={source} target='_blank' rel='noreferrer'>{source}</a></P>}               
                {youtubeLink !== null && youtubeLink !== '' && <P>Youtube: <a href={youtubeLink} target='_blank' rel='noreferrer'>{youtubeLink}</a></P>}               
            </StyledCookSide>
        </StyledContainer>
    );
}
export default MealCard;