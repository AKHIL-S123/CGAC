import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dasahboard'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Students from './pages/Students'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Layout>
  )
}
