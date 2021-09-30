import React, {Components, useState} from 'react';

//import Tmp from './components/Tmp';
import Header from './components/Header';
import Home from './components/RouteingTable/Home/Home';
import Tmp from './components/Tmp';
import TmpHome from './components/TmpHome';
import MainPage from './pages/MainPage';

function App() {
  

  const[count,setCount] = useState(0);
  const[name,setName] = useState('');
  
  return (
    <div className="boxed-page" id="container" >
      <MainPage/>
      {/* <Home></Home> */}
      {/* <TmpHome/> */}
    </div>
    
  );
}

export default App;
