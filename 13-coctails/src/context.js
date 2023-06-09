import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //sate values
const [loading,setLoading]=useState(true)
const [searchTerm,setSearchterm]=useState([])
const [cocktail,setCocktails]=useState('a')

const fetchdrinks=useCallback(async ()=>{
  setLoading(true);
  try {

    const reponse= await fetch(`${url}${searchTerm}`);
    const data=await reponse.json();
    const {drinks}=data;
    
    if(drinks){
      const newdrinks=drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
        return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
      })
      setCocktails(newdrinks)
    }
    else{
      setCocktails([])
    }
    setLoading(false)
  } catch (error) {
    console.log(error);
  }
},[searchTerm])

useEffect(()=>{
  fetchdrinks()
},[searchTerm,fetchdrinks])

  return <AppContext.Provider value={{loading,cocktail,setSearchterm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
