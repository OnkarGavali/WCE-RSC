import React, {Components, useState} from 'react';

//import Tmp from './components/Tmp';
import Header from './components/Header';
import Home from './components/Home';
import Tmp from './components/Tmp';

function App() {
  

  const[count,setCount] = useState(0);
  const[name,setName] = useState('');
  
  return (
    <div className="App">
      
      <Home></Home>
    </div>
    
  );
}

export default App;
