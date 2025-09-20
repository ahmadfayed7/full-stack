import { createContext } from "react";
import { useActiveJobID} from "../lib/hooks";

type ActiveIdContext={
    ActiveId:number | null,
    

}

export const ActiveIdContext = createContext<ActiveIdContext| null>(null);

export default function ActiveIdContextProvider({children}: {children: React.ReactNode}) {

const [ActiveId]=useActiveJobID();

        
   return (
 <ActiveIdContext.Provider
 value={{
    ActiveId
 }}>
    {children}
 </ActiveIdContext.Provider>

);




}
