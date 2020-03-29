// the Board renders 9 squares. 
import React from 'react'
import Square from "./Square"

export default class Board extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    handleClick(i){
        // we call .slice() to create a copy of the squares array to modify instead of modifying the existing array
        const squares = this.state.squares.slice();    
        squares[i] = 'X';    
        this.setState({squares: squares});
        //There are generally two approaches to changing data. 
        //The first approach is to mutate the data by directly changing the data’s values. 
        //The second approach is to replace the data with a new copy which has the desired changes.
    }

    renderSquare(i){
        return(
            <Square 
            value={this.state.squares[i]}
            onClick={()=> this.handleClick(i)}
            />);
    }

    render() {
        const status = 'Next player: X';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }

}