import notFound from "../../assets/notFound.png";

function Error({message, textColor, hasImage, picture}){
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', maxWidth: 500}}>
            {hasImage && <img src={picture ? picture : notFound} style={{borderRadius: 20, textAlign: 'center'}} alt="Aucun plat trouvé" height={300}/>}
            <span style={{margin: 20, fontSize: 20, color: textColor, textAlign: 'center'}}>{message}</span>
        </div>        
    );
}

Error.defaultProps = {
    message: "",
    textColor: "black",
    hasImage: true,
    picture: false
}
export default Error;