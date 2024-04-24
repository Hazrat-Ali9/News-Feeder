import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../Context/context";


const  useNewsQuery=()=>{
    const [newsData,setNewsDate] = useState([]);

    const {text} = useContext(CategoriesContext);

    const [loading,setLoading] = useState({
        state : false,
        message: ''
    });

    const [error,setError] = useState(null);

    const fetchNewsData = async(category)=>{
        try{
            setLoading({
                ...loading,
                state:true,
                message:"News Data is fetching...."
            })

            const response = await fetch(`http://localhost:8000/v2/top-headlines?category=${category}`);

            if(!response.ok){
                const errorMessage = `fetching news data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            setNewsDate(data.articles)
        }
        catch(error){
            setError(error)
        }
        finally{
            setLoading({
                ...loading,
                state:false,
                message:''
            })
        }
    }

    useEffect(()=>{
        setLoading({
            ...loading,
            state:true,
            message: 'Searching for news...'
        })
        if(text !== ''){
            fetchNewsData(text)
        }else{
            fetchNewsData('general')
        }
    },[text])

    return {
        newsData,
        loading,
        error
    }
}

export default useNewsQuery;
