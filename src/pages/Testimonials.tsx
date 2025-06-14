
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';
import { mockReviews } from '../data/mockData';

const Testimonials = () => {
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
            آراء العملاء
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ماذا يقول عملاؤنا الكرام عن خدماتنا وجودة أعمالنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard>
                <div className="p-6 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    {review.project && (
                      <p className="text-sm text-gray-600 mt-1">{review.project}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(review.createdAt).toLocaleDateString('ar-LY')}
                    </p>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-8">إحصائيات رضا العملاء</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">نسبة رضا العملاء</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">مشروع مكتمل</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">سنوات خبرة</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">هل تريد أن تكون العميل التالي؟</h3>
          <p className="text-gray-600 mb-8">انضم إلى قائمة عملائنا الراضين</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              احصل على عرض أسعار
            </a>
            <a href="/contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
