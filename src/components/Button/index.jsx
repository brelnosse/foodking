import styled from "styled-components";
import { colors } from "../../utils/style/colors";

const StyledButton = styled.button`
    padding: 15px;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
        border: 2px solid ${colors.primary};
    ${({$isPrimary}) => $isPrimary ? `
        &:hover{
            background-color: ${colors.primaryDark};
        }
        background-color: ${colors.primary};    
        color: ${colors.white};
    ` : `
        background-color: ${colors.white};
        color: ${colors.primary};
    `}
`;

function Button({children, isPrimary}){
    return (
        <StyledButton $isPrimary={isPrimary}>{children}</StyledButton>
    );
}

export default Button;