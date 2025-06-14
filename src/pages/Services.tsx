
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';
import { zanServices } from '../data/services';

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال الألمونيوم والزجاج لجميع أنواع المشاريع
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {zanServices.map((service, index) => (
            <GradientCard key={service.id}>
              <div className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      تصميم
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      تنفيذ
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      صيانة
                    </span>
                  </div>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    عرض التفاصيل ←
                  </Link>
                </div>
              </div>
            </GradientCard>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'التصميم المعماري',
              description: 'تصميم معماري متطور باستخدام أحدث البرامج',
              icon: '📐'
            },
            {
              title: 'الاستشارات الفنية',
              description: 'استشارات فنية متخصصة لجميع المشاريع',
              icon: '💡'
            },
            {
              title: 'الصيانة والدعم',
              description: 'خدمات صيانة شاملة ودعم فني مستمر',
              icon: '🔧'
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
