import styled from 'styled-components'
import { colors } from '../../utils/style/colors';
import Ingredient from '../Ingredient'; 

// Define common breakpoints for reusability
const breakpoints = {
  mobile: '776px',
  tablet: '1200px',
  laptop: '1200px',
  desktop: '1400px',
};

// Use these in your media queries
const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};

const StyledContainer = styled.div`
    margin: 20px 30px;
    display: flex;
    height: auto;
    position: relative;
    flex-direction: column; /* Default for larger screens */
    align-items: center;
    justify-content:center;
    @media ${device.tablet} {
        /* On tablets and smaller, stack elements vertically */
        flex-direction: column;
        align-items: center; /* Center items when stacked */
        margin: 15px 20px;
    }

    @media ${device.mobile} {
        /* On mobile, reduce margins further */
        margin: 10px 15px;
    }
`;

const MealBanner = styled.div`
    /* Default for larger screens */
    min-width: 600px;
    margin: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.tablet} {
        /* On tablets and smaller */
        min-width: unset; /* Remove min-width constraint */
        width: 100%; /* Take full width */
        margin: 20px 0; /* Adjust margin for stacking */
        display: flex; /* Allow content inside to be centered if needed */
        justify-content: center;
    }

    @media ${device.mobile} {
        /* On mobile */
        margin: 15px 0;
    }
`;

const StyledBannerImg = styled.img`
    /* Default for larger screens */
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 0px 16px 16px rgba(0,0,0,0.05);
    transition: all 0.3s;
    &:hover{
        transform: translateY(-10px);
    }

    @media ${device.tablet} {
        /* On tablets, reduce size */
        width: 300px;
        height: 300px; /* Assuming it's circular, maintain aspect ratio */
    }

    @media ${device.mobile} {
        /* On mobile, reduce size further */
        width: 200px;
        height: 200px;
    }
`;

const StyledTitlte = styled.h1`
    /* Default for larger screens */
    padding-top: 30px;
    padding-bottom: 30px;
    width: 400px;
    color: ${colors.black};
    text-align: left; /* Default alignment */

    @media ${device.tablet} {
        /* On tablets, adjust width and text alignment */
        width: 90%; /* Take more width */
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center; /* Center title when stacked */
    }

    @media ${device.mobile} {
        /* On mobile, further adjustments */
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 1.8em; /* Adjust font size for smaller screens */
    }
`;

const StyledCookSide = styled.div`
    padding-bottom: 30px;
    color: ${colors.black};
    /* No specific width, it will naturally flow */

    @media ${device.tablet} {
        padding-bottom: 20px;
        width: 90%; /* Ensure it doesn't span too wide */
    }

    @media ${device.mobile} {
        padding-bottom: 15px;
        width: 100%;
    }
`;

const StyleIngredientWrapper = styled.ul`
    padding-left: 50px; /* Default for larger screens */

    @media ${device.tablet} {
        padding-left: 20px; /* Reduce padding on smaller screens */
    }

    @media ${device.mobile} {
        padding-left: 15px; /* Even less padding on mobile */
    }
`;

const StyleIntructionsWrapper = styled.ul`
    /* No specific changes needed here unless list item styles need adjustment */
`;

const StyledP = styled.p`
    margin-top: 10px;
    text-indent: 20px;
    line-height: 30px;
    text-align: justify; /* Often good for long text */

    @media ${device.tablet} {
        text-indent: 15px;
        line-height: 26px;
        font-size: 0.95em;
    }

    @media ${device.mobile} {
        margin-top: 5px;
        text-indent: 10px;
        line-height: 24px;
        font-size: 0.9em;
    }
`;

const P = styled.p`
    margin-top: 10px;

    @media ${device.mobile} {
        margin-top: 5px;
        font-size: 0.9em;
    }
`;
function MealCard({title, picture, mealId, instructions, source, youtubeLink}){
    return (
        <StyledContainer>
            <MealBanner >
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