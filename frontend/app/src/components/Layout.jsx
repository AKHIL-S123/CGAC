import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-y-auto flex-1">
          <Outlet />  {/* 🔥 This will render your current page (Dashboard, Departments, etc.) */}
        </main>
      </div>
    </div>
  );
}
