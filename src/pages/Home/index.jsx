import Hero from "../../components/Hero";
import Navbar from "../../components/Navbarmenu";
import { useFetch } from "../../utils/hooks";
import { useState } from "react";
import CardsWrapper from "../../components/CardsWrapper";
import { HOST } from "../../utils/style/colors";
function Home(){
    const [isActive, setIsActive] = useState({
        catId: 0,
        CatName: 'main-course'
    });
    const [url, setUrl] = useState(HOST+"/api/recipes/");
    const {data, error, isLoading} = useFetch(url);
    const meals = data.recipes || [];

    return (
    <div style={{paddingTop: 90}}>
        <Hero />
        <Navbar isActive={isActive} setIsActive={setIsActive} url = {url} setUrl = {setUrl}/>
        <CardsWrapper meals = {meals} error = {error} isLoading = {isLoading} />
    </div>)
    ;
}
export default Home;