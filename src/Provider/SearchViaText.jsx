import {  useState } from "react";
import { SearchText } from "../Context/context";

const SearchViaText = ({children}) => {
    const [searchText,setSearchText] = useState('');
    
    return (
        <SearchText.Provider value={{searchText,setSearchText}}>
            {children}
        </SearchText.Provider>
    );
};

export default SearchViaText;