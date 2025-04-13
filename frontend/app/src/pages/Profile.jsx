export default function Profile() {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile image */}
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
  
          <div className="flex-1">
            {/* Basic info */}
            <h2 className="text-2xl font-bold text-gray-800">Jane Doe</h2>
            <p className="text-gray-500">Senior Developer @ Acme Inc</p>
            <p className="text-gray-400 text-sm mt-1">jane.doe@example.com</p>
  
            {/* About */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">About Me</h3>
              <p className="text-gray-600 text-sm">
                Passionate full-stack developer with 5+ years of experience building scalable web apps. I love JavaScript, clean UI, and creating meaningful user experiences.
              </p>
            </div>
  
            {/* Social links */}
            <div className="flex gap-4 mt-4 text-gray-500">
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
              <a href="#" className="hover:text-blue-600">GitHub</a>
              <a href="#" className="hover:text-blue-600">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  