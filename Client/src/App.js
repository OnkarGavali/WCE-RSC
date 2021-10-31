import React, { useState} from 'react';
import MainPage from './pages/MainPage';

function App() {
  

  const[count,setCount] = useState(0);
  const[name,setName] = useState('');
  
  return (
    <div className="boxed-page" id="container" >
      <MainPage/>
     
    </div>
    
  );
}

export default App;
