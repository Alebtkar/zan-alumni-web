
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { zanServices } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  const service = zanServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">الخدمة غير موجودة</h1>
          <Link to="/services">
            <Button>العودة إلى الخدمات</Button>
          </Link>
        </div>
      </div>
    );
  }

  const serviceFeatures = [
    'تصميم مخصص حسب احتياجات العميل',
    'استخدام أحدث التقنيات والمواد',
    'فريق عمل متخصص ومحترف',
    'ضمان على جميع الأعمال',
    'متابعة دورية وصيانة',
    'أسعار تنافسية'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/services" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة إلى الخدمات
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Image */}
          <GradientCard>
            <div className="overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </GradientCard>

          {/* Service Details */}
          <div className="space-y-6">
            <GradientCard>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h1>
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

                <Link to="/quote">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    احصل على عرض أسعار
                  </Button>
                </Link>
              </div>
            </GradientCard>

            {/* Service Features */}
            <GradientCard>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">مميزات الخدمة</h3>
                <div className="space-y-3">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GradientCard>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <GradientCard>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">خطوات العمل</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'الاستشارة', description: 'دراسة المشروع ومتطلبات العميل' },
                  { step: '2', title: 'التصميم', description: 'إعداد التصميمات والمخططات' },
                  { step: '3', title: 'التنفيذ', description: 'البدء في تنفيذ المشروع' },
                  { step: '4', title: 'التسليم', description: 'تسليم المشروع والمتابعة' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
