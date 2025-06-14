
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في جميع أعمالنا'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'الفريق',
      description: 'فريق متخصص وذو خبرة عالية في المجال'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'الدقة',
      description: 'نحرص على الدقة والإتقان في كل التفاصيل'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'رضا العملاء',
      description: 'رضا عملائنا هو هدفنا الأساسي'
    }
  ];

  const team = [
    {
      name: 'المهندس أحمد محمد',
      position: 'المدير العام',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'المهندسة سارة أحمد',
      position: 'مدير التصميم',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'الأستاذ محمد علي',
      position: 'مدير العمليات',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            عن الشركة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرف على قصتنا ورؤيتنا ومهمتنا في عالم الألمونيوم والزجاج
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                تأسست شركة زان للألمونيوم والزجاج من رؤية واضحة: تقديم حلول معمارية متطورة تجمع بين الجودة العالية والتصميم المبتكر. منذ تأسيسنا، نسعى لأن نكون الخيار الأول للعملاء في ليبيا والمنطقة.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                بدأنا كشركة صغيرة متخصصة في تركيب النوافذ، واليوم نحن نقدم مجموعة شاملة من الخدمات تشمل الواجهات الزجاجية المتطورة، أنظمة الألمونيوم المتقدمة، والحلول المعمارية المبتكرة.
              </p>
              <p className="text-gray-600 leading-relaxed">
                فخورون بأننا ساهمنا في إنجاز أكثر من 150 مشروع في جميع أنحاء ليبيا، من المباني السكنية إلى المجمعات التجارية والمنشآت الصناعية.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Company Building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GradientCard>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  أن نكون الشركة الرائدة في مجال حلول الألمونيوم والزجاج في ليبيا والمنطقة، ونساهم في تطوير البناء والعمارة الحديثة.
                </p>
              </div>
            </GradientCard>

            <GradientCard>
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">مهمتنا</h3>
                <p className="text-gray-600 leading-relaxed">
                  تقديم حلول معمارية متطورة وخدمات عالية الجودة تلبي احتياجات عملائنا وتفوق توقعاتهم، مع الحفاظ على أعلى معايير الجودة والسلامة.
                </p>
              </div>
            </GradientCard>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">فريق القيادة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GradientCard>
                  <div className="p-6 text-center">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.position}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-8">إنجازاتنا بالأرقام</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">موظف متخصص</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
