import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/DashBoard'
import FortuneWheel from './components/fortunewheel/FortuneWheel'


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/spin" element={<FortuneWheel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
