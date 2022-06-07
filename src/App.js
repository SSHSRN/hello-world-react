import './App.css';
// import Greet from './components/Greet'; => for default export

// import {Greet} from './components/Greet'; // => for named export

import Greet from './components/Greet';

import Welcome from './components/Welcome';

import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}

      {/* Using props */}
      <Greet name="Srihari" heroName="SSHSRN"/>
      <Greet name="Tony Stark" heroName="IRON MAN"/>
      <Greet name="Peter Parker" heroName="SPIDER MAN"/>
      <Greet name="Eddie Brock" heroName="VENOM">
        <p>Venom is a black symbiote.</p>
      </Greet>
      {/* <Welcome/> */}

      {/* Using props for a classful component */}
      <Welcome name="Srihari" heroName="SSHSRN"/>
      <Welcome name="Tony Stark" heroName="IRON MAN"/>
      <Welcome name="Peter Parker" heroName="SPIDER MAN"/>
      <Welcome name="Eddie Brock" heroName="VENOM"/>
      <Hello/>
    </div>
  );
}

export default App;
