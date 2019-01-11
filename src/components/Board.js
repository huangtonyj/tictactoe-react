import React from 'react'

export default function Board({board, onSquareClick}) {

  const Squares = board.map((square, idx) => {
    return (
      <div 
        key={idx} 
        className="square"
        onClick={() => onSquareClick(idx)}
      >
        {square}
      </div>
    )
  })

  return (
    <div className="board">
      {Squares}
    </div>
  )
}
