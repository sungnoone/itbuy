import React from 'react';
import { Mail } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-primary-800 text-center mb-8">採購系統</h2>
        <div className="space-y-4">
          <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary-700 transition">
            <Mail className="w-5 h-5 mr-3" />
            使用 AD 帳號登入
          </button>
          <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition border border-gray-200">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1Z"
              />
            </svg>
            使用 Google 帳號登入
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;