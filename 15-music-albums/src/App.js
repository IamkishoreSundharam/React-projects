// import React from 'react';
// import './App.css';
// import Navbar from './navbar';
// import Footer from './footer'; 
// import Lists from './lists.js';

// function App() {
//   return (
//     <>
//     <Navbar />
//     <Lists />
//     <Footer />
//     </>
//   );
// }

// export default App;
// import React from 'react'

// export default const App = () => {
//   return (
//     <>
//     <h1>Hello world</h1>
//     {/* <Navbar /><Lists /><Footer /> */}
//     </>
//   )
// }
import React from 'react'
import Navbar from './navbar'
import Lists from './lists'
import Footer from './footer'
import './navbar.css';
import './footer.css'
import './list.css'
import data from './playlist.json';
import BounceLoader from './bounce'
import './bounce.css'
import { useEffect,useState} from 'react';


function App() {

  const [loader,setLoader]=useState(true)
  const [list,setList]=useState([])
  const [searchterm,setSearchterm]=useState(null)

  useEffect(()=>{
  const timer=setTimeout(()=>{
    setLoader(false);
    setList(data);
  },4000)
  // return clearTimeout(timer);
  },[])


useEffect((()=>{
  const result=searchterm;

  const newdata=data.filter((item)=>{
    const {title}=item;
    // console.log(title);
    if(title.includes(result)){
       return item;
    }
  })
  setList(newdata);

}),[searchterm,setSearchterm])

  return (
    <>
      <BounceLoader loader={loader}/>
      <Navbar searchterm={searchterm} setSearchterm={setSearchterm} />
      <Lists data={list} />
      <Footer />
    </>
  );
}

export default App
