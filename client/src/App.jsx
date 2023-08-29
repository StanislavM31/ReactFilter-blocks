import './App.css'
import HomePage from './pages/HomePage/HomePage'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}> </Route>
      </Routes>
    </div>
  )
}

export default App
