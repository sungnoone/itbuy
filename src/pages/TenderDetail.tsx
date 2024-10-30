import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, MessageSquare, FileText } from 'lucide-react';

const TenderDetail = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">2024年度辦公設備採購</h1>
        <div className="flex space-x-3">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg">
            編輯標案
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
            結束標案
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">標案資訊</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">標案編號</p>
                <p className="text-gray-900">{id}</p>
              </div>
              <div>
                <p className="text-gray-600">類型</p>
                <p className="text-gray-900">最低標</p>
              </div>
              <div>
                <p className="text-gray-600">開始日期</p>
                <p className="text-gray-900">2024-03-15</p>
              </div>
              <div>
                <p className="text-gray-600">截止日期</p>
                <p className="text-gray-900">2024-04-30</p>
              </div>
            </div>
          </div>

          <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">需求說明</h2>
            <p className="text-gray-700">
              本標案為採購辦公設備，包含：
              1. 個人電腦 20 台
              2. 印表機 5 台
              3. 投影機 2 台
              需求詳細規格請參考附件...
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">標案狀態</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-primary-600 mr-3" />
                <div>
                  <p className="text-gray-600">剩餘時間</p>
                  <p className="text-gray-900">32 天</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-primary-600 mr-3" />
                <div>
                  <p className="text-gray-600">投標廠商</p>
                  <p className="text-gray-900">5 家</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 text-primary-600 mr-3" />
                <div>
                  <p className="text-gray-600">提問數</p>
                  <p className="text-gray-900">12 則</p>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-primary-600 mr-3" />
                <div>
                  <p className="text-gray-600">已收到報價</p>
                  <p className="text-gray-900">3 份</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">相關文件</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                需求規格書.pdf
              </button>
              <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                投標須知.pdf
              </button>
              <button className="w-full text-left px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                合約草案.pdf
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderDetail;