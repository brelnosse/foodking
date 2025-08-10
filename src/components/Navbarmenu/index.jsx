import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import Error from "../Error";
import Category from "../Category";
import HintCategory from "../HintCategory";
const StyledNavbar = styled.div`
    background-color: transparent;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 20px;
    width: 100%;
`;

function Navbar({ isActive, setIsActive, url, setUrl}) {
    const {data, error, isLoading} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const categories = data.categories || [];
    const items = [1,1,1,1,1,1,1,1,1,1,1,1];

    return (
        <StyledNavbar>
            {
                !error ?
                ( 
                    // !isLoading && categories.length > 0 ?
                    isLoading ?
                        items.map((el, key)=><HintCategory key={key}/>):
                        categories.map((category, index) =>
                            <Category 
                                key={category.idCategory} 
                                $isFilled = {parseInt(isActive.catId)-1 === index} 
                                catId = {category.idCategory}
                                setIsActive={setIsActive}
                                setUrl={setUrl}
                                cat={category.strCategory}
                            />
)
                    // ): <Error message="Aucune catégorie trouvée"/>
                ): <Error message="Une erreur est survenue lors de la récupération des données. Vérifier votre connexion internet." hasImage={false} textColor={"red"}/>
            }
        </StyledNavbar>
    );
}
export default Navbar;