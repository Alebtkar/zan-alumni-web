
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { MapPin, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import GradientCard from '../components/ui/GradientCard';

const jobApplicationSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().min(10, 'رقم الهاتف مطلوب'),
  position: z.string().min(1, 'الوظيفة مطلوبة'),
  coverLetter: z.string().min(50, 'رسالة التغطية مطلوبة (50 حرف على الأقل)'),
});

type JobApplicationData = z.infer<typeof jobApplicationSchema>;

const Careers = () => {
  const { t } = useLanguage();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema)
  });

  const openPositions = [
    {
      id: '1',
      title: 'مهندس معماري',
      department: 'الهندسة',
      type: 'دوام كامل',
      location: 'طرابلس',
      description: 'مطلوب مهندس معماري بخبرة في تصميم المباني السكنية والتجارية',
      requirements: [
        'بكالوريوس هندسة معمارية',
        'خبرة 3-5 سنوات',
        'إجادة AutoCAD و Revit',
        'إجادة اللغة الإنجليزية'
      ]
    },
    {
      id: '2',
      title: 'فني تركيب ألمونيوم',
      department: 'الإنتاج',
      type: 'دوام كامل',
      location: 'بنغازي',
      description: 'مطلوب فني متخصص في تركيب وصيانة الألمونيوم والزجاج',
      requirements: [
        'دبلوم فني أو خبرة عملية',
        'خبرة 2-4 سنوات',
        'مهارات في استخدام الأدوات',
        'اللياقة البدنية للعمل'
      ]
    },
    {
      id: '3',
      title: 'مدير مبيعات',
      department: 'المبيعات',
      type: 'دوام كامل',
      location: 'طرابلس',
      description: 'مطلوب مدير مبيعات لإدارة فريق المبيعات وتطوير الأعمال',
      requirements: [
        'بكالوريوس في إدارة الأعمال أو التسويق',
        'خبرة 5+ سنوات في المبيعات',
        'مهارات قيادية قوية',
        'خبرة في مجال البناء مفضلة'
      ]
    }
  ];

  const onSubmit = async (data: JobApplicationData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Job application submitted:', data);
      
      toast.success('تم إرسال طلب التوظيف بنجاح! سنتواصل معك قريباً');
      reset();
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى');
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            الوظائف المتاحة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلى فريقنا المتميز وكن جزءاً من نجاحنا
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {position.department}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {position.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">المتطلبات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    تقدم للوظيفة
                  </Button>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GradientCard>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8">تقدم بطلب توظيف</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="mt-2"
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="mt-2"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">رقم الهاتف *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className="mt-2"
                      placeholder="+218 91 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="position">الوظيفة المطلوبة *</Label>
                    <Select onValueChange={(value) => setValue('position', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="اختر الوظيفة" />
                      </SelectTrigger>
                      <SelectContent>
                        {openPositions.map((position) => (
                          <SelectItem key={position.id} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.position && (
                      <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">رسالة التغطية *</Label>
                  <Textarea
                    id="coverLetter"
                    {...register('coverLetter')}
                    className="mt-2"
                    rows={6}
                    placeholder="اكتب رسالة تعريفية عن نفسك وخبراتك ولماذا تريد العمل معنا..."
                  />
                  {errors.coverLetter && (
                    <p className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</p>
                  )}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-gray-600">
                      <p className="font-medium">رفع السيرة الذاتية</p>
                      <p className="text-sm">يرجى رفع سيرتك الذاتية بصيغة PDF</p>
                    </div>
                    <Button type="button" variant="outline" size="sm">
                      اختيار الملف
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </Button>
              </form>
            </div>
          </GradientCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
