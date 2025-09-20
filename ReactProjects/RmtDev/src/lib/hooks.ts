import { useContext, useEffect, useState } from "react";
import { jobItem, jobItemExtended } from "./types";
import { BASE_API_URL } from "./constants";
import { useQueries, useQuery } from "@tanstack/react-query";
import { handleError } from "./utils";
import BookmarksContextProvider, { BookMarksContext } from "../contexts/BookMarksContext";
import { SearchTextContext } from "../contexts/SearchTextContext";
import { ActiveIdContext } from "../contexts/ActiveIdContext";
import { JobItemContext } from "../contexts/JobItemContext";


async function fetchItem(id: number )
{
 const  response= await fetch(`${BASE_API_URL}/${id}`);
           const data = await response.json();
           if(response.ok===false )
           {
            throw new Error(data.message);
           }
          return data.jobItem as jobItemExtended;
       
}
export default  function useSearchQuery(SearchText: string) {
  
 const {data,isInitialLoading} =useQuery(
  ['jobItems',SearchText],
    async() => {
    
    const response = await fetch(`${BASE_API_URL}?search=${SearchText}`);
     const data = await response.json();
     return data.jobItems as jobItem[];
  }
  ,
  {
   staleTime: 1000 * 60 * 60,
   refetchOnWindowFocus: false,
   enabled: Boolean(SearchText),
  onError: handleError,
  }
  
);
 return [data,isInitialLoading] as const;
}


export function useActiveJobID() {
    const [ActiveJobItemId, setActiveJobItemId] = useState<number | null>(null);
  
  useEffect(() => {

    function handleHashChange() {
      const hash = window.location.hash;
      if (hash) {
        const id = parseInt(hash.substring(1), 10);
        setActiveJobItemId(id);
      } else {
        setActiveJobItemId(null);
      }
    } 

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [ActiveJobItemId]);
  
  return [ActiveJobItemId] as const;
}



export function useJobItem(id: number|null ) {

   const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    }
  );


  
  return [ data ,isInitialLoading] as const;
}

export function useJobItems(ids: number[] ) {

   const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });


const data = results.map((result) => result.data).filter(Boolean) as jobItemExtended[];
const isInitialLoading = results.some((result) => result.isInitialLoading);
  
  return [ data ,isInitialLoading] as const;
}

export function useDebounce<T>(value: T, delay: number) : T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}



export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}


export function useOnClickOutside(
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        handler();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, handler]);
}

export function useBookmarkContext ()
{
  const result=useContext(BookMarksContext);
    if(!result)
    {
     throw new Error("contxt empty")
    }
    return result;

} 

export function useActiveIdContext ()
{
  const result=useContext(ActiveIdContext);
    if(!result)
    {
     throw new Error("contxt empty")
    }
    return result;

} 
export function useSearchTextContext ()
{
  const result=useContext(SearchTextContext);
    if(!result)
    {
     throw new Error("contxt empty")
    }
    return result;

} 

export function useJobItemContext ()
{
  const result=useContext(JobItemContext);
    if(!result)
    {
     throw new Error("contxt empty")
    }
    return result;

} 