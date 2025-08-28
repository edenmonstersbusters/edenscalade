import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Filter } from 'lucide-react';
import { climbingGyms } from '../data/gyms';
import { ClimbingGym } from '../types';

interface ClimbingMapProps {
  onGymVisit?: (gymId: string) => void;
}

const ClimbingMap: React.FC<ClimbingMapProps> = ({ onGymVisit }) => {
  const [selectedGym, setSelectedGym] = useState<ClimbingGym | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [mapCenter, setMapCenter] = useState({ lat: 48.8566, lng: 2.3522 });
  const [visitedGyms, setVisitedGyms] = useState<string[]>([]);

  useEffect(() => {
    // Simulate geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          setMapCenter(location);
        },
        () => {
          // Default to Paris if geolocation fails
          console.log('Geolocation failed, using default location');
        }
      );
    }
  }, []);

  const getGymTypeIcon = (type: string) => {
    switch (type) {
      case 'bouldering':
        return '🪨';
      case 'sport':
        return '🧗‍♂️';
      case 'mixed':
        return '🏔️';
      default:
        return '🧗';
    }
  };

  const getGymTypeColor = (type: string) => {
    switch (type) {
      case 'bouldering':
        return 'bg-orange-100 text-orange-700';
      case 'sport':
        return 'bg-blue-100 text-blue-700';
      case 'mixed':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const calculateDistance = (gym: ClimbingGym) => {
    if (!userLocation) return null;
    
    const R = 6371; // Earth's radius in km
    const dLat = (gym.lat - userLocation.lat) * Math.PI / 180;
    const dLng = (gym.lng - userLocation.lng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(userLocation.lat * Math.PI / 180) * Math.cos(gym.lat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    return Math.round(distance * 10) / 10;
  };

  const filteredGyms = climbingGyms.filter(gym => {
    const matchesSearch = gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gym.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || gym.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleCallGym = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleGetDirections = (gym: ClimbingGym) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${gym.lat},${gym.lng}`;
    window.open(url, '_blank');
  };

  const handleGymClick = (gym: ClimbingGym) => {
    if (!visitedGyms.includes(gym.id)) {
      setVisitedGyms(prev => [...prev, gym.id]);
      onGymVisit?.(gym.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Carte des Salles d'Escalade</h2>
        <p className="text-gray-600">Trouvez la salle parfaite près de chez vous</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher une salle ou une ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tous types</option>
              <option value="bouldering">🪨 Bloc</option>
              <option value="sport">🧗‍♂️ Voie</option>
              <option value="mixed">🏔️ Mixte</option>
            </select>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-2xl shadow-lg mb-8">
        <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-t-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-opacity-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Carte Interactive</h3>
              <p className="text-gray-600">Interface de carte complète avec géolocalisation</p>
              {userLocation && (
                <p className="text-sm text-green-600 mt-2">
                  📍 Votre position: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                </p>
              )}
            </div>
          </div>
          
          {/* Simulated map pins */}
          <div className="absolute top-20 left-20">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">📍</div>
          </div>
          <div className="absolute top-32 right-32">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">📍</div>
          </div>
          <div className="absolute bottom-24 left-1/3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm animate-bounce">📍</div>
          </div>
        </div>
      </div>

      {/* Gym List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGyms.map((gym) => {
          const distance = calculateDistance(gym);
          
          return (
            <div
              key={gym.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${visitedGyms.includes(gym.id) ? 'ring-2 ring-green-300' : ''}`}
              onClick={() => handleGymClick(gym)}
            >
              <div className={`p-4 bg-gradient-to-r ${
                gym.type === 'bouldering' ? 'from-orange-400 to-red-500' :
                gym.type === 'sport' ? 'from-blue-400 to-blue-600' :
                'from-purple-400 to-purple-600'
              }`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getGymTypeIcon(gym.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGymTypeColor(gym.type)} bg-white bg-opacity-90`}>
                      {gym.type === 'bouldering' ? 'Bloc' : 
                       gym.type === 'sport' ? 'Voie' : 'Mixte'}
                    </span>
                  </div>
                  {distance && (
                    <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {distance} km
                    </span>
                  )}
                  {visitedGyms.includes(gym.id) && (
                    <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                      ✓ Visitée
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{gym.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{gym.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-700 text-sm">{gym.hours}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-700 text-sm">{gym.phone}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleCallGym(gym.phone)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler</span>
                  </button>
                  
                  <button
                    onClick={() => handleGetDirections(gym)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Y aller</span>
                  </button>
                </div>

                {gym.website && (
                  <a
                    href={gym.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-2 text-center text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center space-x-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Site web</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredGyms.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune salle trouvée</h3>
          <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default ClimbingMap;