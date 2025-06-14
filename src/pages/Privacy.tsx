
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-gray-600">
            آخر تحديث: يونيو 2024
          </p>
        </motion.div>

        <GradientCard>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. المعلومات التي نجمعها</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                نحن في شركة زان للألمونيوم والزجاج نلتزم بحماية خصوصيتك. نجمع المعلومات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>معلومات شخصية مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف</li>
                <li>معلومات المشروع عند طلب عرض أسعار</li>
                <li>معلومات التصفح وبيانات الاستخدام</li>
                <li>ملفات تعريف الارتباط (Cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. كيف نستخدم معلوماتك</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                نستخدم المعلومات التي نجمعها للأغراض التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>تقديم الخدمات المطلوبة</li>
                <li>التواصل معك بخصوص مشاريعك</li>
                <li>تحسين موقعنا وخدماتنا</li>
                <li>إرسال تحديثات مهمة</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. مشاركة المعلومات</h2>
              <p className="text-gray-600 leading-relaxed">
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>عند الحصول على موافقتك الصريحة</li>
                <li>عندما يتطلب القانون ذلك</li>
                <li>مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. أمان المعلومات</h2>
              <p className="text-gray-600 leading-relaxed">
                نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. نستخدم تشفير SSL وتدابير أمنية أخرى متقدمة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. حقوقك</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>الحق في الوصول إلى معلوماتك</li>
                <li>الحق في تصحيح المعلومات غير الدقيقة</li>
                <li>الحق في حذف معلوماتك</li>
                <li>الحق في تقييد المعالجة</li>
                <li>الحق في نقل البيانات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. ملفات تعريف الارتباط</h2>
              <p className="text-gray-600 leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات متصفحك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. تحديثات السياسة</h2>
              <p className="text-gray-600 leading-relaxed">
                قد نحدث هذه السياسة من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو إشعار على موقعنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. التواصل معنا</h2>
              <p className="text-gray-600 leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>البريد الإلكتروني: privacy@zan-aluminum.com</p>
                <p>الهاتف: +218 91 123 4567</p>
                <p>العنوان: شارع الجمهورية، طرابلس، ليبيا</p>
              </div>
            </section>
          </div>
        </GradientCard>
      </div>
    </div>
  );
};

export default Privacy;
