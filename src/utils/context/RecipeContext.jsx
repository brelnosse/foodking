import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { HOST } from "../style/colors";

export const RecipeContext = createContext({
    likesObj: [],
    like: () => {},
    loading: false,
    error: null
});

export const RecipeContextProvider = ({children}) => {
    const [likesObj, setLikesObj] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchLikes = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${HOST}/api/recipes/likes/all`);
                setLikesObj(response.data.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching likes:', error);
                setError('Failed to fetch likes');
            } finally {
                setLoading(false);
            }
        };

        fetchLikes();
    }, []);
    
    const like = async (cid, setS) => {
        try {
            await axios.get(`${HOST}/api/recipes/like/${cid}`);
            setS(prevState => !prevState);
            
            // Optionally update the likesObj state here if needed
            // This depends on your API structure
            
        } catch (error) {
            console.error('Error liking recipe:', error);
            // Optionally show user feedback here
        }
    };
    
    return (
        <RecipeContext.Provider value={{
            likesObj, 
            like, 
            loading, 
            error
        }}>
            {children}
        </RecipeContext.Provider>
    );
};