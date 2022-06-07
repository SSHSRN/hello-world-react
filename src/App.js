import './App.css';
// import Greet from './components/Greet'; => for default export
import {Greet} from './components/Greet'; // => for named export

import Welcome from './components/Welcome';

import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
