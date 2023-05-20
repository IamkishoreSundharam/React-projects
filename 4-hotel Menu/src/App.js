import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const filtercategories=['all',...new Set(items.map((item)=>item.category))]
 
  const [menuItems,setmenuItem]=useState(items)

  const [categories,setCategorries]=useState(filtercategories)
  

  const filterFunction=(category)=>{
    const newitem= items.filter((item)=>item.category === category)
    if(category==="all"){
      setmenuItem(items)
    }
    else{
      setmenuItem(newitem)
    }
  }

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterFunction={filterFunction} />
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
