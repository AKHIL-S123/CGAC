import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiUser, FiSettings, FiMenu, FiUsers } from 'react-icons/fi'
import logo from '../assets/logo.png';

const menu = [
  { name: 'Dashboard', path: '/', icon: <FiHome /> },
  // { name: 'Profile', path: '/profile', icon: <FiUser /> },
  // { name: 'Settings', path: '/settings', icon: <FiSettings /> },
  { name: 'Departments', path: '/departments', icon: <FiUsers /> }, // New entry for Students
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`bg-white border-r shadow-sm ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        {/* {!collapsed && <h1 className="text-xl font-bold">MyApp</h1>} */}
        {!collapsed &&  
  <div className='flex items-center gap-2'>
    <img src={logo} alt="Logo" className="h-20 w-auto" />
    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      CGAC
    </h1>
  </div>
}

       
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-2 mt-2">
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
