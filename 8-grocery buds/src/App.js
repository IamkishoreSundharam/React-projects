import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getlocalStorage=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'));
  }
  else{
    return []
  }
}

function App() {
  const [alert,setAlert]=useState({show:false,msg:'',type:''})
  const [name,setName]=useState('')
  const [edit,setEdit]=useState(false)
  const [list,setList]=useState(getlocalStorage())
  const [editID,setEditID]=useState(null);

  const handlesubmit=(e)=>{
     e.preventDefault();
     if(!name){
      // alert
      showAlert(true,'danger','please enter value')
     }
     else if(name && edit){
      // editing
      setList(list.map((item)=>{
        if(item.id==editID){
          return {...item,title:name}
        }
        return item;
      }));
      setName('');
      showAlert(true,'success','changes made successfully');
      setEdit(false);
      setEditID(null);
     }
     else{
      const newname={id:new Date().getTime().toString(),title:name};
      setList([...list,newname]);
      setName('');
      showAlert(true,'success','item added to list');
     }
  }

  const showAlert=(show=false,type='',msg='')=>{
    setAlert({show,type,msg});
  }

  const clearList=()=>{
    showAlert(true,'danger','emptied list');
    setList([]);
  }

  const removeItem=(id)=>{
   setList(list.filter((items)=>{
    return items.id !== id;
   }))
   showAlert(true,'danger','item removed');
  }

  const editItem=(id)=>{
    const specificItem=list.find((items)=>items.id==id);
    setEdit(true);
    setEditID(id);
    setName(specificItem.title);
  }

   useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
   },[list])

  return (<> 
   <section className='section-center'>
     <form className='grocery-form' onSubmit={handlesubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input placeholder='e.g.eggs' className='grocery' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button type='submit' className='submit-btn'>{edit? 'edit':'submit'}</button>
      </div>
     </form>
     {list.length>0 && (<div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem} />
      <button className='clear-btn' onClick={clearList}>clear items</button>
     </div>)}
   </section>
  </>)
}

export default App
