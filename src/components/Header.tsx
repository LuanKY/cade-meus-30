import React from 'react';
import { BanknoteIcon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full text-center mt-8 animate-fadeIn">
      <div className="flex items-center justify-center mb-4">
        <BanknoteIcon className="w-12 h-12 text-green-500 mr-2" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800">
          Cadê meus R$30?
        </h1>
        <BanknoteIcon className="w-12 h-12 text-green-500 ml-2" />
      </div>
      <h2 className="text-xl md:text-2xl text-slate-700 italic font-semibold">
        Oi, lembra de mim? Eu sou os R$30 que você tá ignorando!
      </h2>
    </header>
  );
};