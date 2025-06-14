
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import GradientCard from '../components/ui/GradientCard';

const quoteSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  phone: z.string().min(10, 'رقم الهاتف مطلوب'),
  projectType: z.string().min(1, 'نوع المشروع مطلوب'),
  location: z.string().optional(),
  notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const RequestQuote = () => {
  const { t } = useLanguage();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Quote request submitted:', data);
      
      toast.success('تم إرسال طلب العرض بنجاح! سنتواصل معك قريباً');
      reset();
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى');
    }
  };

  return (
    <div className="min-h-screen py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            طلب عرض أسعار
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            احصل على عرض أسعار مخصص لمشروعك
          </p>
        </motion.div>

        <GradientCard>
          <div className="p-8">
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
                  <Label htmlFor="projectType">نوع المشروع *</Label>
                  <Select onValueChange={(value) => setValue('projectType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="اختر نوع المشروع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">سكني</SelectItem>
                      <SelectItem value="commercial">تجاري</SelectItem>
                      <SelectItem value="industrial">صناعي</SelectItem>
                      <SelectItem value="renovation">تجديد</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="location">الموقع</Label>
                <Input
                  id="location"
                  {...register('location')}
                  className="mt-2"
                  placeholder="المدينة، المنطقة"
                />
              </div>

              <div>
                <Label htmlFor="notes">ملاحظات إضافية</Label>
                <Textarea
                  id="notes"
                  {...register('notes')}
                  className="mt-2"
                  rows={4}
                  placeholder="اكتب أي تفاصيل إضافية حول مشروعك..."
                />
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="space-y-2">
                  <div className="text-gray-600">
                    <p className="font-medium">رفع ملفات المشروع (اختياري)</p>
                    <p className="text-sm">يمكنك رفع مخططات، صور، أو أي ملفات متعلقة بالمشروع</p>
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    اختيار الملفات
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب العرض'}
              </Button>
            </form>
          </div>
        </GradientCard>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">أو تواصل معنا مباشرة</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+218911234567" className="text-blue-600 hover:text-blue-700 font-medium">
              📞 +218 91 123 4567
            </a>
            <a href="mailto:info@zan-aluminum.com" className="text-blue-600 hover:text-blue-700 font-medium">
              ✉️ info@zan-aluminum.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestQuote;
