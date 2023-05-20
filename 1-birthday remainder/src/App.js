import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [friends,setFriends]=useState(data)
  return <main>
    <section className='container'>
      <h3>{friends.length} BIRTHDAYS TODAY</h3>
     <List friends={friends}/>
     <button onClick={()=>{setFriends([]); alert("Do you want clear todays birthdays ?")}}>clear all</button>
    </section>
  </main>
}

export default App;
