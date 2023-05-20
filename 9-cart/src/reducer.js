const reducer=(state,action)=>{
    if(action.type==='CLEAR_CART'){
        return {...state,cart:[]}
    }

    if(action.type==='REMOVE-ITEM'){
        const newcart=state.cart.filter((item)=>{
            return item.id !== action.itemNo
        })
        
        return {...state,cart:newcart}
    }

    if(action.type==='INCREASE'){
     let newcart=state.cart.map((item)=>{
      if(item.id==action.itemNo){
        return {...item,amount:item.amount+1}
       }
    return item;
   })
   return {...state,cart:newcart}
}

if(action.type==='DECREASE'){
    let newcart=state.cart.map((item)=>{
     if(item.id==action.itemNo){
       return {...item,amount:item.amount-1}
      }
   return item;
  }).filter((item)=>{return item.amount!==0})

  return {...state,cart:newcart}
}

      return state
}


export default reducer