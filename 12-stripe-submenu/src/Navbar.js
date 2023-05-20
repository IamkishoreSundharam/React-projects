import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalcontext } from './context'

const Navbar = () => {
  const {opensidebar,opensubmenu,closesubmenu}=useGlobalcontext();
 
  const displaysubmenu=(e)=>{
    const text=e.target.textContent;
    const tempbtn=e.target.getBoundingClientRect();
    const center=(tempbtn.left + tempbtn.right)/2;
    const bottom=(tempbtn.bottom-3);

    opensubmenu(text,{center,bottom});
  }
const handlesubmenu=(e)=>{
  if(!e.target.classList.contains('link-btn')){
    closesubmenu();
  }
}
  return <>
  <nav className='nav' onMouseOver={handlesubmenu}>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='stripe'></img>
        <button className='btn toggle-btn' onClick={opensidebar}><FaBars/></button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaysubmenu}>products</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaysubmenu}>developers</button>
        </li>  
        <li>
          <button className='link-btn' onMouseOver={displaysubmenu}>company</button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
  </>
}
export default Navbar
