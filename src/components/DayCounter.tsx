import React, { useState, useEffect } from 'react';
import { ClockIcon } from 'lucide-react';
import { BORROWED_DATE } from '../constants';

export const DayCounter: React.FC = () => {
  const [hoursPassed, setHoursPassed] = useState<number>(0);

  useEffect(() => {
    const calculateHours = () => {
      const now = new Date();
      const borrowDate = new Date(BORROWED_DATE);
      const diffTime = Math.abs(now.getTime() - borrowDate.getTime());
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      setHoursPassed(diffHours);
    };

    calculateHours();
    const timer = setInterval(calculateHours, 1000 * 60 * 5);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center transform transition-all hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-3">
        <ClockIcon className="w-6 h-6 text-red-500 mr-2" />
        <h3 className="text-lg font-semibold text-slate-700">Tempo de espera</h3>
      </div>
      <div className="text-5xl font-bold text-red-500">{hoursPassed}</div>
      <p className="text-slate-600 mt-2">
        {hoursPassed === 1 ? 'hora' : 'horas'} sem ver meus R$30
      </p>
    </div>
  );
};
