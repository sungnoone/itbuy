import React from 'react';
import { Send } from 'lucide-react';

const Chat = () => {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="flex h-full">
        {/* Chat list */}
        <div className="w-64 bg-surface backdrop-blur-lg rounded-lg mr-6 p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">聊天室</h2>
          <div className="space-y-2">
            {['廠商A', '廠商B', '廠商C'].map((vendor) => (
              <button
                key={vendor}
                className="w-full text-left px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
              >
                {vendor}
              </button>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="flex-1 bg-surface backdrop-blur-lg rounded-lg p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                <p className="text-gray-500 text-sm mb-1">廠商A</p>
                <p className="text-gray-700">關於設備規格，我想請教...</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary-100 rounded-lg p-3 max-w-[70%]">
                <p className="text-gray-500 text-sm mb-1">採購人員</p>
                <p className="text-gray-700">好的，請說明您的問題</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <input
              type="text"
              placeholder="輸入訊息..."
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;