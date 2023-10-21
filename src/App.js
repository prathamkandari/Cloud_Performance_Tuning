import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './main.jsx';
import AdoptMe from './AdoptMe.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/AdoptMe' element={<AdoptMe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
