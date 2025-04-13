import { useState } from 'react'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>

      {/* Account Settings */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Information</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              defaultValue="Jane Doe"
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              defaultValue="jane.doe@example.com"
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        </form>
      </div>

      {/* Password */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Change Password</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Current Password</label>
            <input
              type="password"
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        </form>
      </div>

      {/* Preferences */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Preferences</h3>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Enable Dark Mode</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  )
}
