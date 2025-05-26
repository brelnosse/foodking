import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import { colors } from "../../utils/style/colors";
import { Loader } from "../../utils/style/Loader";
import Error from "../Error";

const StyledNavbar = styled.div`
    background-color: transparent;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: center;
    gap: 20px;
`;
const Category = styled.span`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 15px 25px;
    border-radius: 50px;
    color: ${colors.borderColor};
    cursor: pointer;
    transition: all 0.2s;
    ${({isFilled}) => isFilled ? `
        border: 2px solid black;  
        background: black;
        color: ${colors.white};
    ` : `
        background: transparent;
        border: 2px solid ${colors.borderColor};  
        color: ${colors.borderColor};    
    `}
`;

function Navbar({ isActive, setIsActive, url, setUrl}) {
    const {data, error, isLoading} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const categories = data.categories || [];

    return (
        <StyledNavbar>
            {isLoading ? <Loader /> : 
                (
                    !error ?
                    ( categories.length > 0 ?
                        categories.map((category, index) =><Category key={category.idCategory} isFilled = {parseInt(isActive.catId)-1 === index} onClick={(e)=> {
                            setIsActive({catId: parseInt(category.idCategory), catName: category.strCategory})
                            setUrl("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category.strCategory);
                        }}>{category.strCategory}</Category>) : <Error message="Aucune catégorie trouvée"/>
                    ): <Error message="Une erreur est survenue lors de la récupération des données. Vérifier votre connexion internet." hasImage={false} textColor={"red"}/>
                )
            }
        </StyledNavbar>
    );
}
export default Navbar;