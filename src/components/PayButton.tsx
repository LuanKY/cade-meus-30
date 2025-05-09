import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const PayButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 1) {
      setMessage('Clicando não resolve, precisa pagar mesmo!');
    } else if (newCount === 3) {
      setMessage('Insistindo, né? Transfere logo esses R$30!');
    } else if (newCount === 5) {
      setMessage('Ok, agora você está só me evitando...');
    } else if (newCount >= 10) {
      setMessage('Imagine se você usasse essa energia para fazer um PIX!');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button
        className={`bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-full text-2xl md:text-3xl shadow-lg transform transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-xl' : ''
        } relative overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <span className="flex items-center">
          Pagar Agora
          <ArrowRightIcon className="w-8 h-8 ml-2" />
        </span>
        <span
          className={`absolute inset-0 bg-white opacity-20 transform scale-x-0 transition-transform origin-left ${
            isHovered ? 'scale-x-100' : ''
          }`}
        ></span>
      </button>
      
      {message && (
        <p className="text-slate-700 mt-4 text-lg animate-bounce">{message}</p>
      )}
    </div>
  );
};