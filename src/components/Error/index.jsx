import styled from "styled-components";
import notFound from "../../assets/notFound.png";

const ErrorMsg = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    max-width: 500;
    background-color: rgba(216, 2, 2, 0.07);
    border-radius: 5px; 
    padding: 20px;
`;

const Img = styled.img`
    border-radius: 20px; 
    text-align: center;
    height: 300px;
    object-fit: cover;
    @media (max-width: 780px){
        width: 100%;
    }
`;
function Error({message, textColor, hasImage, picture}){
    return (
        <ErrorMsg>
            {hasImage && <Img src={picture ? picture : notFound}  alt="Aucun plat trouvé"/>}
            <span style={{paddingTop: 10, fontSize: 20, color: textColor, textAlign: 'center'}}>{message}</span>
        </ErrorMsg>        
    );
}

Error.defaultProps = {
    message: "",
    textColor: "black",
    hasImage: true,
    picture: false
}
export default Error;