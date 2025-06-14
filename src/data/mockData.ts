
import { Project, Service, Article, Review, User } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'مجمع الزهراء السكني',
    description: 'مشروع سكني فاخر يضم 50 شقة مع واجهات زجاجية حديثة',
    type: 'residential',
    slug: 'zahra-residential-complex',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop'
    ],
    location: 'طرابلس، ليبيا',
    timeline: [
      {
        id: '1',
        title: 'بداية التخطيط',
        description: 'وضع المخططات الأولية والتصاميم',
        date: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
      },
      {
        id: '2',
        title: 'مرحلة التصميم',
        description: 'إنجاز التصاميم النهائية والحصول على الموافقات',
        date: '2024-02-01',
        image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop'
      }
    ],
    status: 'completed',
    clientReview: {
      id: '1',
      name: 'أحمد محمد',
      project: 'مجمع الزهراء السكني',
      comment: 'عمل ممتاز وجودة عالية في التنفيذ',
      rating: 5,
      createdAt: '2024-03-15'
    },
    createdAt: '2024-01-01',
    updatedAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'برج الأعمال التجاري',
    description: 'برج تجاري من 15 طابق بواجهة زجاجية متطورة',
    type: 'commercial',
    slug: 'business-tower',
    images: [
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop'
    ],
    location: 'بنغازي، ليبيا',
    timeline: [
      {
        id: '3',
        title: 'بداية المشروع',
        description: 'الحصول على التراخيص والبدء في الأعمال',
        date: '2024-02-01',
        image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop'
      }
    ],
    status: 'ongoing',
    createdAt: '2024-02-01',
    updatedAt: '2024-06-01'
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'واجهات الألمونيوم',
    slug: 'aluminum-facades',
    description: 'تصميم وتنفيذ واجهات الألمونيوم الحديثة للمباني السكنية والتجارية',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '2',
    title: 'الواجهات الزجاجية',
    slug: 'glass-facades',
    description: 'تركيب الواجهات الزجاجية المتطورة مع أحدث التقنيات',
    icon: '🪟',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  },
  {
    id: '3',
    title: 'الأبواب والنوافذ',
    slug: 'doors-windows',
    description: 'تصنيع وتركيب الأبواب والنوافذ من الألمونيوم والزجاج',
    icon: '🚪',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'أحدث تقنيات الواجهات الزجاجية',
    slug: 'latest-glass-facade-technologies',
    category: 'تقنية',
    body: 'تشهد صناعة الواجهات الزجاجية تطوراً مستمراً مع ظهور تقنيات جديدة...',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop',
    publishedAt: '2024-06-01',
    createdAt: '2024-06-01',
    updatedAt: '2024-06-01'
  },
  {
    id: '2',
    title: 'مشروعنا الجديد في طرابلس',
    slug: 'new-project-tripoli',
    category: 'أخبار الشركة',
    body: 'نعلن عن بدء العمل في مشروع جديد في العاصمة طرابلس...',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop',
    publishedAt: '2024-05-15',
    createdAt: '2024-05-15',
    updatedAt: '2024-05-15'
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    name: 'سارة أحمد',
    project: 'مجمع الزهراء السكني',
    comment: 'خدمة ممتازة وجودة عالية في التنفيذ. أنصح بالتعامل مع الشركة',
    rating: 5,
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    name: 'محمد علي',
    project: 'برج الأعمال التجاري',
    comment: 'فريق محترف والتزام بالمواعيد المحددة',
    rating: 5,
    createdAt: '2024-04-01'
  },
  {
    id: '3',
    name: 'فاطمة حسن',
    project: 'فيلا خاصة',
    comment: 'تصميم رائع وتنفيذ متقن',
    rating: 4,
    createdAt: '2024-04-15'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'أحمد إدارة',
    email: 'admin@zan-aluminum.com',
    role: 'superAdmin',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01'
  }
];
