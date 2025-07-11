import notFound from "../../assets/notFound.png";

function Error({message, textColor, hasImage, picture}){
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
            {hasImage && <img src={picture ? picture : notFound} alt="Aucun plat trouvé" height={300}/>}
            <span style={{margin: 20, fontSize: 20, color: textColor}}>{message}</span>
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