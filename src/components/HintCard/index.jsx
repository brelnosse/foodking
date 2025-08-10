import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/style/colors";
import {Link} from "react-router-dom";

const StyledCard = styled.div`
    width: 250px;
    height: 250px;
    background-color: rgba(251, 251, 251, 1);
    box-shadow: 0px 0px 8px 8px rgba(0,0,0,0.02);
    border-radius: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s;
`;
const line = keyframes`
    from{
        background-position: 0% 0%;
    }
    to{
        background-position: 100% 100%;
    }
`;
const StyledImage = styled.div`
    height: 190px;
    width: 190px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s;
    background-image: linear-gradient(to right, rgba(205, 205, 205, 1), rgba(230, 230, 230, 1));
    margin-top: -70px;
    background-size: 200% 200%;
    box-shadow: 0px 10px 12px 12px rgba(0,0,0,0.03);
    animation: ${line} linear infinite 2s;
`;

const StyledTitle = styled.span`
    padding: 20px 90px;
    margin:5px;
    border-radius: 5px;
    background-image: linear-gradient(to left, rgba(219, 219, 219, 1), rgba(239, 239, 239, 1));
    background-size: 150% 150%;
    animation: ${line} linear infinite 2s;
`;
const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0px;
    width: 100%;
`;
const StyledButton = styled(Link)`
    padding: 10px 15px;
    width: 120px;
    height: 35px;
    border: none;
    border-radius: 8px;
    color: ${colors.green};
    font-weight: bold;
    transition: all 0.2s;
    background-image: linear-gradient(to right, rgba(219, 219, 219, 1), rgba(239, 239, 239, 1));
    background-size: 150% 150%;
    animation: ${line} linear infinite 2s;
`;
function HintCard(){
    return (
        <StyledCard>
            <StyledImage  />
            <StyledTitle></StyledTitle>
            <hr style={{width: "100%", color: colors.borderColor}}/>
            <StyledFooter>
                <StyledButton></StyledButton>
            </StyledFooter>
        </StyledCard>
    );
}
export default HintCard;