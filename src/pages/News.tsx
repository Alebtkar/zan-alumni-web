
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { mockArticles } from '../data/mockData';

const News = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'الكل' },
    { key: 'تقنية', label: 'تقنية' },
    { key: 'أخبار الشركة', label: 'أخبار الشركة' },
    { key: 'نصائح', label: 'نصائح' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? mockArticles 
    : mockArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            الأخبار والمقالات
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تابع آخر الأخبار والتطورات في عالم الألمونيوم والزجاج
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.key)}
              className="flex items-center gap-2"
            >
              <Tag className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link key={article.id} to={`/news/${article.slug}`}>
              <GradientCard>
                <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString('ar-LY')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.body}</p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 hover:text-green-700 font-medium">
                        {t('readMore')}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        فريق التحرير
                      </div>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد مقالات في هذه الفئة</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <GradientCard>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">اشترك في النشرة الإخبارية</h3>
              <p className="text-gray-600 mb-6">احصل على آخر الأخبار والتحديثات مباشرة في صندوق بريدك</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button>اشتراك</Button>
              </div>
            </div>
          </GradientCard>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
