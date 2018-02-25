import React from 'react';

import List from './list';

import './board.css';

export default function Board() {
  return (
    <div className="board">
      <h2>Example board</h2>
      <ul className="lists">
        <li className="list-wrapper">
          <List />
        </li>
        <li className="list-wrapper">
          <List />
        </li>
        <li className="list-wrapper">
          <List />
        </li>
      </ul>
    </div>
  );
}

// or using a loop
export default function List() {
  const cards = [];
  for (let i = 0; i < 3; i++) {
      cards.push(
      <li>
          <Card />
      </li>
      );
  }
  return (
      <div>
          <h3>Example list</h3>
          <ul className="list">
              {cards}
          </ul>
      </div>
  );
}