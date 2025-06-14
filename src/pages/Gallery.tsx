
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GradientCard from '../components/ui/GradientCard';
import { Button } from '../components/ui/button';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      title: 'واجهة زجاجية حديثة',
      category: 'واجهات'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      title: 'مبنى تجاري',
      category: 'تجاري'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
      title: 'برج سكني',
      category: 'سكني'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop',
      title: 'تصميم معماري',
      category: 'تصميم'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop',
      title: 'واجهة ألمونيوم',
      category: 'واجهات'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop',
      title: 'مشروع صناعي',
      category: 'صناعي'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const categories = ['الكل', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const filteredImages = selectedCategory === 'الكل' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            معرض الصور
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استكشف مجموعة من أعمالنا المتميزة في مجال الألمونيوم والزجاج
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GradientCard>
                <div 
                  className="relative overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(galleryImages.indexOf(image))}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full p-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 className="text-lg font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm opacity-75">{galleryImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
