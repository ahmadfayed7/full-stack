import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../lib/hooks";
import { jobItemExtended } from "../lib/types";

type BookmarksContext={
    BookMarksIds : number[],
    handleToggleBookmark: (id: number) => void;
    JobItems : jobItemExtended[],
    isloading:boolean,

}

export const BookMarksContext = createContext<BookmarksContext| null>(null);

export default function BookmarksContextProvider({children}: {children: React.ReactNode}) {
    const [BookMarksIds, setBookMarksIds] =useLocalStorage<number[]>('bookmarks', []);

    const [JobItems,isloading]=useJobItems(BookMarksIds);

const handleToggleBookmark =(id:number)=>{
    if (BookMarksIds.includes(id)) {
        setBookMarksIds((prev) => prev.filter((item) => item !== id));
      } else {
        setBookMarksIds((prev) => [...prev, id]);
      }
};

        
   return (
 <BookMarksContext.Provider
 value={{
    BookMarksIds,
    handleToggleBookmark,
    JobItems,
    isloading,
 }}>
    {children}
 </BookMarksContext.Provider>

);




}
