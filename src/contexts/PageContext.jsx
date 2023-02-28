import { createContext, useState } from "react";

export const PageContext=createContext()

export default function PageContextProvider({children}){
    const [currentPage,setCurrentPage]=useState("home")
    return <PageContext.Provider value={{currentPage,setCurrentPage}}>{children}</PageContext.Provider>
}