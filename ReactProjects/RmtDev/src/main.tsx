import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarksContextProvider from "./contexts/BookMarksContext";
import SearchTextContextProvider from "./contexts/SearchTextContext.tsx";
import ActiveIdContextProvider from "./contexts/ActiveIdContext.tsx";
import JobItemContextProvider from "./contexts/JobItemContext.tsx";

const queryClient=new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchTextContextProvider>
       <JobItemContextProvider>
        <ActiveIdContextProvider>
      <BookmarksContextProvider> 
        <App />
    </BookmarksContextProvider>
    </ActiveIdContextProvider>
         </JobItemContextProvider>
    </SearchTextContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
