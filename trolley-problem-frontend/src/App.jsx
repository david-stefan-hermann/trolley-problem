import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home'
import Dashboard from './components/dashboard/dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
