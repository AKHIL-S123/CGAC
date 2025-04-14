import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dasahboard'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Students from './pages/Students'
import CreateStudent from './pages/CreateStudent'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<CreateStudent />} />
        <Route path="/edit-student/:id" element={<CreateStudent />} />
      </Routes>
    </Layout>
  )
}
