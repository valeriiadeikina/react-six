import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(): React.JSX.Element {
  return (
    <div className='nav-container'>
      <Link to="/task1" className="nav">
        Задача 1
      </Link>
      <Link to="/task2" className="nav">
        Задача 2
      </Link>
    </div>
  );
}
