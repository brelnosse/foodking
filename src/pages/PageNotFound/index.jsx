import styled from 'styled-components';
import pagenotfound from '../../assets/pagenotfound.png';

const Img = styled.img`
    border-radius: 10px;
    max-width: 400px;
    height: 300px;
    object-fit: cover;
    @media (max-width: 780px){
        width: 100%;
    }
`;

function PageNotFound(){
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', margin: "20px 30px", paddingTop: 90}}>
            <h1 style={{margin: "20px 0px"}}>Oups...</h1>
            <Img src={pagenotfound} alt="Page non trouvée"/>
            <p style={{margin: "20px 0px", fontSize: 25, textAlign: "center", maxWidth: 500}}>Il semblerait que la page à laquelle vous tentez d'accéder <br/> n'existe pas.</p>
        </div>
    );
}
export default PageNotFound;