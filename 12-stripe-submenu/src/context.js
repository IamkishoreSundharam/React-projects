import React, { useState, useContext,createContext} from 'react'
import sublinks from './data'


const AppContext=createContext();

export const AppProvider=({children})=>{
 // state values
 const [isSidebarOpen,setIsSidebarOpen]=useState(false)

 const [isSubmenuOpen,setIsSubmenuOpen]=useState(false)

  const [loc,setLoc]=useState({});

   const [page1,setPage]=useState({page:'',links:[]})
 //functions
 const opensidebar=()=>{
    setIsSidebarOpen(true)
 }
 const closesidebar=()=>{
    setIsSidebarOpen(false)
 }
 const opensubmenu=(text,coordinates)=>{
   const pages=sublinks.find((link)=>link.page===text)
   setPage(pages);
    setLoc(coordinates)
    setIsSubmenuOpen(true)
 }
 const closesubmenu=()=>{
    setIsSubmenuOpen(false)
 } 

    return <AppContext.Provider value={{isSidebarOpen,
        isSubmenuOpen,
        opensidebar,
        closesidebar,
        opensubmenu,
        closesubmenu,
        loc,
        page1 }}>
            {children}
            </AppContext.Provider>
}

export const useGlobalcontext=()=>{
    return useContext(AppContext);
}
