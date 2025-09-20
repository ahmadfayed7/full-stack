import { forwardRef } from "react";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";
import { createPortal } from "react-dom";
import { useBookmarkContext } from "../lib/hooks";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {

  
const {isloading,JobItems}=useBookmarkContext();

  return createPortal(
      <>  {<ul className="bookmarks-popover">
        {isloading && <Spinner/>}
      {!isloading && JobItems && JobItems.map((item) => (
        <JobListItem key={item.id} item={item} ActiveJobItemId={item.id} />
      ))}
            
    </ul>}</>,
    document.body
  );


});
export default BookmarksPopover;



