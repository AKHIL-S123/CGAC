import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiUser, FiSettings, FiMenu, FiUsers } from 'react-icons/fi'

const menu = [
  { name: 'Dashboard', path: '/', icon: <FiHome /> },
  { name: 'Profile', path: '/profile', icon: <FiUser /> },
  { name: 'Settings', path: '/settings', icon: <FiSettings /> },
  { name: 'Students', path: '/students', icon: <FiUsers /> }, // New entry for Students
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`bg-white border-r shadow-sm ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-xl font-bold">MyApp</h1>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        {menu.map(({ name, path, icon }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 mx-2 rounded-lg hover:bg-gray-200 ${
                isActive ? 'bg-gray-300 font-semibold' : ''
              }`
            }
          >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
