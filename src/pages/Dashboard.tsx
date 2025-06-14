
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Users, FileText, Star, TrendingUp, Calendar, MessageSquare, Images, Eye, Edit, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import GradientCard from '../components/ui/GradientCard';
import { mockProjects, mockArticles } from '../data/mockData';

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
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="quotes">طلبات العروض</TabsTrigger>
              <TabsTrigger value="applications">طلبات التوظيف</TabsTrigger>
              <TabsTrigger value="projects">المشاريع</TabsTrigger>
              <TabsTrigger value="articles">المقالات</TabsTrigger>
              <TabsTrigger value="gallery">المعرض</TabsTrigger>
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

            <TabsContent value="projects">
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">إدارة المشاريع</h3>
                    <Button size="sm">إضافة مشروع جديد</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockProjects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 bg-white">
                        <img 
                          src={project.images[0]} 
                          alt={project.title}
                          className="w-full h-32 object-cover rounded mb-3"
                        />
                        <h4 className="font-medium mb-2">{project.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{project.type}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </TabsContent>

            <TabsContent value="articles">
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">إدارة المقالات</h3>
                    <Button size="sm">إضافة مقال جديد</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {mockArticles.map((article) => (
                      <div key={article.id} className="flex gap-4 p-4 border rounded-lg bg-white">
                        {article.image && (
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{article.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{article.category}</p>
                          <p className="text-xs text-gray-500">{article.publishedAt}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </TabsContent>

            <TabsContent value="gallery">
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">إدارة المعرض</h3>
                    <Button size="sm">إضافة صور جديدة</Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=200&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=200&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=200&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=200&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=200&h=200&fit=crop'
                    ].map((image, index) => (
                      <div key={index} className="relative group">
                        <img 
                          src={image} 
                          alt={`صورة ${index + 1}`}
                          className="w-full h-24 object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                            <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GradientCard>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
