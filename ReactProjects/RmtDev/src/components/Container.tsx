import { NUM_RES_PER_PAGE } from "../lib/constants";
import { useActiveJobID } from "../lib/hooks";
import { jobItem } from "../lib/types";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

export default function Container()  {
 

  return <div className="container">
    <Sidebar />
    <JobItemContent  />
  </div>;
}
