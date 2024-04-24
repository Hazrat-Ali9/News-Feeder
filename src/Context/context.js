import { createContext } from "react";

const NewsContext = createContext([]);
const CategoriesContext = createContext([]);
const SearchText = createContext('');

export {NewsContext,CategoriesContext,SearchText};