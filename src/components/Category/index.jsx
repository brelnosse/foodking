import styled from "styled-components";
import { colors, HOST } from "../../utils/style/colors";

const CategoryS = styled.span`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 15px 25px;
    border-radius: 50px;
    color: ${colors.borderColor};
    cursor: pointer;
    transition: all 0.2s;
    ${({$isFilled}) => $isFilled ? `
        border: 2px solid black;  
        background: black;
        color: ${colors.white};
    ` : `
        background: transparent;
        border: 2px solid ${colors.borderColor};  
        color: ${colors.borderColor};    
    `}
`;

export default function Category({$isFilled, setIsActive, setUrl, idCat, cat}){
    return (
        <CategoryS 
            $isFilled = {$isFilled} 
            onClick={()=> {
                setIsActive({catId: parseInt(idCat), catName: cat})
                setUrl(HOST+"/api/recipes/categories/"+cat);
            }}>
            {cat}
        </CategoryS>        
    );
}