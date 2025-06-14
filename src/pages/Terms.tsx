
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';

const Terms = () => {
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
            الشروط والأحكام
          </h1>
          <p className="text-xl text-gray-600">
            آخر تحديث: يونيو 2024
          </p>
        </motion.div>

        <GradientCard>
          <div className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. قبول الشروط</h2>
              <p className="text-gray-600 leading-relaxed">
                باستخدام موقع شركة زان للألمونيوم والزجاج أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. وصف الخدمات</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                تقدم شركة زان للألمونيوم والزجاج الخدمات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>تصميم وتنفيذ واجهات الألمونيوم والزجاج</li>
                <li>تركيب الأبواب والنوافذ</li>
                <li>الاستشارات الفنية والهندسية</li>
                <li>الصيانة والدعم الفني</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. شروط الاستخدام</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>يجب أن تكون 18 سنة على الأقل لاستخدام خدماتنا</li>
                <li>يجب تقديم معلومات دقيقة وصحيحة</li>
                <li>عدم استخدام الموقع لأي أغراض غير قانونية</li>
                <li>احترام حقوق الملكية الفكرية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. الطلبات والدفع</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                بخصوص الطلبات والدفع:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>جميع الأسعار المذكورة تشمل الضرائب المطبقة</li>
                <li>يتم تأكيد الطلبات خلال 24-48 ساعة</li>
                <li>الدفع مطلوب وفقاً للجدول الزمني المتفق عليه</li>
                <li>نحتفظ بالحق في تغيير الأسعار دون إشعار مسبق</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. التسليم والتركيب</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                شروط التسليم والتركيب:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>مواعيد التسليم تقديرية وقابلة للتغيير</li>
                <li>العميل مسؤول عن توفير الوصول المناسب لموقع العمل</li>
                <li>التركيب يتم بواسطة فريقنا المتخصص</li>
                <li>فحص العمل مطلوب عند الانتهاء</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. الضمان</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                نقدم ضمان على جميع أعمالنا:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ضمان سنتين على التركيب</li>
                <li>ضمان حسب المواصفات على المواد</li>
                <li>الضمان لا يغطي التلف الناتج عن سوء الاستخدام</li>
                <li>صيانة دورية مجانية للسنة الأولى</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. المسؤولية</h2>
              <p className="text-gray-600 leading-relaxed">
                مسؤوليتنا محدودة بقيمة العقد. لا نتحمل المسؤولية عن الأضرار غير المباشرة أو التبعية أو الخاصة أو العقابية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. الإلغاء والاسترداد</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                سياسة الإلغاء والاسترداد:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>يمكن إلغاء الطلب قبل بدء التنفيذ</li>
                <li>رسوم إلغاء 10% بعد تأكيد الطلب</li>
                <li>لا يمكن الاسترداد بعد بدء التركيب</li>
                <li>حالات خاصة تُدرس بشكل فردي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. حل النزاعات</h2>
              <p className="text-gray-600 leading-relaxed">
                في حالة وجود نزاع، نسعى لحله ودياً أولاً. إذا لم يتم التوصل لحل، فإن المحاكم الليبية المختصة لها الولاية القضائية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. تعديل الشروط</h2>
              <p className="text-gray-600 leading-relaxed">
                نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التعديلات على موقعنا وتصبح سارية فور نشرها.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. معلومات التواصل</h2>
              <p className="text-gray-600 leading-relaxed">
                للاستفسارات حول هذه الشروط والأحكام:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>البريد الإلكتروني: legal@zan-aluminum.com</p>
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

export default Terms;
