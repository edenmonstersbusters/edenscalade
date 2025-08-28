import React from 'react';
import { Mountain, BookOpen, Calendar, Map, Trophy, User, Target } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  userXP: number;
  userLevel: number;
  activeQuestsCount?: number;
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentSection, 
  onSectionChange, 
  userXP, 
  userLevel,
  activeQuestsCount = 0
}) => {
  const navItems = [
    { id: 'today', label: 'Aujourd\'hui', icon: Calendar },
    { id: 'training', label: 'Entraînement', icon: Mountain },
    { id: 'quests', label: 'Quêtes', icon: Target, badge: activeQuestsCount },
    { id: 'documentation', label: 'Documentation', icon: BookOpen },
    { id: 'map', label: 'Carte', icon: Map },
    { id: 'progress', label: 'Progression', icon: Trophy },
  ];

  return (
    <div className="bg-white shadow-lg border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Edenscalade
              </h1>
              <p className="text-xs text-gray-500">Grimpez vers l'excellence</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon, badge }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                  currentSection === id
                    ? 'bg-blue-100 text-blue-700 shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center relative">
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                  {badge && badge > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {badge > 9 ? '9+' : badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </nav>

          {/* User Stats */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-700">Niveau {userLevel}</p>
                <p className="text-xs text-gray-500">{userXP} XP</p>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex space-x-1 pb-2 overflow-x-auto">
          {navItems.map(({ id, label, icon: Icon, badge }) => (
            <button
              key={id}
              onClick={() => onSectionChange(id)}
              className={`flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                currentSection === id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col items-center relative">
                <Icon className="w-4 h-4 mb-1" />
                {label}
                {badge && badge > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {badge > 9 ? '9+' : badge}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;