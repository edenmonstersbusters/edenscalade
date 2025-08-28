import React, { useState } from 'react';
import { BookOpen, Clock, ExternalLink, Search, Filter, ShoppingBag } from 'lucide-react';
import { detailedArticles } from '../data/detailedArticles';
import { Article } from '../types';
import EquipmentStore from './EquipmentStore';

interface DocumentationProps {
  onArticleRead: (articleId: string) => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onArticleRead }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'articles' | 'equipment'>('articles');

  const categories = [
    { id: 'all', label: 'Tout', icon: '📚' },
    { id: 'techniques', label: 'Techniques', icon: '🧗' },
    { id: 'equipment', label: 'Équipement', icon: '🎒' },
    { id: 'training', label: 'Entraînement', icon: '💪' },
    { id: 'tips', label: 'Conseils', icon: '💡' }
  ];

  const filteredArticles = detailedArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    onArticleRead(article.id);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'techniques':
        return 'bg-blue-100 text-blue-700';
      case 'equipment':
        return 'bg-green-100 text-green-700';
      case 'training':
        return 'bg-orange-100 text-orange-700';
      case 'tips':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (activeTab === 'equipment') {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Matériel d'Escalade</h2>
            <p className="text-gray-600">Découvrez et achetez le meilleur équipement</p>
          </div>
          <button
            onClick={() => setActiveTab('articles')}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Voir les Articles
          </button>
        </div>
        <EquipmentStore />
      </div>
    );
  }
  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setSelectedArticle(null)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          ← Retour aux articles
        </button>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${selectedArticle.image})` }}>
            <div className="h-full bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(selectedArticle.category)} text-gray-800 bg-white bg-opacity-90`}>
                  {selectedArticle.category}
                </span>
                <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
                <div className="flex items-center text-white text-opacity-90">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{selectedArticle.readTime} min de lecture</span>
                  {selectedArticle.author && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-sm">Par {selectedArticle.author}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
            
            {selectedArticle.tags && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Documentation Escalade</h2>
          <p className="text-gray-600">Apprenez les techniques, découvrez l'équipement, perfectionnez votre pratique</p>
        </div>
        <button
          onClick={() => setActiveTab('equipment')}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Voir le Matériel
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => handleArticleClick(article)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="h-full bg-black bg-opacity-30 p-4 flex flex-col justify-between">
                <span className={`self-start px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)} bg-white bg-opacity-90`}>
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.content.replace(/[#*]/g, '').substring(0, 150)}...
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime} min</span>
                </div>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-1">Lire</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
          <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default Documentation;