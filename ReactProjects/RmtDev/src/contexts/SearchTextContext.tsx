import { createContext, useState } from "react";
import { useDebounce } from "../lib/hooks";

type BookmarksContext={
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    SearchText: string;
    debouncedSearchText: string;
   
}

export const SearchTextContext = createContext<BookmarksContext| null>(null);

export default function SearchTextContextProvider({children}: {children: React.ReactNode}) {
const [SearchText, setSearchText] = useState("");
const debouncedSearchText = useDebounce(SearchText, 500);
        
   return (
 <SearchTextContext.Provider
 value={{
  setSearchText,
  SearchText,
  debouncedSearchText,

 }}>
    {children}
 </SearchTextContext.Provider>

);




}
