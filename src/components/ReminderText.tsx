import React from 'react';
import { ShoppingBagIcon } from 'lucide-react';

export const ReminderText: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center transform transition-all hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-3">
        <ShoppingBagIcon className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold text-slate-700">Só lembrando...</h3>
      </div>
      <p className="text-slate-700 text-xl">
        Você já gastou mais que isso no Uber essa semana... só dizendo 🤷
      </p>
    </div>
  );
};