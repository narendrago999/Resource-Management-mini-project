import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import ChooseDate from './components/ChooseDate.js'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Dashboard" element={<Home/>} />
          <Route path="/choosedate/:id" element={<ChooseDate/>} />
        </Routes>
      </Router>
  );
}

export default App;
