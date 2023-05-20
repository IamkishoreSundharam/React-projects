import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialstate={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialstate)
  
  const clearCart=()=>{
    return dispatch({type:'CLEAR_CART'})
  }

 const remove=(id)=>{
    return dispatch({type:'REMOVE-ITEM',itemNo:id})
 }

 const increase=(id)=>{
   return dispatch({type:'INCREASE',itemNo:id})
 }

 const decrease=(id)=>{
  return dispatch({type:'DECREASE',itemNo:id})
}

  return (
    <AppContext.Provider
      value={{
        ...state,clearCart,remove,increase,decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
 
export { AppContext, AppProvider }
