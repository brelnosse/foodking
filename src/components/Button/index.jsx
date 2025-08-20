import styled from "styled-components";
import { colors } from "../../utils/style/colors";

const StyledButton = styled.button`
    padding: 15px;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    border: 2px solid ${colors.primary};
    ${({$isPrimary, $loading}) => $isPrimary && !$loading ? `
        &:hover{
            background-color: ${colors.primaryDark};
        }
        background-color: ${colors.primary};    
        color: ${colors.white};
    ` : $isPrimary && $loading ? `
        background-color: ${colors.white};    
    `
    : `
        background-color: ${colors.white};
        color: ${colors.primary};
    `}
    @media (max-width: 700px){
        padding: 10px;
    } 
`;

function Button({children, isPrimary, loading, ...props}){
    return (
        <StyledButton $isPrimary={isPrimary} $loading={loading} {...props}>{children}</StyledButton>
    );
}

export default Button;