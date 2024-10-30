import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, MessageSquare, Settings, LogOut } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  
  const navigation = [
    { name: '儀表板', href: '/', icon: LayoutDashboard },
    { name: '標案管理', href: '/tenders', icon: FileText },
    { name: '即時通訊', href: '/chat', icon: MessageSquare },
    { name: '系統設定', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-surface-dark backdrop-blur-lg text-white">
          <div className="p-4">
            <h1 className="text-2xl font-bold">採購系統</h1>
          </div>
          <nav className="mt-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm ${
                    location.pathname === item.href
                      ? 'bg-primary-600'
                      : 'hover:bg-primary-600/50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <button className="flex items-center px-4 py-3 text-sm text-white hover:bg-primary-600/50 w-full">
              <LogOut className="w-5 h-5 mr-3" />
              登出
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;