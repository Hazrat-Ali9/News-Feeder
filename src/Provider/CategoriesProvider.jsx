import { useState } from "react";
import { CategoriesContext } from "../Context/context";


const CategoriesProvider = ({children}) => {

    const [text,setText] = useState('');

    return (
       <CategoriesContext.Provider value={{text,setText}}>
         {children}
       </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;