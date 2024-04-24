import { NewsContext } from "../Context/context";
import useNewsQuery from "../Hooks/useNewsQuery";


const NewsProvider = ({children}) => {

    const {newsData,loading,error} = useNewsQuery();

    return (
       <NewsContext.Provider value={{newsData,loading,error}}>
        {children}
       </NewsContext.Provider>
    );
};

export default NewsProvider;