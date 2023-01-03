import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const[loading ,setLoading] =useState(true);  
  const[tours ,setTours]=useState([])

  const removeTour =(id)=>{
    const newTour = tours.filter((tour)=> tour.id !=id);
    setTours(newTour);
  }

  const fetchtours = async () =>{
    setLoading(true);
    try {
      const response =await fetch(url);
      const tours =await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
      console.log(tours);
  }

  useEffect(()=>{
      fetchtours();
  },[])
  if(loading)
  {
    return (
    <main>
      <Loading/>
    </main>
    )
  }
  if(tours.length ===0)
  {
    return(
      <main>
        <h4>No Tours left</h4>
        <button onClick={fetchtours } className='btn'>Refresh</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
