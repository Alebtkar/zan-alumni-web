
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, FileText, Star, TrendingUp, Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import GradientCard from '../components/ui/GradientCard';

const Dashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      title: 'طلبات العروض',
      value: '24',
      change: '+12%',
      icon: <FileText className="h-6 w-6" />,
      color: 'text-blue-600'
    },
    {
      title: 'طلبات التوظيف',
      value: '8',
      change: '+5%',
      icon: <Users className="h-6 w-6" />,
      color: 'text-green-600'
    },
    {
      title: 'تقييم العملاء',
      value: '4.8',
      change: '+0.2',
      icon: <Star className="h-6 w-6" />,
      color: 'text-yellow-600'
    },
    {
      title: 'زوار الموقع',
      value: '1,245',
      change: '+23%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-purple-600'
    }
  ];

  const recentQuotes = [
    { id: '1', name: 'أحمد محمد', projectType: 'سكني', date: '2024-06-10', status: 'pending' },
    { id: '2', name: 'سارة أحمد', projectType: 'تجاري', date: '2024-06-09', status: 'approved' },
    { id: '3', name: 'محمد علي', projectType: 'صناعي', date: '2024-06-08', status: 'pending' }
  ];

  const recentApplications = [
    { id: '1', name: 'فاطمة حسن', position: 'مهندس معماري', date: '2024-06-10' },
    { id: '2', name: 'عمر إبراهيم', position: 'فني تركيب', date: '2024-06-09' },
    { id: '3', name: 'ليلى سالم', position: 'مدير مبيعات', date: '2024-06-08' }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600">مرحباً بك في لوحة تحكم شركة زان للألمونيوم والزجاج</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </p>
                    </div>
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="quotes" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="quotes">طلبات العروض</TabsTrigger>
              <TabsTrigger value="applications">طلبات التوظيف</TabsTrigger>
              <TabsTrigger value="content">إدارة المحتوى</TabsTrigger>
            </TabsList>

            <TabsContent value="quotes">
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">طلبات العروض الحديثة</h3>
                    <Button size="sm">عرض الكل</Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right py-2">الاسم</th>
                          <th className="text-right py-2">نوع المشروع</th>
                          <th className="text-right py-2">التاريخ</th>
                          <th className="text-right py-2">الحالة</th>
                          <th className="text-right py-2">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentQuotes.map((quote) => (
                          <tr key={quote.id} className="border-b">
                            <td className="py-3">{quote.name}</td>
                            <td className="py-3">{quote.projectType}</td>
                            <td className="py-3">{quote.date}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                quote.status === 'approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {quote.status === 'approved' ? 'موافق عليه' : 'قيد المراجعة'}
                              </span>
                            </td>
                            <td className="py-3">
                              <Button variant="outline" size="sm">عرض</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </GradientCard>
            </TabsContent>

            <TabsContent value="applications">
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">طلبات التوظيف الحديثة</h3>
                    <Button size="sm">عرض الكل</Button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right py-2">الاسم</th>
                          <th className="text-right py-2">الوظيفة</th>
                          <th className="text-right py-2">التاريخ</th>
                          <th className="text-right py-2">الإجراءات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentApplications.map((application) => (
                          <tr key={application.id} className="border-b">
                            <td className="py-3">{application.name}</td>
                            <td className="py-3">{application.position}</td>
                            <td className="py-3">{application.date}</td>
                            <td className="py-3">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">عرض</Button>
                                <Button variant="outline" size="sm">تحميل CV</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </GradientCard>
            </TabsContent>

            <TabsContent value="content">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <GradientCard>
                  <div className="p-6 text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">إدارة المقالات</h3>
                    <p className="text-gray-600 mb-4">إضافة وتحرير المقالات والأخبار</p>
                    <Button>إدارة المقالات</Button>
                  </div>
                </GradientCard>

                <GradientCard>
                  <div className="p-6 text-center">
                    <BarChart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">إدارة المشاريع</h3>
                    <p className="text-gray-600 mb-4">إضافة وتحديث المشاريع</p>
                    <Button>إدارة المشاريع</Button>
                  </div>
                </GradientCard>

                <GradientCard>
                  <div className="p-6 text-center">
                    <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">إدارة الخدمات</h3>
                    <p className="text-gray-600 mb-4">تحديث وإدارة الخدمات</p>
                    <Button>إدارة الخدمات</Button>
                  </div>
                </GradientCard>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
