import Card from './card.js'

const Lists=({data})=>{

    return (
      <main className="album-container">
       <div className="album-body">
        {data.map((item,index)=>{
            return(
               <Card {...item} key={index}/>
            )
        })}
       </div>
       </main>
      )
}

export default Lists;