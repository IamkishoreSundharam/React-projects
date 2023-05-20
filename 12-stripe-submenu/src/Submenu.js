import React, { useState, useRef, useEffect } from 'react'
import { useGlobalcontext } from './context'


const Submenu = () => {
  const {isSubmenuOpen,loc,page1}=useGlobalcontext()
  // console.log(page);
  const {page,links}=page1;
  const container=useRef(null)
 const [col,setCol]=useState('col-2')

 useEffect(()=>{
  setCol('col-2')
  const submenu=container.current;
  // const {center,bottom}=loc;
  submenu.style.left=`${loc.center}px`
  submenu.style.top=`${loc.bottom}px`
  if(links.length===3){
    setCol('col-3')
  }
  if(links.length>3){
    setCol('col-4')
  }
 },[loc,links])


  return (
    <aside className={`${isSubmenuOpen? 'submenu show':'submenu'}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
        {links.map((link,index)=>{
          const {label,icon,url}=link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
