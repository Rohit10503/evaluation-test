
import './App.css'
import { Route,Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import View from './pages/view';

function App() {
  return(
<div className="App">
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/view" element={<View/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes>


  </div>
  )
}

export default App
