//The Square component renders a single <button> 
import React from 'react'

export default function Square(props){
    return(
        <button 
          onClick={props.onClick} 
          className="square">
            {props.value}
        </button>
    )
}