import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Datapost } from './dataposts';

function App() {
  const [data,setdata] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((result)=>{setdata(result); console.log(result);});
  },[]);
  return (
    <div className="App">
      {data.map((item)=>{
        return( <Datapost key={item.id} {...item}/> )
      })}
    </div>
  );
};

export default App;
