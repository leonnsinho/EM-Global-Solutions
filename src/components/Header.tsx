import { TrendingUp } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="text-base sm:text-2xl font-bold text-gray-900">EM Global Solutions</span>
          </div>
          <button
            onClick={onContactClick}
            className="bg-blue-600 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <span className="hidden sm:inline">Solicitar Propuesta</span>
            <span className="sm:hidden">Contacto</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
