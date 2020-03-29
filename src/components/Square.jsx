//The Square component renders a single <button> 
import React from 'react'
export default class Square extends React.Component{
constructor(props){
    super(props);
    this.state={
        value:null
    }
}
    render(){
        return(
            <button onClick={function(){alert('click')}} className="square">
                {this.props.value}
            </button>
        )
    }
}