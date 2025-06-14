
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import GradientCard from '../components/ui/GradientCard';
import { mockArticles } from '../data/mockData';

const ArticleDetail = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  const article = mockArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
          <Link to="/news">
            <Button>العودة إلى المقالات</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/news" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            العودة إلى المقالات
          </Link>
        </motion.div>

        <GradientCard>
          <article className="overflow-hidden">
            {article.image && (
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            )}
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.publishedAt}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  {article.category}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.body}
                </p>
              </div>
            </div>
          </article>
        </GradientCard>
      </div>
    </div>
  );
};

export default ArticleDetail;
