import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Categories from './component/Categories';
import Notification from './component/Notification';
import AiMusic from './component/AiMusic';

function App() {
  return (
   <Router>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Categories/>} path="/categories" />
      <Route element={<Notification/>} path="/notification" />
      <Route element={<AiMusic/>} path="/aimusic" />
    </Routes>
   </Router>
  );
}

export default App;
