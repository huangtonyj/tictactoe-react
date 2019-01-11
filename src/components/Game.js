import './index.css';
import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      board: [null, null, null, 
        null, null, null, 
        null, null, null],
      winner: ''
    }
  }

  onSquareClick = (squareIdx) => {  
    const board = this.state.board;
    if (board[squareIdx]) {
      alert('Square already taken')
      return;
    }
    
    if (this.state.winner) { return ;} // Game over
    
    board[squareIdx] = this.state.turn
    
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({board}, this.checkWinner());
    this.setState({turn})
  }

  checkWinner(){
    const WINARRAY = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    
    WINARRAY.forEach((w) => {
      if (w.every(s => this.state.board[s] === this.state.turn)) {
        this.setState({winner: this.state.turn})
      }
    })
  }

  render() {

    const winMessage = this.state.winner ? `Player ${this.state.winner} WON!` : ''

    return (
      <div className="Game"> 
        <h1>Tic Tac Toe</h1>

        {winMessage}

        <h3>Player {this.state.turn}'s turn</h3>

        <Board
          board={this.state.board}
          onSquareClick={this.onSquareClick}
        />
      </div>
    )
  }
}
