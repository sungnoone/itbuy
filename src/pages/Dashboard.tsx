import React from 'react';
import { FileText, Users, Clock, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string; icon: any; color: string }) => (
  <div className="bg-surface backdrop-blur-lg rounded-lg p-6">
    <div className="flex items-center">
      <div className={`rounded-full p-3 ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-gray-900 text-2xl font-semibold mt-1">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { title: '進行中標案', value: '12', icon: FileText, color: 'bg-blue-500' },
    { title: '合作廠商', value: '48', icon: Users, color: 'bg-green-500' },
    { title: '待處理項目', value: '6', icon: Clock, color: 'bg-yellow-500' },
    { title: '本月完成', value: '23', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">儀表板</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;