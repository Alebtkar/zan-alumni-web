
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Star, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { mockProjects, mockArticles, mockReviews } from '../data/mockData';
import { zanServices } from '../data/services';

const Home = () => {
  const { t, isRTL } = useLanguage();

  const heroImages = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1920&h=1080&fit=crop'
  ];

  const whyChooseUsData = [
    {
      icon: <Star className="h-8 w-8" />,
      title: 'جودة عالية',
      description: 'نستخدم أفضل المواد والتقنيات الحديثة'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'فريق محترف',
      description: 'فريق من الخبراء والمتخصصين'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'التزام بالمواعيد',
      description: 'نحرص على تسليم المشاريع في الوقت المحدد'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'خبرة طويلة',
      description: 'سنوات من الخبرة في المجال'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages[0]} 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-gray-900/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            ZAN ALUMINUM & GLASS SYSTEMS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            الرائدون في تصميم وتنفيذ أنظمة الألمونيوم والزجاج المتطورة
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/quote">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                {t('getQuote')}
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                {t('projects')}
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات المتخصصة في الألمونيوم والزجاج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zanServices.slice(0, 3).map((service, index) => (
              <GradientCard key={service.id}>
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={`/services/${service.slug}`} className="text-green-600 hover:text-green-700 font-medium">
                    {t('readMore')} ←
                  </Link>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('projectsShowcase')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعة من أهم مشاريعنا المنجزة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mockProjects.slice(0, 3).map((project, index) => (
              <GradientCard key={project.id}>
                <div className="overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-3">
                      {project.type === 'residential' ? 'سكني' : project.type === 'commercial' ? 'تجاري' : 'صناعي'}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link to={`/projects/${project.slug}`} className="text-green-600 hover:text-green-700 font-medium">
                      عرض التفاصيل ←
                    </Link>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                {t('viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChooseUs')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن الخيار الأفضل لمشاريعك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('clientTestimonials')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ماذا يقول عملاؤنا عنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockReviews.map((review, index) => (
              <GradientCard key={review.id}>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    {review.project && (
                      <p className="text-sm text-gray-500">{review.project}</p>
                    )}
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button size="lg" variant="outline">
                عرض جميع الآراء
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('latestNews')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              آخر الأخبار والمقالات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mockArticles.map((article, index) => (
              <GradientCard key={article.id}>
                <div className="overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.body.substring(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                      <Link to={`/news/${article.slug}`} className="text-green-600 hover:text-green-700 font-medium">
                        {t('readMore')} ←
                      </Link>
                      <span className="text-sm text-gray-500">{article.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </GradientCard>
            ))}
          </div>

          <div className="text-center">
            <Link to="/news">
              <Button size="lg" variant="outline">
                عرض جميع الأخبار
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل لديك مشروع؟
            </h2>
            <p className="text-xl text-green-100 mb-8">
              احصل على استشارة مجانية وعرض أسعار لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  احصل على عرض أسعار
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  اتصل بنا
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
