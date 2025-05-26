import {useState, useEffect} from 'react';

export function useFetch(url){
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        if(!url) return

        async function fetchData(){
            setIsLoading(true);
            try{
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
            }catch(error){
                setError(true);
            }finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, error, isLoading};
}