import React from 'react';
import hungryImg from '../assets/hungry.jpg';

export const MemeDisplay: React.FC = () => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-white p-4 transform transition-all hover:scale-105 duration-300">
      <h3 className="text-lg font-semibold text-center mb-3 text-slate-700">
        Eu esperando...
      </h3>
      <div className="relative pb-[56.25%]">
        <img
          src={hungryImg}
          alt="Pessoa esperando com fome"
          className="absolute inset-0 w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};