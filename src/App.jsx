import React, { useState } from 'react';
import { Trophy, Calendar, User, BarChart3 } from 'lucide-react';

const Fixture = () => <div className="p-4 text-center">⚽ Aquí aparecerán los partidos</div>;
const Ranking = () => <div className="p-4 text-center">🏆 Tabla de posiciones</div>;
const Perfil = () => <div className="p-4 text-center">👤 Mi perfil y foto</div>;

export default function App() {
  const [activeTab, setActiveTab] = useState('fixture');

  const renderContent = () => {
    switch (activeTab) {
      case 'fixture': return <Fixture />;
      case 'ranking': return <Ranking />;
      case 'perfil': return <Perfil />;
      default: return <Fixture />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0">
        <h1 className="text-xl font-bold text-center">Penca Mundialista</h1>
      </header>

      <main className="max-w-md mx-auto">
        {renderContent()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3 shadow-lg max-w-md mx-auto">
        <button 
          onClick={() => setActiveTab('fixture')}
          className={`flex flex-col items-center ${activeTab === 'fixture' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <Calendar size={24} />
          <span className="text-xs">Partidos</span>
        </button>
        <button 
          onClick={() => setActiveTab('ranking')}
          className={`flex flex-col items-center ${activeTab === 'ranking' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <BarChart3 size={24} />
          <span className="text-xs">Ranking</span>
        </button>
        <button 
          onClick={() => setActiveTab('perfil')}
          className={`flex flex-col items-center ${activeTab === 'perfil' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <User size={24} />
          <span className="text-xs">Perfil</span>
        </button>
      </nav>
    </div>
  );
}