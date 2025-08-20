import styled from "styled-components";
import { colors } from "../../utils/style/colors";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavContainer = styled.div`
    background-color: ${colors.smokeWhite};
    padding: 5px;
    border-radius: 5px;
`;

const Favorite = styled.div`
    padding: 15px 20px;
    background-color: white;
    margin-top: 5px;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        background-color: rgba(146, 146, 146, 0.06);
    }
`;

export default function Favorites(){
    return (
        <div style={{paddingTop: 90, paddingLeft: 20, paddingRight: 20}}>
            <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
                Your favorites
            </h1>
            <FavContainer>
                <Favorite>
                    <h4>Eru</h4>
                    <span><FontAwesomeIcon icon={fas.faHeart}/></span>
                </Favorite>
            </FavContainer>            
        </div>
    );
}