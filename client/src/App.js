import React from 'react';
import MainPage from './pages/MainPage';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000/"
export const baseUrl = axios.defaults.baseURL

function App() {
  
  return (
    <div className="boxed-page" id="container" >
      <MainPage/>
    </div>
    
  );
}

export default App;
