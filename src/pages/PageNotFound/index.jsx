import pagenotfound from '../../assets/pagenotfound.png';

function PageNotFound(){
    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', margin: "20px 30px", paddingTop: 90}}>
            <h1 style={{margin: "20px 0px"}}>Oups...</h1>
            <img src={pagenotfound} alt="Page non trouvée" style={{height: 400}}/>
            <p style={{margin: "20px 0px", fontSize: 25, textAlign: "center"}}>Il semblerait que la page à laquelle vous tentez d'accéder <br/> n'existe pas.</p>
        </div>
    );
}
export default PageNotFound;