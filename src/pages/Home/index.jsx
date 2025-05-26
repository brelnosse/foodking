import Hero from "../../components/Hero";
import Navbar from "../../components/Navbarmenu";
import { useFetch } from "../../utils/hooks";
import { useState } from "react";
import CardsWrapper from "../../components/CardsWrapper";

function Home(){
    const [isActive, setIsActive] = useState({
        catId: 1,
        CatName: 'Beef'
    });
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?c="+isActive.CatName);
    const {data, error, isLoading} = useFetch(url);
    const meals = data.meals || [];

    return (
    <div>
        <Hero />
        <Navbar isActive={isActive} setIsActive={setIsActive} url = {url} setUrl = {setUrl}/>
        <CardsWrapper meals = {meals} error = {error} isLoading = {isLoading} />
    </div>)
    ;
}
export default Home;