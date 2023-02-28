import './App.css'
import { HomeScreen, ListScreen } from 'screens'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/list" element={<ListScreen></ListScreen>}></Route>
      </Routes>
    </Router>
  )
}

export default App
