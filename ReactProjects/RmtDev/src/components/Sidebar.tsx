
import { useJobItemContext } from "../lib/hooks";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

export default function Sidebar()  {
  const{
    handlesorting,
    sortby,
    isloading,
    jobItemslice,
    totalPages,
    currentPage,
    setCurrentPage,
    totalresults
    }=useJobItemContext();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount totalresults={totalresults} />
        <SortingControls  handlesorting={handlesorting} sortby={sortby}/>
      </div>
    <JobList JobItems={jobItemslice} isloading={isloading} />
    <PaginationControls setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />   
    </div>
  );
}
