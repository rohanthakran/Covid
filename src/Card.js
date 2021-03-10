import React from "react"
import "./Card.css"
const Card = (props) =>{
return (
    <React.Fragment>
    <div class="card">
        <p>{props.id}</p>
        <h1>{props.name}</h1>
        <h1>{props.cases}</h1>
            </div>
    </React.Fragment>
)
}

export default Card