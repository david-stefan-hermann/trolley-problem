// import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import Layout from './components/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
