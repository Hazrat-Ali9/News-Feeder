import { useContext, useState } from "react";
import searchIcon from "../../../assets/icons/search.svg";
import { SearchText } from "../../../Context/context";
import UseDebounce from "../../../Hooks/UseDebounce";

const Search = () => {
  const [isHide, setIsHide] = useState(false);
  const {searchText,setSearchText} = useContext(SearchText);

  const doSearch = UseDebounce((term) => {
    setSearchText(term)
  }, 1000);

  const handleChange=(e)=>{
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <div className="flex items-center ">
      {
      isHide && 
      <input
      onChange={handleChange}
      className="border-2 border-black px-2 text-[1rem]" type="text" />
      }
      <img onClick={() => setIsHide(!isHide)} src={searchIcon} />
    </div>
  );
};

export default Search;
