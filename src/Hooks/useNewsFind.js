import { useContext, useEffect, useState } from "react";
import { SearchText } from "../Context/context";

const useNewsFind = () => {
    const [foundedData, setFondedData] = useState([]);

    const { searchText } = useContext(SearchText);
    console.log(searchText)

    const [loading, setLoading] = useState({
        state: false,
        message: ''
    });

    const [error, setError] = useState(null);


    const fetchNewsBySearch = async (text) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "News Data is Searching...."
            })

            const response = await fetch(`http://localhost:8000/v2/search?q=${text}`);

            if (!response.ok) {
                const errorMessage = `Searching news data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            setFondedData(data.result);
        }
        catch (error) {
            setError(error)
        }
        finally {
            setLoading({
                ...loading,
                state: false,
                message: ''
            })
        }
    }

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: 'Searching for news...'
        })
       if(searchText !== ''){
        fetchNewsBySearch(searchText)
       }
    }, [searchText])


    return {
        foundedData,
        loading,
        error
    };

};

export default useNewsFind;