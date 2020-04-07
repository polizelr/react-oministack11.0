import React, {useState} from 'react';
import './App.css';

import Header from '../components/Header'

function App() {
  //1) criar variável
  // const {counter, setCounter}=0;
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1)
  }

  return (    
    // <Header title="Semana OmniStack"/>  
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
