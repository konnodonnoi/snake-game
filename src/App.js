import snake from './components/snake';
import './App.css';

function App() {
  const count = [count, setCount]
  const add = () => {
    setCount + 1
  }
  const minus = () => {
    setCount - 1
  }
  return (
    <div className="App">
      people's counter here
      <button onClick={add}>+</button>
      {count}
      <button onClick={minus}>-</button>
      <div>
        new component called <snake />
      </div>
 
 
    </div>
  );
}

export default App;
