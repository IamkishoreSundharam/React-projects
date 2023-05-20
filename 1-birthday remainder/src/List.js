import React from 'react';

const List = ({friends}) => {
  return (
    <>
      {friends.map((people)=>{
        const {id,name,image,age}=people
        return <article key={id} className='person'>
           <img src={image} alt={name}></img>
           <div>
            <h4>{name}</h4>
            <p>{age} years</p>
           </div>
        </article>
      })}
    </>
  );
};

export default List;
