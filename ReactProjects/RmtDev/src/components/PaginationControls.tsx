import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function PaginationControls({setCurrentPage,currentPage,totalPages}: {setCurrentPage:React.Dispatch<React.SetStateAction<number>>,currentPage:number, totalPages:number}) {
 
  return <section className="pagination">
   { currentPage>1 && (<button onClick={()=>{
      setCurrentPage(currentPage-1);
    }} 
    className="pagination__button pagination__button--back "> { <><ArrowLeftIcon/> Page {currentPage-1}</>} </button>)}
   { currentPage<totalPages &&( <button onClick={()=>{
      setCurrentPage(currentPage+1);
    }}  className="pagination__button pagination__button--next" > Page {currentPage+1} {<ArrowRightIcon/>}</button>)}
  </section>;
}


