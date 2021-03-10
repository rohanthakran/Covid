import React from "react"
const Home = (props) =>{
    console.log(props.name);
    return (
        <React.Fragment>
         {
                <h1>{props.name}</h1>
         }
        </React.Fragment>
    )
}
export default Home