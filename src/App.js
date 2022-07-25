
import { useState } from 'react';

import './App.css';
import Cobra from './components/Cobra';
import Snake from './components/snake';

function App() {

  const [count, setCount] = useState(0)

  const add = () => {
    setCount(prevCount => prevCount+ 1)
  }

  const minus = () => {
    setCount(prevCount => prevCount - 1)
  }
//count practice at the moment

  return (
    <div className="App">
  people's counter so here we go 
  <div>
    <button onClick={add}>+</button>
    {count}
    <button onClick={minus}>-</button>

    then we added the <Cobra /> component and <Snake /> components too

  </div>
  wahala
    </div>
  );
}

export default App;
