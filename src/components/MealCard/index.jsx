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
    width: 600px;
    background-color: transparent;
`;
const StyledBannerImg = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
const StyledTitlte = styled.h1`
    padding-bottom: 30px;
    text-align: center;
    color: ${colors.black};
`;
const StyledCookSide = styled.div`
    padding-bottom: 30px;
    text-align: center;
    color: ${colors.black};
`;

const StyleIngredientWrapper = styled.div`

`;
function MealCard({title, picture}){
    return (
        <StyledContainer>
            <MealBanner>
                <StyledTitlte>{title}</StyledTitlte>
                <StyledBannerImg src={picture} alt="Logo du plat" /> 
            </MealBanner>
            <StyledCookSide>
                <StyledTitlte>Ingredient(s)</StyledTitlte>
                <StyleIngredientWrapper>
                <Ingredient />
                </StyleIngredientWrapper>
            </StyledCookSide>
        </StyledContainer>
    );
}
export default MealCard;