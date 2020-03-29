// the Board renders 9 squares. 
import React from 'react'
import Square from "./Square"

export default class Board extends React.Component{
    constructor(props) { 
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            //Each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved.
            xIsNext: true,
        };
    }
    handleClick(i){
        // we call .slice() to create a copy of the squares array to modify instead of modifying the existing array
        const squares = this.state.squares.slice();    
        if (this.calculateWinner(squares) || squares[i]) {      
            return;    
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';    
        this.setState({squares: squares, xIsNext: !this.state.xIsNext,});
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
    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    render() {
        const winner = this.calculateWinner(this.state.squares);    
        let status;    
        if (winner) {      
            status = 'Winner: ' + winner;    
        } else {      
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');    
        }
    
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