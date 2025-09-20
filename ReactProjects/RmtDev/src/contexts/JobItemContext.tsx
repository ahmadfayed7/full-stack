import { createContext, useCallback, useMemo, useState } from "react";
import useSearchQuery, { useSearchTextContext } from "../lib/hooks";
import { NUM_RES_PER_PAGE } from "../lib/constants";
import { jobItem } from "../lib/types";

type JobItemContext={
    handlesorting:(sortby: "relevant" | "recent")=>void,
    sortby:"relevant" | "recent",
    isloading:boolean,
    jobItemslice:jobItem[],
    totalPages:number,
    currentPage:number,
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>,
    totalresults:number
    

}

export const JobItemContext = createContext<JobItemContext| null>(null);

export default function JobItemContextProvider({children}: {children: React.ReactNode}) {

   const {debouncedSearchText} =useSearchTextContext();

  const [JobItems, isloading] = useSearchQuery(debouncedSearchText);
  const [sortby, setSortby]=useState<"relevant" | "recent">('relevant');
  const [currentPage, setCurrentPage]=useState(1);


  const JobItemsSorted =useMemo(()=> [...(JobItems || [])].sort((a, b) =>{
    if(sortby =="relevant")
      return  b.relevanceScore-a.relevanceScore;
    if(sortby =="recent")
      return a.daysAgo-b.daysAgo;
    return 0;
  }),[sortby,JobItems]);
  const jobItemslice = useMemo(()=> JobItemsSorted.slice(currentPage* NUM_RES_PER_PAGE - NUM_RES_PER_PAGE, currentPage * NUM_RES_PER_PAGE) || [] ,[currentPage,JobItemsSorted]);;
  const totalresults = JobItems?.length || 0;

   const totalPages = Math.ceil(totalresults / NUM_RES_PER_PAGE);

   const handlesorting =useCallback((sortby: "relevant" | "recent")=>
   {
       setSortby(sortby)
       setCurrentPage(1);
   },[]);
        
   const contxtValue=useMemo(()=>({
   handlesorting,
   sortby,
   isloading,
   jobItemslice,
   totalPages,
   currentPage,
   setCurrentPage,
   totalresults
 }),[
  handlesorting,
  sortby,
  isloading,
  jobItemslice,
  totalPages,
  currentPage,
  setCurrentPage,
  totalresults
 ]);
   return (
 <JobItemContext.Provider
 value={contxtValue}>
    {children}
 </JobItemContext.Provider>

);




}
