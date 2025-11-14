import { MessageCircle } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-blue-600 text-white p-3 sm:p-3.5 lg:p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 z-40 animate-bounce"
      aria-label="Entrar em contato"
    >
      <MessageCircle className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full">
        !
      </span>
    </button>
  );
}

export default FloatingButton;
