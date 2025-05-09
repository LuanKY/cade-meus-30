import React, { useState } from 'react';
import { ArrowRightIcon, CopyIcon, CheckIcon } from 'lucide-react';

export const PayButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const pixKey = 'kyrtinem@gmail.com';

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

    setShowPix(true);
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
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

      {showPix && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-lg animate-fadeIn">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Chave Pix:</h3>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <span className="text-lg text-slate-700">{pixKey}</span>
            <button
              onClick={copyPixKey}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              title="Copiar chave Pix"
            >
              {copied ? (
                <CheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <CopyIcon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
