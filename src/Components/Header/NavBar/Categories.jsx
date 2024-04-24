import { useContext } from "react";
import { CategoriesContext } from "../../../Context/context";

const Categories = () => {

    const {setText} = useContext(CategoriesContext);

    const handleCategories =(text)=>{
        setText(text);
    }

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li className="btn glass">
          <a onClick={()=>handleCategories('general')} href="#">General</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('business')} href="#">Business</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('entertainment')} href="#">Entertainment</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('health')} href="#">Health</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('science')} href="#">Science</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('sports')} href="#">Sports</a>
        </li>
        <li>
          <a onClick={()=>handleCategories('technology')} href="#">Technology</a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
