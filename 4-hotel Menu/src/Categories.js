import React from 'react';

const Categories = ({categories,filterFunction}) => {
  return (
  <div className='btn-container'>
    {categories.map((list,index)=>{
      return (
      <button key={index} className='filter-btn' type='button' onClick={()=>filterFunction(list)}>
        {list}
      </button>
      )
    })}
  </div>)
};

export default Categories;
