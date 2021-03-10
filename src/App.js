import React,{useEffect,useState} from "react";
import {sortData} from "./util"
import Home from "./Home"

const App = () =>{
  const [country,setCountry] = useState([]);
  const [sort,setSort] = useState([]);
  useEffect( () =>{
      fetch(`https://disease.sh/v3/covid-19/countries`)
      .then(res =>
        res.json()
     )
      .then( data =>{
        console.log(data)
        const info = data.map((count) =>(
          {
            name : count.country,
            cases: count.cases
          }
        ))
        setCountry(info)
        console.log(info)
        const sorteddata = sortData(data);
        setSort(sorteddata);
        console.log(sort)
      })
      
      .catch(err =>{
        console.log(err);
      })
  },[])
  return(
      <div>
         <h1>covid -19 Tracker</h1>
    {
      country.map((country) =>{
        return(
          <Home name ={country.name} cases ={country.cases}/>
          )
      })
    }
   
  


      </div>
    )
     
    
}
export default App;
