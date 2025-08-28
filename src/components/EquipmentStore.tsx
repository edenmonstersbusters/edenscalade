import React, { useState } from 'react';
import { ShoppingCart, Star, ExternalLink, Filter, Search } from 'lucide-react';
import { climbingEquipment, categories, getEquipmentByCategory } from '../data/equipment';
import { Equipment } from '../types';

interface EquipmentStoreProps {
  onEquipmentView?: (equipmentId: string) => void;
}

const EquipmentStore: React.FC<EquipmentStoreProps> = ({ onEquipmentView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  const filteredEquipment = climbingEquipment.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700';
      case 'advanced':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleBuyClick = (equipment: Equipment) => {
    onEquipmentView?.(equipment.id);
    window.open(equipment.buyLink, '_blank');
  };

  if (selectedEquipment) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          onClick={() => setSelectedEquipment(null)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          ← Retour au catalogue
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={selectedEquipment.image}
                alt={selectedEquipment.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedEquipment.difficulty)}`}>
                  {selectedEquipment.difficulty === 'beginner' && '🌱 Débutant'}
                  {selectedEquipment.difficulty === 'intermediate' && '🔥 Intermédiaire'}
                  {selectedEquipment.difficulty === 'advanced' && '⚡ Avancé'}
                </span>
                <div className="flex items-center space-x-1">
                  {renderStars(selectedEquipment.rating)}
                  <span className="text-sm text-gray-600 ml-2">({selectedEquipment.rating})</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedEquipment.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{selectedEquipment.type}</p>
              
              <div className="text-3xl font-bold text-blue-600 mb-6">
                {selectedEquipment.price}{selectedEquipment.currency}
              </div>

              <p className="text-gray-700 mb-6">{selectedEquipment.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Caractéristiques</h3>
                <ul className="space-y-2">
                  {selectedEquipment.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Idéal pour</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEquipment.bestFor.map((use, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleBuyClick(selectedEquipment)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Acheter maintenant</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Boutique Matériel d'Escalade</h2>
        <p className="text-gray-600">Équipez-vous avec le meilleur matériel pour votre progression</p>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Catégories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-3 rounded-lg text-center transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            }`}
          >
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-xs font-medium">Tout</div>
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-3 rounded-lg text-center transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-xs font-medium">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tous niveaux</option>
              <option value="beginner">🌱 Débutant</option>
              <option value="intermediate">🔥 Intermédiaire</option>
              <option value="advanced">⚡ Avancé</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map((equipment) => (
          <div
            key={equipment.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedEquipment(equipment)}
          >
            <div className="relative">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(equipment.difficulty)}`}>
                  {equipment.difficulty === 'beginner' && '🌱'}
                  {equipment.difficulty === 'intermediate' && '🔥'}
                  {equipment.difficulty === 'advanced' && '⚡'}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                {renderStars(equipment.rating).slice(0, 1)}
                <span className="text-sm font-medium">{equipment.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{equipment.name}</h3>
              <p className="text-gray-600 mb-3">{equipment.type}</p>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                {equipment.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-blue-600">
                  {equipment.price}{equipment.currency}
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(equipment.rating)}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {equipment.bestFor.slice(0, 2).map((use, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {use}
                  </span>
                ))}
                {equipment.bestFor.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    +{equipment.bestFor.length - 2}
                  </span>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyClick(equipment);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Voir le produit</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="text-center py-12">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun produit trouvé</h3>
          <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default EquipmentStore;