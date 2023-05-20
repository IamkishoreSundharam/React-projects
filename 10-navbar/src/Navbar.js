import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showlinks,setShowlinks]=useState(false);
  const linkscontainer= useRef(null)
  const ullinks= useRef(null)

  useEffect(()=>{
    const linkheight=ullinks.current.getBoundingClientRect().height;
    if(showlinks){
      linkscontainer.current.style.height=`${linkheight}px`
    }
    else{
      linkscontainer.current.style.height='0px'
    }
  },[showlinks])

  return (
    <nav>
     <div className='nav-center'>

      <div className='nav-header'>
        <img src={logo} alt='logo'/>
        <button className='nav-toggle' onClick={()=>setShowlinks(!showlinks)}><FaBars/></button>
      </div>

     {/* togggling with css classname - way 1 */}

       {/* <div className={`${showlinks?'links-container show-container':'links-container'}`}>
        <ul className='links'>
          <li>
            <a href='#'>
              home
            </a>
          </li>
          <li>
            <a href='#'>
              about
            </a>
          </li>
          <li>
            <a href='#'>
              contact
            </a>
          </li>
          <li>
            <a href='#'>
              products
            </a>
          </li>
        </ul>
      </div> */}

{/* dynamic approach make the drop down box adjust to its data conntent using use-ref */}

<div className='links-container' ref={linkscontainer}>
        <ul className='links' ref={ullinks}>
          <li>
            <a href='#'>
              home
            </a>
          </li>
          <li>
            <a href='#'>
              about
            </a>
          </li>
          <li>
            <a href='#'>
              contact
            </a>
          </li>
          <li>
            <a href='#'>
              products
            </a>
          </li>
        </ul>
      </div>

      <ul className='social-icons'>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com'>
              <FaTwitter/>
            </a>
          </li>
      </ul>
     </div>
    </nav>
  )
}

export default Navbar
