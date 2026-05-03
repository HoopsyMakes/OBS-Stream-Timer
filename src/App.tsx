
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CountDown from './pages/CountDown';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countdown/:endTime' element={<CountDown />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
