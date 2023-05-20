import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const quetions=data;
  return <main>
    <div className='container'>
      <h3>quetions and answers about login</h3>
      {quetions.map((quetions)=>{
        return <SingleQuestion key={quetions.id} {...quetions}></SingleQuestion>
      })}
    </div>
  </main>
}

export default App;
