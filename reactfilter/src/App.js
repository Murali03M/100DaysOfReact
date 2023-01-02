import react, {useState} from 'react'
import './App.css';
import Table from './Table';
import {users }from './users';
function App() {

  const [query ,setQuery] = useState("")
  console.log(query);  

  const keys=["first_name","last_name","email"]

  const search =(data) =>
  {
    return data.filter((item) => 
     keys.some(key =>item[key].toLowerCase().includes(query)))
  }
  return (

    <div className="app">
      <input type="text" className="search" placeholder='search..'  onChange={ (e)=> setQuery(e.target.value)}></input>
      <Table data={search(users)}/>
    </div>
  );
}

export default App;
