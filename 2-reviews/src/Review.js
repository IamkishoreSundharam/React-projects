import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {name,image,job,text}=people[index]

  return (<article className='review'>
       <div className='img-container'>
         <img className='person-img' src={image} alt={name}></img>
         <span className='quote-icon'>
          <FaQuoteRight/>
         </span>
       </div>
         <h4>{name}</h4>
         <p>{job}</p>
         <p>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={()=> {
            if(index === 0){
               setIndex(people.length-1)
            }
            else{ setIndex(index-1)}
            
          }}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={()=> {
            
            if(index === people.length-1){
               setIndex(0)
            }
            else{ setIndex(index+1)}
            
          }}>
            <FaChevronRight/>
          </button>
        </div>
         <button className='random-btn' onClick={
           ()=>{
            const random=()=>{return Math.floor(Math.random()*people.length)}
             let num=random();
             if(index===num){
               if(index===people.length-1){
                setIndex(num-1)
               }
               else{setIndex(num+1)} 
              
             }
             else{
              setIndex(num)
             }
             console.log(index);
          }
         }>
            Surpise Me
          </button>
  </article>);
};

export default Review;
