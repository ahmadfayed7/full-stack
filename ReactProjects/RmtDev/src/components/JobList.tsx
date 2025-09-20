import { jobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList({JobItems,isloading}: {JobItems:jobItem[] | undefined,isloading:boolean})  {

 
  
  return <>
  

  {<ul className="job-list">
      {isloading && <Spinner/>}
    {!isloading && JobItems && JobItems.map((item) => (
      <JobListItem key={item.id} item={item} />
    ))}
          
  </ul>}
  </>
}

export default JobList;
