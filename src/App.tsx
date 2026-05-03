import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CountDown from './pages/CountDown';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countdown/:endTime' element={<CountDown />} />
      </Routes>
    </HashRouter>
  )
}

export default App
