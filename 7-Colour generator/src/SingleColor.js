import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexcolor}) => {
  const [alert,setAlert]=useState(false)
  const bcg=rgb.join(',')
  const hex=rgbToHex(...rgb)
  useEffect(()=>{
    const timer= setTimeout(()=>{
      setAlert(false);
    },1000)
    return ()=>{ clearTimeout(timer)}
  },[alert])
  // const hexvalue=`#${hexcolor}`
  // console.log(hexvalue);
  return (
    <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{setAlert(true)
     navigator.clipboard.writeText(hex)}}>
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
