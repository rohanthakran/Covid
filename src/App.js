import React,{useEffect,useState} from "react";
import {sortData} from "./util"
import Card from "./Card"
import "./App.css"

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
        // console.log(sort[0]);
      })
      
      .catch(err =>{
        console.log(err);
      })
  },[])
  return(
      <div>
         <h1>covid -19 Tracker</h1>

   
      <div class="container"> 
      {
      sort.slice(0,10).map((country,index) =>{
        return(
          <Card id ={index+1} name ={country.country} cases ={country.cases}/>
          )
      })
    }
    
        </div>
 
   
   
  


      </div>
    )
     
    
}
export default App;
