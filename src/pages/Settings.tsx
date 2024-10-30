import React from 'react';
import { Bell, Mail, Users, Shield } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">系統設定</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">通知設定</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Email 通知</label>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Line 通知</label>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">系統通知</label>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">郵件範本</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">標案開始通知</span>
              <button className="text-primary-600 hover:text-primary-700">編輯</button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">議價通知</span>
              <button className="text-primary-600 hover:text-primary-700">編輯</button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">得標通知</span>
              <button className="text-primary-600 hover:text-primary-700">編輯</button>
            </div>
          </div>
        </div>

        <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">廠商分類</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>資訊設備</span>
              <span className="text-gray-500">12 家</span>
            </button>
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>辦公用品</span>
              <span className="text-gray-500">8 家</span>
            </button>
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>清潔服務</span>
              <span className="text-gray-500">5 家</span>
            </button>
          </div>
        </div>

        <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">權限管理</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>採購主管</span>
              <span className="text-gray-500">2 人</span>
            </button>
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>採購人員</span>
              <span className="text-gray-500">5 人</span>
            </button>
            <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 flex justify-between items-center">
              <span>廠商帳號</span>
              <span className="text-gray-500">48 個</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;