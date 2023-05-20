import { useRef } from "react"

const Navbar=({setSearchterm,searchterm})=>{
  const element=useRef()
  const changer=()=>{
    setSearchterm(element.current.value)
  }
  return (
    <nav className="navbar">
        <div className="main-header">
         
            <h3 className="head-name">Music Album</h3>
            <input type="text" className="input-box" placeholder="Enter Song Name" onChange={changer} ref={element}></input>
         
        </div>
    </nav>
  )
}

export default Navbar