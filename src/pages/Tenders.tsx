import React from 'react';
import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tenders = () => {
  const tenders = [
    {
      id: 1,
      title: '2024年度辦公設備採購',
      type: '最低標',
      status: '進行中',
      deadline: '2024-04-30',
      vendors: 5,
    },
    {
      id: 2,
      title: '資訊系統維護服務',
      type: '最有利標',
      status: '評選中',
      deadline: '2024-05-15',
      vendors: 3,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">標案管理</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          新增標案
        </button>
      </div>

      <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜尋標案..."
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="">所有類型</option>
            <option value="lowest">最低標</option>
            <option value="best">最有利標</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-600 border-b border-gray-200">
                <th className="text-left py-3 px-4">標案名稱</th>
                <th className="text-left py-3 px-4">類型</th>
                <th className="text-left py-3 px-4">狀態</th>
                <th className="text-left py-3 px-4">截止日期</th>
                <th className="text-left py-3 px-4">投標廠商</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr
                  key={tender.id}
                  className="text-gray-900 border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">
                    <Link to={`/tenders/${tender.id}`} className="hover:text-primary-600">
                      {tender.title}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{tender.type}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-700">
                      {tender.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{tender.deadline}</td>
                  <td className="py-3 px-4">{tender.vendors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tenders;