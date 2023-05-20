import React, { createContext,useState, useContext } from 'react'

const AppContext=createContext();

const AppProvider=({children})=>{
    const [isSidebarOpen,setsSidebarOpen]=useState(false)
    const [isModalopen,setModalOpen]=useState(false)

    const openSidebar=()=>{
        setsSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setsSidebarOpen(false)
    }
    const openModal=()=>{
        setModalOpen(true)
    }
    
    const closeModal=()=>{
        setModalOpen(false)
    }

        return <AppContext.Provider value={{isSidebarOpen ,
            isModalopen ,
            openSidebar,
            closeSidebar,
            openModal,
            closeModal
        }}>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}