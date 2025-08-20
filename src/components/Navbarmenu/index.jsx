import styled from "styled-components";
import { useFetch } from "../../utils/hooks";
import Error from "../Error";
import Category from "../Category";
import HintCategory from "../HintCategory";
import { HOST } from "../../utils/style/colors";
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
    const {data, error, isLoading} = useFetch(HOST+"/api/recipes/categories");
    const categories = data.categories || [];
    const items = [1,1,1,1,1,1,1,1,1,1,1,1];
    
    return (
        <StyledNavbar>
            <Category 
                key={0} 
                $isFilled = {isActive.catId === 0} 
                idCat={0}
                setIsActive={setIsActive}
                setUrl={setUrl}
                cat={'all'}
            />            
            {
                !error ?
                ( 
                    // !isLoading && categories.length > 0 ?
                    isLoading ?
                        items.map((el, key)=><HintCategory key={key}/>):
                        categories.map((category, index) =>{
                            return <Category 
                                key={index+1} 
                                $isFilled = {isActive.catId === index+1} 
                                idCat={index+1}
                                setIsActive={setIsActive}
                                setUrl={setUrl}
                                cat={category}
                            />
                        }
)
                    // ): <Error message="Aucune catégorie trouvée"/>
                ): <Error message="Une erreur est survenue lors de la récupération des données. Vérifier votre connexion internet." hasImage={false} textColor={"red"}/>
            }
        </StyledNavbar>
    );
}
export default Navbar;