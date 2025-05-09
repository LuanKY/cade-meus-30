import React from 'react';
import { Header } from './components/Header';
import { DayCounter } from './components/DayCounter';
import { PayButton } from './components/PayButton';
import { MemeDisplay } from './components/MemeDisplay';
import { ReminderText } from './components/ReminderText';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-between py-8 px-4 font-['Poppins']">
      <div className="max-w-3xl w-full flex flex-col items-center gap-8 flex-grow">
        <Header />
        <DayCounter />
        <PayButton />
        <MemeDisplay />
        <ReminderText />
      </div>
      <Footer />
    </div>
  );
}

export default App;