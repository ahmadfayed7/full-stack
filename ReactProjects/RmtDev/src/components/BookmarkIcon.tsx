import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookMarksContext } from "../contexts/BookMarksContext";

export default function BookmarkIcon({id}: {id:number}) {
  
   const context =useContext(BookMarksContext);
   if(!context)
   {
    throw new Error("context is empty");
     
   }
   const {BookMarksIds,handleToggleBookmark}=context;

  return (
    <button onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
     className="bookmark-btn">
      <BookmarkFilledIcon className={`
        ${BookMarksIds.includes(id) ? "filled" : ""}
      `}/>
    </button>
  );
}
