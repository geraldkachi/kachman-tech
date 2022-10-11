import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomeHome />} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
